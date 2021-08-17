import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    contact: {
        width: '80%',
        margin: '0 auto',
        padding: '30px 0',
        "& > h2": {
            textTransform: 'uppercase',
            letterSpacing: '2px',
            wordSpacing: '5px',
            fontSize: '25px',
            textAlign: 'center',
            marginBottom: '10px'
        },
        "& > p": {
            textAlign: 'center',
            lineHeight: '1.5rem'
        }
    },
    contactForm: {
        marginTop: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "& > input": {
            width: '60%',
            height: '40px',
            padding: '0 10px',
            marginBottom: '20px'
        }
    },
    formTextarea: {
        width: '60%',
        padding: '10px',
        marginBottom: '25px',
        minHeight: '60px',
        fontFamily: 'Lato',
        maxWidth: '60%'
    },
    formBtn: {
        width: '20%',
        padding: '15px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        background: '#27aabb',
        border: 'none',
        marginBottom: '30px',
        cursor: 'pointer'
    },

    [theme.breakpoints.down('xs')]: {
        contact: {
            width: '90%',
            "& > h2": {
                fontSize: '22px'
            }
        },
        contactForm: {
            "& > input": {
                width: '90%'   
            }
        },
        formTextarea: {
            maxWidth: '90%'
        },
        formBtn: {
            width: '50%'
        }
    }
}));
export default useStyles;
