import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    about: {
        width: '95%',
        margin: '0 auto',
        padding: '30px 0',
        "& > h1": {
            marginBottom: '20px'
        },
        "& > p": {
            lineHeight: '1.5rem'
        }
    }
}));
export default useStyles;
