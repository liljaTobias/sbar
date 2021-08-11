import { ListItem, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'

interface ItemProps {
    title: string
    button?: boolean
    collapsed?: boolean
    handleCollapse?: React.Dispatch<React.SetStateAction<any>>
    style?: any
}

const Item: React.FC<ItemProps> = ({ title, button = false, collapsed, handleCollapse, style }) => {

    if (!button) {
        return (
            <ListItem className={style}>
                <ListItemText primary={title} />
            </ListItem>
        )
    }
    return (
        <div>
            <ListItem button={button as any} onClick={() => handleCollapse && handleCollapse(!collapsed)} className={style}>
                <ListItemText primary={title} />
                {collapsed ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
        </div>
    )
}

export default Item