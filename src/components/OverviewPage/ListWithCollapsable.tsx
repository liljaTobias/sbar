import { Collapse, List, makeStyles, createStyles, Theme } from '@material-ui/core'
import React, { useState } from 'react'
import Item from './Item'

interface ListWithCollapsableProps {
    title: string
    button?: boolean
    level: number
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    level_1: {
        background: theme.palette.primary.main
    },
    level_2: {
        background: theme.palette.primary.light
    },
    level_3: {
        background: theme.palette.background.default
    }
}))

const ListWithCollapsable: React.FC<ListWithCollapsableProps> = ({ title, button = false, level, children }) => {
    const [isCollapsedOpen, setIsCollapsedOpen] = useState(false)
    const styles = useStyles()

    const currentStyle = level === 1 ? styles.level_1 : styles.level_2

    if (!button) {
        return <Item title={title} style={styles.level_3} />
    }

    return (
        <div>
            <Item title={title} button={button} collapsed={isCollapsedOpen} handleCollapse={setIsCollapsedOpen} style={currentStyle} />
            <Collapse in={isCollapsedOpen} timeout='auto' unmountOnExit>
                <List disablePadding>
                    {children}
                </List>
            </Collapse>
        </div>
    )
}

export default ListWithCollapsable