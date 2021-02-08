import React, { Component } from 'react'
import UserConsumer from '../Context';

var Kucukdevapi = require('kucukdevapi');



class AddSemester extends Component {
    state = {
        name: "",
        startDate: "",
        endDate: "",
        startHour: "",
        dLesson: 0,
        dBreak: 0,
        slotCount: 0,
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onCreateSemester = async (userToken, userID, e) => {
        e.preventDefault();

        const { name, startDate, endDate, startHour, dLesson, dBreak, slotCount } = this.state;
        console.log(dLesson)
        console.log(parseInt(dLesson))

        let defaultClient = Kucukdevapi.ApiClient.instance;
        // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
        let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
        OAuth2PasswordBearer.accessToken = userToken;

        let apiInstance = new Kucukdevapi.SemestersApi();
        let uid = userID; // String | 
        let semesterModel = new Kucukdevapi.SemesterModel(name, startDate, endDate, startHour, parseInt(dLesson), parseInt(dBreak), parseInt(slotCount)); // SemesterModel | 
        console.log(semesterModel)
        apiInstance.createSemester(uid, semesterModel, (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        });

        this.props.history.push("/semesters");

    }

    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { userToken, userID, isLogin } = value;

                        return (
                            <div>
                                {
                                    isLogin ?
                                        <div className="flex h-full">
                                            <div className="flex bg-white shadow-xl rounded flex-col md:w-2/3 sm:w-full mx-auto mt-4">
                                                <div className="w-full flex">
                                                    <div
                                                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                                        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80")` }}>
                                                    </div>
                                                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none mx-auto">
                                                        <h3 className="pt-4 text-xl text-center">Add Semester</h3>
                                                        <form onSubmit={this.onCreateSemester.bind(this, userToken, userID)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                                            <div className="mb-4">
                                                                <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="email">
                                                                    Semester Name
                                </label>
                                                                <input
                                                                    className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                    id="name"
                                                                    type="text"
                                                                    placeholder="2020-2021 Spring"
                                                                    name="name"
                                                                    onChange={this.changeInput}
                                                                />
                                                            </div>
                                                            <div className="mb-4 md:flex md:justify-between">
                                                                <div className="md:w-1/2 mb-4 md:mr-2 md:mb-0 sm:w-full">
                                                                    <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="password">
                                                                        Start Date
									</label>
                                                                    <input
                                                                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                        id="startDate"
                                                                        type="datetime-local"
                                                                        placeholder="2018-05-18"
                                                                        name="startDate"
                                                                        onChange={this.changeInput}
                                                                    />
                                                                </div>
                                                                <div className="md:w-1/2  md:ml-2 sm:w-full">
                                                                    <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="c_password">
                                                                        End Date
									</label>
                                                                    <input
                                                                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                        id="endDate"
                                                                        type="datetime-local"
                                                                        placeholder="2018-02-05"
                                                                        name="endDate"
                                                                        onChange={this.changeInput}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="mb-4 md:flex md:justify-between">
                                                                <div className="md:w-1/2 mb-4 md:mr-2 md:mb-0 sm:w-full">
                                                                    <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="password">
                                                                        Start Hour
									</label>
                                                                    <input
                                                                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                        id="startHour"
                                                                        type="text"
                                                                        placeholder="08.10"
                                                                        name="startHour"
                                                                        onChange={this.changeInput}
                                                                    />
                                                                </div>
                                                                <div className="md:w-1/2  md:ml-2 sm:w-full">
                                                                    <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="c_password">
                                                                        Slot Count
									</label>
                                                                    <input
                                                                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                        id="slotCount"
                                                                        type="number"
                                                                        placeholder="14"
                                                                        name="slotCount"
                                                                        min="3"
                                                                        max="15"
                                                                        onChange={this.changeInput}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="mb-4 md:flex md:justify-between">
                                                                <div className="md:w-1/2 mb-4 md:mr-2 md:mb-0 sm:w-full">
                                                                    <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="password">
                                                                        Duration of a Lesson
									</label>
                                                                    <input
                                                                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                        id="dLesson"
                                                                        type="number"
                                                                        placeholder="50"
                                                                        name="dLesson"
                                                                        min="1"
                                                                        max="60"
                                                                        onChange={this.changeInput}
                                                                    />
                                                                </div>
                                                                <div className="md:w-1/2  md:ml-2 sm:w-full">
                                                                    <label className="block mb-2 text-md font-bold text-gray-700" htmlFor="c_password">
                                                                        Duration of a Break
									</label>
                                                                    <input
                                                                        className="w-full px-3 py-2 mb-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                                        id="dBreak"
                                                                        type="number"
                                                                        placeholder="10"
                                                                        name="dBreak"
                                                                        min="1"
                                                                        max="60"
                                                                        onChange={this.changeInput}
                                                                    />
                                                                </div>
                                                            </div>



                                                            <div className="mb-6 text-center">
                                                                <button
                                                                    className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                                                                    type="submit"
                                                                >
                                                                    Add Semester
                                </button>
                                                            </div>
                                                            <hr className="mb-6 border-t" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                        :
                                        <div>
                                            <h1 className="text-xl mx-auto mt-48">Not Authenticated!</h1>
                                        </div>
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }

}
export default AddSemester;