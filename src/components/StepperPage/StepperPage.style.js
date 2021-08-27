import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    h1: {
        fontSize: '2em'
    },
    layout: {
        minHeight: "98vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 15px 0 15px"
    },
    card: {

    },
    button: {
        height: '4em',
        marginBottom: 20
    }
})

export { useStyles }