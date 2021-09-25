import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }: Theme) =>
    createStyles({
        container: {
            marginTop: spacing(5),
        },
    }),
)

export { useStyles }
