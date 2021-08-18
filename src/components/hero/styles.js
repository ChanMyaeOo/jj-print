import { makeStyles } from "@material-ui/core/styles";
// import HeroImg from '../../images/flyer.jpg'
import HeroImg from '../../images/2logo.jpg'

const useStyles = makeStyles((theme) => ({
    heroWrap: {
        background: '#f2f2f2',
        paddingTop: '15px'
    },
    heroContent: {
        // background: `linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.5) 100%),url(${HeroImg})`,
        background: `url(${HeroImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '85%',
        height: '400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        "& > h2": {
            fontSize: '48px',
            color: '#f2f2f2',
            paddingBottom: '20px',
            textAlign: 'center'
        },
        "& > h3": {
            fontSize: '23px',
            letterSpacing: '1px',
            fontWeight: 'normal',
            color: '#f2f2f2',
            textAlign: 'center'
        }
    },
    [theme.breakpoints.down('md')]: {
        heroContent: {
            backgroundSize: 'contain',
            "& > h2": {
                fontSize: '40px'
            },
            "& > h3": {
                fontSize: '20px'
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
        heroContent: {
            width: '95%'
        }
    },
    [theme.breakpoints.down('xs')]: {
         heroContent: {
             height: '200px',
            "& > h2": {
                fontSize: '27px'
            },
            "& > h3": {
                fontSize: '17px'
            }
        }
    },

}));
export default useStyles;
