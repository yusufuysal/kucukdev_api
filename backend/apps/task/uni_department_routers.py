from fastapi import (
    APIRouter,
    Body,
    Request,
    status,
    Depends,
)
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import List

from apps.task import user_models
from .uni_models import UniversityDepartmentModel
from .user_models import UserModel, Message

router = APIRouter()


@router.post(
    "/{unid}/departments",
    response_description="Add new university department",
    operation_id="createUniversityDepartment",
    response_model=UniversityDepartmentModel,
    responses={
        400: {"model": Message},
        403: {"model": Message},
        404: {"model": Message},
    },
)
async def create_university_department(
    unid: str,
    request: Request,
    university_department: UniversityDepartmentModel = Body(...),
    auth_user: UserModel = Depends(user_models.get_current_user),
):
    """Create department for a university with given universityID"""

    if auth_user["userGroup"] == "professor":
        university_department = jsonable_encoder(university_department)

        if (
            created_university := await request.app.mongodb["universities"].find_one(
                {"_id": unid}
            )
        ) is not None:
            for department in created_university["departments"]:
                if department["name"] == university_department["name"]:
                    return JSONResponse(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        content={"message": "University department already exists"},
                    )

        update_result = await request.app.mongodb["universities"].update_one(
            {"_id": unid}, {"$push": {"departments": university_department}}
        )

        if update_result.modified_count == 1:
            if (
                created_university := await request.app.mongodb[
                    "universities"
                ].find_one({"_id": unid})
            ) is not None:
                return JSONResponse(
                    status_code=status.HTTP_200_OK,
                    content=created_university["departments"],
                )

        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"message": "University not found"},
        )

    return JSONResponse(
        status_code=status.HTTP_403_FORBIDDEN, content={"message": "No right to access"}
    )


@router.get(
    "/{unid}/departments",
    response_description="List all university departments",
    operation_id="listUniversityDepartments",
    response_model=List[UniversityDepartmentModel],
    responses={
        404: {"model": Message},
    },
)
async def list_university_departments(unid: str, request: Request):
    """list all departments of a university with given universityID"""

    if (
        university := await request.app.mongodb["universities"].find_one({"_id": unid})
    ) is not None:
        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content=university["departments"],
        )

    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={"message": "University not found"},
    )


@router.get(
    "/{unid}/departments/{depid}",
    response_description="Show a university department",
    operation_id="getSingleUniversityDepartment",
    response_model=UniversityDepartmentModel,
    responses={
        404: {"model": Message},
    },
)
async def show_university_department(unid: str, depid: str, request: Request):
    """Get a single semester of a university with given universityID and universityDepartmentID"""

    if (
        university := await request.app.mongodb["universities"].find_one(
            {"_id": unid, "departments._id": depid}
        )
    ) is not None:
        for department in university["departments"]:
            if department["_id"] == depid:
                return JSONResponse(
                    status_code=status.HTTP_200_OK,
                    content=department,
                )

    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={"message": "University department not found"},
    )


@router.put(
    "/{unid}/departments/{depid}",
    response_description="Update a university department",
    operation_id="updateUniversityDepartment",
    response_model=Message,
    responses={
        404: {"model": Message},
        403: {"model": Message},
        400: {"model": Message},
    },
)
async def update_university_department(
    unid: str,
    depid: str,
    request: Request,
    university_department: UniversityDepartmentModel = Body(...),
    auth_user: UserModel = Depends(user_models.get_current_user),
):
    """Update department of a university with given universityID and universityDepartmentID"""

    if auth_user["userGroup"] == "professor":
        university_department = {
            k: v for k, v in university_department.dict().items() if v is not None
        }

        if (
            existing_university := await request.app.mongodb["universities"].find_one(
                {"_id": unid}
            )
        ) is None:
            return JSONResponse(
                status_code=status.HTTP_404_NOT_FOUND,
                content={"message": "University not found"},
            )
        else:
            for department in existing_university["departments"]:
                if department["name"] == university_department["name"]:
                    return JSONResponse(
                        status_code=status.HTTP_400_BAD_REQUEST,
                        content={"message": "University department already exists"},
                    )

        if len(university_department) >= 1:
            update_result = await request.app.mongodb["universities"].update_many(
                {"_id": unid, "departments._id": depid},
                {"$set": {"departments.$.name": university_department["name"]}},
            )

            if (
                updated_department := await request.app.mongodb[
                    "universities"
                ].find_one({"_id": unid, "departments._id": depid})
            ) is not None:
                for department in updated_department["departments"]:
                    if department["_id"] == depid:
                        return JSONResponse(
                            status_code=status.HTTP_200_OK, content=department
                        )

        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"message": "University department not found"},
        )

    return JSONResponse(
        status_code=status.HTTP_403_FORBIDDEN, content={"message": "No right to access"}
    )


@router.delete(
    "/{unid}/departments/{depid}",
    response_description="Delete university department",
    operation_id="deleteUniversityDepartment",
    response_model=Message,
    responses={
        404: {"model": Message},
        403: {"model": Message},
    },
)
async def delete_university_department(
    unid: str,
    depid: str,
    request: Request,
    auth_user: UserModel = Depends(user_models.get_current_user),
):
    """Delete a university department with given universityID and universitySemesterID"""

    if auth_user["userGroup"] == "professor":
        delete_result = await request.app.mongodb["universities"].update_one(
            {"_id": unid}, {"$pull": {"departments": {"_id": depid}}}
        )

        if delete_result.modified_count == 1:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={"message": "University department deleted"},
            )

        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"message": "University department not found"},
        )

    return JSONResponse(
        status_code=status.HTTP_403_FORBIDDEN, content={"message": "No right to access"}
    )
