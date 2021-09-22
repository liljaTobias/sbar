import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useOrganization } from '../../api/orgaizationAPI'
import CategoryTabs from './CategoryTabs'
import { useStyles } from './Dashboard.style'
import SubCategoryList from './SubCategoryList'

import MenuIcon from '@material-ui/icons/Menu'

import HalmstadLogo from '../../images/halmstad-logo.svg'

const Dashboard: React.FC = () => {
    const { status, data, isFetching } = useOrganization('halmstad')
    const classes = useStyles()

    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <AppBar className={classes.appbar} position="sticky">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">{data?.organization_name}</Typography>
                        <img src={HalmstadLogo} style={{ height: 40 }} />
                    </Grid>
                </Toolbar>
                <CategoryTabs categories={data?.categories} tab={activeTab} setTab={setActiveTab} />
            </AppBar>
            {status === 'success' && <SubCategoryList subcategories={data.categories[activeTab].subcategories} />}
        </>
    )
}

export default Dashboard