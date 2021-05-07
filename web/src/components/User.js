import React, {Fragment} from 'react';
import { 
    Button,
    Typography
} from '@material-ui/core';

export default function User() {
    return (
        <Fragment>
            <Typography variant="h6" >
                ID : 
            </Typography>
            <Typography variant="h6" >
                Name : 
            </Typography>
            <Typography variant="h6" >
                Email : 
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
            >
                Edit
            </Button>
        </Fragment>
    );

}
