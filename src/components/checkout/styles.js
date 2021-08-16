import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    checkout: {
        display: 'flex',
        marginTop: '30px',
        minHeight: '60vh'
    },
    leftSide: {
        flex: '0.8',
        marginLeft: '30px',
        "& > h3": {
            marginBottom: '25px',
            marginTop: '10px'
        }
    },
    rightSide: {
        flex: '0.2',
        background: '#fff',
        margin: '0 25px 25px 0',
        padding: '20px',
        height: 'fit-content',
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
