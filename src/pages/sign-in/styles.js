import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    signIn: {
        width: '70%',
        margin: '30px auto',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signInLogo: {
        width: '120px',
        padding: '25px 0'
    },
    signInFormWrap: {
        "& > h1": {
            margin: '20px 0',
            fontSize: '25px'
        },
        "& > form > input": {
            height: '30px',
            padding: '0 5px',
            width: '100%'
        },
        "& > form > h5": {
            margin: '10px 0'
        }
    },
    signBtn: {
        margin: '20px 0',
        padding: '10px',
        cursor: 'pointer',
        background: '#27B99A',
        color: '#fff',
        fontSize: '15px',
        border: 'none'
    },

    [theme.breakpoints.down('xs')]: {
        signIn: {
            width: '90%',
            padding: '10px',
            margin: '25px auto',
        },
        signInFormWrap: {
            "& > form > input": {
                height: '30px',
                padding: '0 5px',
                width: '90%'
            },
        }
    }
}));
export default useStyles;
