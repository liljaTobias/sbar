import { makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles(({ palette }: Theme) =>
    createStyles({
        appbar: {
            backgroundColor: palette.categoryBg.main,
        },
        menuHeader: {
            backgroundColor: palette.background.default,
            minHeight: 50,
        },
    }),
)

export { useStyles }
