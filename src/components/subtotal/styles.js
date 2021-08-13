import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    subtotal: {
        "& > button": {
            background: '#27B99A',
            color: '#fff',
            width: '100%',
            padding: '5px',
            border: 'none',
            marginTop: '20px',
            fontSize: '16px'
        }
    }
}));
export default useStyles;
