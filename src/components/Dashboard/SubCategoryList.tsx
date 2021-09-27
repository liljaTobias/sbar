import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import React from 'react'
import { SubCategory } from '../../api/orgaizationAPI'
import { useStyles } from './Dashboard.style'

interface SubCategoryListProps {
    categoryId: string
    subcategories: Array<SubCategory> | undefined
    openSubs: Array<boolean>
    handleOpen: (idx: number, categoryId: string) => void
}

const SubCategoryList: React.FC<SubCategoryListProps> = ({
    categoryId,
    subcategories = [],
    openSubs = [],
    handleOpen,
}) => {
    const classes = useStyles()

    return (
        <List disablePadding>
            {subcategories.map((subcategory, idx) => (
                <div key={subcategory.subcategory_id}>
                    <ListItem button onClick={() => handleOpen(idx, categoryId)} className={classes.subCategoryList}>
                        <ListItemText primary={subcategory.subcategory_name} />
                        {openSubs[idx] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSubs[idx]} unmountOnExit>
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
