import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    barWrap: {
        background: '#000',
        width: '100%'
    },
    headerBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: '#fff',
        width: '90%',
        margin: '0 auto',
        "& > li": {
            listStyle: 'none',
            padding: '9px 15px'
        }
    },
    logo: {
        width: '90px',
        height: '76px'
    },
    headerWrap: {
        width: '90%',
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerPhone: {
        color: '#27aabb',
        fontWeight: '700',
        fontSize: '35px'
    },
    navWrap: {
        background: '#7f3119'
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        margin: '0 auto',
        "& > li": {
            listStyle: 'none',
            color: '#fff',
            textTransform: 'uppercase',
            padding: '10px 0'
        }
        
    },
    flyer: {
        position: 'relative',
        "&:hover": {
            "& $flyerSubNav": {
                display: 'block'
            }
        }
    },
    flyerSubNav: {
        position: 'absolute',
        width: '170px',
        background: '#f2f2f2',
        marginTop: '10px',
        display: 'none',
        "& > div": {
            color: '#000',
            padding: '10px',
            paddingLeft: '25px',
            textTransform: 'none',
        }
    },
    products: {
        position: 'relative',
        "&:hover": {
            "& $productsNavWrap": {
                display: 'block'
            }
        }
    },
    productsNavWrap: {
        position: 'absolute',
        background: '#f2f2f2',
        width: '1000px',
        marginTop: '10px',
        display: 'none'
    },
    productsSubNav: {
        display: 'flex',
        "& > li": {
            listStyle: 'none',
            marginLeft: '20px',
            "& > div": {
                color: '#000',
                padding: '10px 0',
                textTransform: 'none'
            }
        }
    },
    subHeader: {
        width: '100%',
        color: '#008b8b',
        padding: '10px 0'
    },

    [theme.breakpoints.down('md')]: {
        productsNavWrap: {
            width: '930px'
        }
    }
    
}));
export default useStyles;
