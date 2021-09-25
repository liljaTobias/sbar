import { makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles(({ palette }: Theme) =>
    createStyles({
        appbar: {
            backgroundColor: palette.categoryBg.main,
        },
    }),
)

export { useStyles }
