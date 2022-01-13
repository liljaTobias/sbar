import React, { useState } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { useOrganization } from '../../api/orgaizationAPI'
import { useStyles } from './ListPage.style'

import { useHistory } from 'react-router-dom'

interface CategoryTabsProps {
    initialTab: string
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ initialTab }) => {
    const { status, data } = useOrganization('kommunkoping')
    const classes = useStyles()
    const history = useHistory()

    const [activeTab, setActiveTab] = useState(initialTab)

    const handleClick = (event, newValue) => {
        setActiveTab(newValue)
        history.push(`/sbar/${newValue}`)
    }

    if (status === 'loading') {
        return <h3>Loading...</h3>
    }

    return (
        <Tabs value={activeTab} variant="scrollable" scrollButtons="auto" onChange={handleClick}>
            {data?.categories.map((c) => (
                <Tab label={c.category_name} key={c.category_id} value={c.category_id} />
            ))}
        </Tabs>
    )
}

export default CategoryTabs
