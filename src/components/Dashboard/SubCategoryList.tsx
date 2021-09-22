import { makeStyles, createStyles, Theme, List, ListItem, ListItemText, Collapse } from "@material-ui/core"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import React, { useState } from "react"
import { SubCategory } from "../List/types"

interface SubCategoryListProps {
    subcategories: Array<SubCategory> | undefined
}

const useStyles = makeStyles(({ palette }: Theme) => createStyles({
    categoryList: {
        backgroundColor: palette.categoryBg.main,
    },
    subCategoryList: {
        backgroundColor: palette.subCategoryBg.main,
        "&:focus": {
            backgroundColor: palette.subCategoryBg.main,
        }
    },
    actionList: {
        backgroundColor: palette.grey[100]
    }
}))

const handleOpen = (idx: number, arr: Array<boolean>): Array<boolean> => {
    const newArr = [...arr.slice(0, idx), !arr[idx], ...arr.slice(idx + 1)]
    return newArr
}

const SubCategoryList: React.FC<SubCategoryListProps> = ({ subcategories = [] }) => {
    const [isOpen, setIsOpen] = useState(new Array(subcategories.length).fill(false))
    const classes = useStyles()

    return (
        <List disablePadding>
            {subcategories.map((subcategory, idx) => (
                <div key={subcategory.subcategory_id}>
                    <ListItem
                        button
                        onClick={() => setIsOpen(handleOpen(idx, isOpen))}
                        className={classes.subCategoryList}
                    >
                        <ListItemText primary={subcategory.subcategory_name} />
                        {isOpen[idx] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={isOpen[idx]} unmountOnExit>
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

export default SubCategoryList