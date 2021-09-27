import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
    createStyles({
        container: {
            marginTop: spacing(5),
        },
        subCategoryList: {
            backgroundColor: palette.subCategoryBg.main,
            '&:focus': {
                backgroundColor: palette.subCategoryBg.main,
            },
        },
        actionList: {
            backgroundColor: palette.grey[100],
        },
    }),
)

export { useStyles }
