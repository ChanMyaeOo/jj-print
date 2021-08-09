import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    itemWrap: {
        width: '330px',
        padding: '15px',
        margin: '0 auto',
        marginBottom: '20px',
        background: '#fff',
        "& > h5": {
            fontSize: '20px',
            padding: '20px 0'
        },
        "& > p": {
            lineHeight: '1.5rem'
        }
    },
    itemTitle: {
        textDecoration: 'none',
        color: '#334862'
    },
    itemImg: {
        width: '100%'
    },
    itemBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 0'
    },
    itemPrice: {
        color: '#e64c3c',
        fontSize: '32px',
        fontWeight: 'bold',
        marginTop: '-6px'
    },
    orderBtn: {
        background: '#008b8b',
        color: '#f2f2f2',
        padding: '10px',
        textTransform: 'uppercase',
    },
    [theme.breakpoints.down('md')]: {
        itemWrap: {
            width: '260px'
        }
    },
    [theme.breakpoints.down('sm')]: {
        itemWrap: {
            width: '300px',
            marginBottom: '25px'
        }
    }
}));
export default useStyles;
