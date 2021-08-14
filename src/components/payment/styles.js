import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    payment: {
        marginBottom: '30px',
        "& > h3": {
            textAlign: 'center',
            margin: '25px 0',
            fontSize: '28px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '25px'
        }
    },
    checkoutLink: {
        textDecoration: 'none',
    },
    reviewItems: {
        width: '85%',
        margin: '0 auto',
        background: '#fff',
        padding: '30px',
        "& > h3": {
            textAlign: 'center',
            fontSize: '26px',
            marginBottom: '25px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '25px'
        }
    },
    billingDetails: {
        width: '85%',
        margin: '0 auto',
        marginTop: '30px',
        background: '#fff',
        padding: '30px',
        "& > h3": {
            textAlign: 'center',
            fontSize: '26px',
            marginBottom: '25px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '25px'
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        margin: '0 auto',
        "& > textarea": {
            maxWidth: '100%'
        }
    },
    formInput: {
        margin: '10px 0',
        padding: '12px 5px',
        fontFamily: 'Lato',
        fontSize: '15px'
    },
    paymentMethod: {
        width: '85%',
        margin: '0 auto',
        padding: '30px',
        background: '#fff',
        marginTop: '30px',
        "& > h3": {
            textAlign: 'center',
            fontSize: '26px',
            marginBottom: '25px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '25px'
        }
    },

    cardElement: {
        border: '1px solid #ddd',
        padding: '10px'
    },

    paymentContainer: {
        marginTop: '25px',
        "& > button": {
            marginTop: '15px',
            padding: '8px 15px',
            fontSize: '16px',
            background: '#27B99A',
            color: '#fff',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            "&:hover": {
                opacity: '0.8',
            }
        }
    }
}));
export default useStyles;
