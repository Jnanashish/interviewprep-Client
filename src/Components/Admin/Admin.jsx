import React,{useContext} from 'react'

import AddData from "./AddData"
import UpdateData from './UpdateData'

import {UserContext} from "../../Context/userContext"
import {Redirect} from "react-router-dom"

const Admin = () => {
    const context = useContext(UserContext);

    if (!context.user?.email) {
        return <Redirect to="/" />;
    }
    return (
        <div>
            <h2>Admin Panel</h2>
            <AddData/>
            <UpdateData/>
        </div>
    )
}

export default Admin;