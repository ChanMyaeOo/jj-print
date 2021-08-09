import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    bCardWrap: {
        display: 'flex',
        width: '95%',
        margin: '25px auto',
        padding: '30px 0',
        background: '#fff'
    },
    leftContainer: {
        width: '50%'
    },

    bCardImg: {
        display: 'block',
        margin: '0 auto',
    },

    rightContainer: {
        padding: '0 25px',
        width: '50%'
    },

    bCardTitle: {
        fontSize: '27px',
        padding: '25px 0',
        textAlign: 'center',
        textTransform: 'uppercase',
    },

    bCardContent: {
        marginBottom: '15px',
        marginLeft: '10px',
        "& > p": {
            lineHeight: '1.5rem'
        }
    },

    priceSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '25px auto',
        width: '95%',
        "& > p": {
            textTransform: 'uppercase',
            fontSize: '18px'
        },

        "& > div": {
            fontSize: '35px',
            color: '#E64C3C',
            fontWeight: 'bold'
        }
    },

    formColor: {
        fontSize: '16px',
    },

    colorSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        margin: '0 auto',
        marginTop: '25px'
    },
    selectWrap: {
        width: '60%',
        height: '40px',
        background: '#f2f2f2',
        border: '1px solid #ddd',
        outline: '#ddd',
        padding: '5px'
    },

    quantityWrap: {
        margin: '25px auto',
        width: '95%'
    },

     quantity: {
        background: '#00aeef',
        border: '2px solid #f2f2f2',
        padding: '25px',
        textAlign: 'center',
        color: '#fff',
    },

    qtyPrice: {
        textAlign: 'center',
        padding: '25px',
        border: '2px solid #f2f2f2',
    },

     cardBtn: {
        width: '95%',
        display: 'block',
        margin: '0 auto',
        padding: '10px',
        textTransform: 'uppercase',
        background: '#27B99A',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none'
    },

    [theme.breakpoints.down('md')]: {
        quantity: {
            padding: '20px 10px'
        },
        qtyPrice: {
            padding: '20px 10px'
        }
    },

    [theme.breakpoints.down('sm')]: {
        bCardWrap: {
            flexDirection: 'column'
        },
        leftContainer: {
            width: '100%'
        },
        rightContainer: {
            width: '100%',
            padding: 0
        }
    },

    [theme.breakpoints.down('xs')]: {
        bCardImg: {
            width: '90%'
        },
        bCardContent: {
            width: '80%'
        },
        priceSection: {
            width: '80%'
        },
        colorSection: {
            width: '80%'
        },
        selectWrap: {
            width: '40%',
        },
        quantity: {
            padding: '20px 5px'
        }
    }
}));
export default useStyles;