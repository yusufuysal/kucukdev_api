import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case "LOGIN_USER":
            return {
                userToken: action.payload.access_token,
                isLogin: true

            }
        case "CURRENT_USER_ID":
            localStorage.setItem("USER_LOGIN", JSON.stringify({ userToken: state.userToken, userID: action.payload.id, userEmail: action.payload.email, currentSemester: action.payload.currentSemester, isLogin: true }))
            return {
                userID: action.payload.id,
                userEmail: action.payload.email
            }
        case "LOGOUT_USER":
            localStorage.clear()
            return {
                userToken: "",
                userID: "",
                userEmail: "",
                isLogin: false,
            }
        default:
            return state

    }
}

export class UserProvider extends Component {
    state = {
        // userToken: localStorage.getItem("USER_TOKEN") || "",
        // userID: JSON.parse(localStorage.getItem("USER_LOGIN")) || false,
        // userEmail: "",
        // isLogin: localStorage.getItem("USER_TOKEN") ? true : false,
        ...(localStorage.getItem("USER_LOGIN") ? JSON.parse(localStorage.getItem("USER_LOGIN")) : { userToken: "", userID: "", userEmail: "", isLogin: false }),

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;