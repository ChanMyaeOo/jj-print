import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    mugsWrap: {
        display: 'flex',
        width: '95%',
        margin: '25px auto',
        padding: '30px 0',
        background: '#fff'
    },

     leftContainer: {
        width: '50%'
    },

    mugImg: {
        display: 'block',
        margin: '0 auto',
        width: '100%'
    },

    rightContainer: {
        padding: '0 25px',
        width: '50%'
    },

    mugTitle: {
        fontSize: '27px',
        padding: '25px 0',
        textAlign: 'center',
        textTransform: 'uppercase',
    },

    mugsList: {
        marginBottom: '15px',
        marginLeft: '10px',
        "& > li": {
            marginLeft: '20px',
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
        fontSize: '18px',
        textTransform: 'uppercase',
    },

    colorSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        margin: '0 auto'
    },
    selectWrap: {
        width: '80%',
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

    mugColor: {
        background: '#00aeef',
        border: '2px solid #f2f2f2',
        padding: '25px',
        textAlign: 'center',
        color: '#fff'
    },

    mugPrice: {
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
        mugColor: {
            padding: '20px 10px'
        },
        mugPrice: {
            padding: '20px 10px'
        }
    },

     [theme.breakpoints.down('sm')]: {
        mugsWrap: {
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
        mugImg: {
            width: '90%'
        },
        mugsList: {
            width: '90%'
        },
        priceSection: {
            width: '80%'
        },
        colorSection: {
            width: '80%'
        },
        selectWrap: {
            width: '60%',
        },
        mugColor: {
            padding: '20px 5px'
        }
    }

}));
export default useStyles;
