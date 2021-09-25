import React, { useState } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { useOrganization } from '../../api/orgaizationAPI'
import { useStyles } from './ListPage.style'

import { useHistory } from 'react-router-dom'

interface CategoryTabsProps {}

const CategoryTabs: React.FC<CategoryTabsProps> = () => {
    const { status, data } = useOrganization('halmstad')
    const classes = useStyles()
    const history = useHistory()

    const [activeTab, setActiveTab] = useState(0)

    const handleClick = (event, newValue) => {
        setActiveTab(newValue)
        history.push(`/sbar/${data.categories[newValue].category_id}`)
    }

    if (status === 'loading') {
        return <h3>Loading...</h3>
    }

    return (
        <Tabs value={activeTab} variant="scrollable" scrollButtons="auto" onChange={handleClick}>
            {data?.categories.map((c) => (
                <Tab label={c.category_name} key={c.category_id} />
            ))}
        </Tabs>
    )
}

export default CategoryTabs
