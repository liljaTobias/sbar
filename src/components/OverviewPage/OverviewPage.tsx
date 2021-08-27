import React from 'react'
import { createStyles, List, makeStyles, Theme, Typography } from '@material-ui/core'
import ListWithCollapsable from './ListWithCollapsable'

import Database from '../../utils/database'

const useStyles = makeStyles((theme: Theme) => createStyles({
    list: {
        background: theme.palette.background.paper
    },
    h1: {
        fontSize: '2em'
    }
}))

interface OverviewPageProps {
}

const OverviewPage: React.FC<OverviewPageProps> = (props) => {
    const styles = useStyles()

    return (
        <div>
            <Typography variant="h1" className={styles.h1}>Rapporteringsstöd</Typography>
            <List className={styles.list}>
                {Database.map(entry => (
                    <ListWithCollapsable title={entry.name} button={entry.button} level={1}>
                        {entry.substeps.map(substep => {
                            return <ListWithCollapsable title={substep.name} button={substep.button} level={2}>
                                {substep.steps.map(step => {
                                    return <ListWithCollapsable title={step} level={3} />
                                })}
                            </ListWithCollapsable>
                        })}
                    </ListWithCollapsable>
                ))}
            </List>
        </div>
    )
}

export default OverviewPage