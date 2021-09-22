import { Tab, Tabs } from "@material-ui/core"
import React, { useState } from "react"
import { Category } from "../List/types"

interface CategoryTabsProps {
    categories: Category[]
    tab: number
    setTab: React.Dispatch<React.SetStateAction<number>>
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories = [], tab, setTab }) => {
    const handleClick = (event, newValue) => {
        setTab(newValue)
    }

    return (
        <Tabs value={tab} variant="scrollable" scrollButtons="auto" onChange={handleClick}>
            {categories.map(c => <Tab label={c.category_name} key={c.category_id} />)}
        </Tabs>
    )
}

export default CategoryTabs