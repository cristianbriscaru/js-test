import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

import LoginForm from '../components/LoginForm';

export default function Login() {

    return (
        <Fragment>
            <Typography variant="h1" >
                Login
            </Typography>
            <LoginForm

            />
        </Fragment>

    );

}
