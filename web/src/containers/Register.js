import React, { Fragment, useState } from 'react';
import { Typography } from '@material-ui/core';
import {useSelector,useDispatch} from "react-redux";

import UserForm from '../components/UserForm';

import { selectUserError, selectUserStatus, createUser } from '../store/users'

export default function Register() {

    const dispatch = useDispatch();

    const saveStatus = useSelector(selectUserStatus)
    const saveError = useSelector(selectUserError)

    const [user] = useState({
        name: '',
        email: '',
        password: ''
    })
 
    const onSave = (user) => {
        dispatch(createUser(user))
    }

    return (
        <Fragment>
            <Typography variant="h1" >
                Register
            </Typography>
            <UserForm
                user={user}
                onSave={onSave}
                saveStatus={saveStatus}
                saveError={saveError}
            />
        </Fragment>

    );

}
