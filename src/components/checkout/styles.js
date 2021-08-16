import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    checkout: {
        display: 'flex',
        marginTop: '30px',
        minHeight: '60vh'
    },
    leftSide: {
        flex: '0.8',
        marginLeft: '30px',
        "& > h3": {
            marginBottom: '25px',
            marginTop: '10px'
        }
    },
    rightSide: {
        flex: '0.2',
        background: '#fff',
        margin: '0 25px 25px 0',
        padding: '20px',
        height: 'fit-content',
        "& > button": {
            background: '#27B99A',
            color: '#fff',
            width: '100%',
            padding: '5px',
            border: 'none',
            marginTop: '20px',
            fontSize: '16px'
        }
    },
    [theme.breakpoints.down('sm')]: {
        checkout: {
            flexDirection: 'column'
        },
        rightSide: {
            width: '50%',
            margin: '0 auto',
            marginBottom: '30px'
        }
    },

    [theme.breakpoints.down('xs')]: {
        leftSide: {
            marginLeft: 0,
            paddingLeft: '15px'
        },
        rightSide: {
            width: '80%'
        }
    }
}));
export default useStyles;
