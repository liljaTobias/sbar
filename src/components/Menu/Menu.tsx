import React, { useState } from 'react'
import { AppBar, Drawer, Grid, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { useStyles } from './Menu.style'

import MenuIcon from '@material-ui/icons/Menu'
import HalmstadLogo from '../../images/halmstad-logo.svg'

import { useOrganization } from '../../api/orgaizationAPI'
import { useHistory } from 'react-router-dom'

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({ children }) => {
    const { status, data, isFetching } = useOrganization('halmstad')
    const classes = useStyles()
    const history = useHistory()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

    const handleLinkClick = (path: string) => {
        history.push(path)
        setIsDrawerOpen(false)
    }

    return (
        <>
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <List>
                    <ListItem button onClick={() => handleLinkClick('/')}>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => handleLinkClick(`/sbar/${data.categories[0].category_id}`)}>
                        <ListItemText primary="SBAR" />
                    </ListItem>
                </List>
            </Drawer>
            <AppBar className={classes.appbar} position="sticky">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon onClick={toggleDrawer} />
                    </IconButton>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">{data?.organization_name}</Typography>
                        <img src={HalmstadLogo} style={{ height: 40 }} />
                    </Grid>
                </Toolbar>
                {children}
            </AppBar>
        </>
    )
}

export default Menu