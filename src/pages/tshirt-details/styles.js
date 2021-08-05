import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    tShirtWrap: {
        display: 'flex',
        width: '95%',
        margin: '0 auto'
    },

    rightContainer: {
        padding: '0 25px'
    },

    tshirtTitle: {
        fontSize: '27px',
        padding: '25px 0'
    },

    tshirtList: {
        marginBottom: '15px',
        "& > li": {
            marginLeft: '20px',
            lineHeight: '1.5rem'
        }
    },

    priceSection: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '25px 0',
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
        margin: '25px 0'
    },

    quantity: {
        background: '#00aeef',
        border: '2px solid #f2f2f2',
        padding: '15px',
        textAlign: 'center',
        color: '#fff'
    },

    qtyPrice: {
        textAlign: 'center',
        padding: '15px',
        border: '2px solid #f2f2f2',
    },

    cardBtn: {
        width: '100%',
        padding: '10px',
        textTransform: 'uppercase',
        background: '#27B99A',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none'
    }
}));
export default useStyles;
