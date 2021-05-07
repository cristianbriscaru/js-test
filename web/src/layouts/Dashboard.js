import React from 'react';
import { NavLink } from "react-router-dom";
import { 
    Drawer,
    AppBar,
    Paper,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemText,
    Grid,
} from '@material-ui/core';

import { useDashboardStyles } from '../assets/styles/dashboard.styles';

export default function Dashboard({ children }) {
    const classes = useDashboardStyles();

    return (
        <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Grid container >
                    <Grid container item justify='flex-start' xs={6}>
                        <Typography variant="h6" noWrap>
                            JavaScript Practical Test
                        </Typography>
                    </Grid>
                    <Grid container item justify='flex-end' xs={6}>
                        <Typography variant="h6" noWrap>
                       
                        </Typography>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.drawerHeader}>
                <Typography>
                    Menu
                </Typography>                        
            </div>
           
                <Divider />
                    <List>
                        <ListItem button component={NavLink} to='/' exact activeClassName={classes.activeLink} >
                            <ListItemText primary={'Home'} />
                        </ListItem>
                        <ListItem button component={NavLink} to='/register' exact activeClassName={classes.activeLink}>
                            <ListItemText primary={'Register'} />
                        </ListItem>
                        <ListItem button component={NavLink} to='/login' exact activeClassName={classes.activeLink}>
                            <ListItemText primary={'Login'} />
                        </ListItem>
                        <ListItem button component={NavLink} to='/users' exact activeClassName={classes.activeLink}>
                            <ListItemText primary={'Users'} />
                        </ListItem>
                    </List>
                <Divider />
                    <List>
                        <ListItem button >
                            <ListItemText primary={'Logout'} />
                        </ListItem>
                    </List>
                </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Paper variant='outlined' className={classes.paperWrapper}>
                    {children}
                </Paper>
            </main>
        </div>
    );
}
