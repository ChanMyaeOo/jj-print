import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    leatherCoverImg: {
        width: '100%'
    },
    previewTitle: {
        fontSize: '18px',
        padding: '10px 0'
    },
    previewPrice: {
        color: '#E64C3C',
        fontWeight: 'bold'
    },
    previewOrder: {
        background: '#27B99A',
        textDecoration: 'none',
        color: '#fff',
        padding: '10px',
        display: 'block',
        width: 'fit-content',
        margin: '10px 0'
    },

    [theme.breakpoints.down('xs')]: {
        previewItemWrap: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        leatherCoverImg: {
            width: '60%',
            // display: 'block',
            // margin: '0 auto'
        }
    }
}));
export default useStyles;
