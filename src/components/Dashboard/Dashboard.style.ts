import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
    createStyles({
        container: {
            marginTop: spacing(5),
        },
        subCategoryList: {
            backgroundColor: palette.grey[50],
            '&:focus': {
                backgroundColor: palette.grey[50],
            },
        },
        actionList: {
            backgroundColor: palette.grey[100],
        },
    }),
)

export { useStyles }
