import React, { useState } from "react"
import { Collapse, List, ListItem, ListItemText, Theme, createStyles } from "@material-ui/core"

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { makeStyles } from "@material-ui/styles"

import { Category, SubCategory } from "./types"

const useStyles = makeStyles(({ palette }: Theme) => createStyles({
    categoryList: {
        backgroundColor: palette.categoryBg.main,
    },
    subCategoryList: {
        backgroundColor: palette.subCategoryBg.main,
    },
    actionList: {
        backgroundColor: palette.grey[100]
    }
}))

interface CategoryListProps {
    categories: Array<Category> | undefined
}

interface SubCategoryListProps {
    subcategories: Array<SubCategory> | undefined
}

const SubCategoryList: React.FC<SubCategoryListProps> = ({ subcategories = [] }) => {
    const [isOpen, setIsOpen] = useState(false)
    const classes = useStyles()

    return (
        <List disablePadding>
            {subcategories.map(subcategory => (
                <div key={subcategory.subcategory_id}>
                    <ListItem button onClick={() => setIsOpen(!isOpen)} className={classes.subCategoryList}>
                        <ListItemText primary={subcategory.subcategory_name} />
                        {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={isOpen} unmountOnExit>
                        <List disablePadding>
                            {Object.entries(subcategory.actions).map(([key, value]) => (
                                <ListItem key={key} className={classes.actionList}>
                                    <ListItemText primary={value} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </div>
            ))}
        </List>
    )
}

const CategoryList: React.FC<CategoryListProps> = ({ categories = [] }) => {
    const [isOpen, setIsOpen] = useState(Array(categories.length).fill(false))
    const classes = useStyles()

    const handleOpen = (idx: number) => {
        const arr = [...isOpen.slice(0, idx), !isOpen[idx], ...isOpen.slice(idx + 1)]
        setIsOpen(arr)
    }

    return (
        <List>
            {categories.map((category, idx) => (
                <div key={category.category_id}>
                    <ListItem button onClick={() => handleOpen(idx)} className={classes.categoryList}>
                        <ListItemText primary={category.category_name} />
                        {isOpen[idx] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={isOpen[idx]} unmountOnExit>
                        <SubCategoryList subcategories={category.subcategories} />
                    </Collapse>
                </div>
            ))}
        </List >
    )
}

export default CategoryList