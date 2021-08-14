import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    checkoutProduct: {
        display: 'flex',
        marginBottom: '30px'
    },
    cpImage: {
        width: '350px'
    },
    cpContent: {
        marginLeft: '25px',
        "& > h3": {
            fontSize: '24px',
            marginBottom: '10px'
        },
        "& > p": {
            lineHeight: '1.5rem'
        },
        "& > button": {
            padding: '5px 10px',
            marginTop: '15px',
            background: '#27B99A',
            color: '#fff',
            border: 'none',
            outline: 'none',
            fontSize: '15px'
        }
    }
}));
export default useStyles;
