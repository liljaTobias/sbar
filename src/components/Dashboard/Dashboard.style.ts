import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles(({ palette }: Theme) => createStyles({
    appbar: {
        backgroundColor: palette.categoryBg.main,
    },
    appbarBottom: {
        top: 'auto',
        bottom: 0,
    },
    appbarSub: {
        bottom: 0,
        position: "relative"
    }
}))

export { useStyles }