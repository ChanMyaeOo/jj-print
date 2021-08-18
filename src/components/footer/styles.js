import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    footerSection: {
        background: '#fff'
    },
    footerWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '95%',
        margin: '0 auto',
        padding: '25px 15px'
    },
    footerLogo: {
        width: '300px',
        // height: '100px'
    },
    footerContact: {
        padding: '0 25px'
    },
    fContact: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '97%',
        "& > p": {
            lineHeight: '1.5rem'
        }
    },
    fTitle: {
        margin: '15px 0 5px 0',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    fText: {
        fontWeight: 'bold',
        margin: '10px 0 5px 0'
    },
    copyright: {
        background: 'rgb(56, 56, 56)',
        padding: '10px 0',
        textAlign: 'center',
        color: '#f2f2f2',
        width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
         footerWrap: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px 0'
        }, 
        footerContact: {
            padding: '25px 0'
        }
    },
    [theme.breakpoints.down('xs')]: {
        footerWrap: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px 0'
        }, 
        footerPayment: {
            "& > img": {
                width: '270px'
            }
        },
        footerContact: {
            padding: '25px 0'
        }
    }
}));
export default useStyles;
