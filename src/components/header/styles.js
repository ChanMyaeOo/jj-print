import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    headerSection: {
        background: '#fff'
    },
    barWrap: {
        background: '#000',
        width: '100%',
        "& > div": {
            color: '#fff',
            width: '100%',
            display: 'none'
        }
    },
    headerBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: '#fff',
        width: '90%',
        margin: '0 auto',
        "& > li": {
            listStyle: 'none',
            padding: '9px 15px'
        }
    },
    hdMailIcon: {
        fontSize: '18px'
    },
    sIcons: {
        fontSize: '18px',
        padding: '0 5px'
    },
    hdCheckout: {
        background: '#27aabb',
        margin: '5px',
        textTransform: 'uppercase',
        fontSize: '85%',
        fontWeight: 'bold'
    },
    basketIcon: {
        fontSize: '18px'
    },
    basketList: {
        display: 'flex',
        alignItems: 'center'
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
        alignItems: 'center',
        
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

    // for responsive header
    resHeaderWrap: {
        width: '100%',
        display: 'none',
    },
    resHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 15px',
        borderBottom: '1px solid #ddd'
    },
    resLogo: {
        width: '75px',
        height: '66px'
    },
    smBasketWrap: {
        display: 'flex',
        alignItems: 'center',
    },

    // for overlay
    overlayClose: {
        color: '#f2f2f2',
        fontSize: '35px',
        position: 'fixed',
        top: '10px',
        right: '10px'
    },
    overlay: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        display: 'none'
    },
    sideBar: {
        width: '35%',
        background: '#f2f2f2',
        height: '100%',
        overflowY: 'scroll'
    },
    sideBarLogo: {
        width: '95px',
        height: '75px',
        display: 'block',
        margin: '0 auto',
        padding: '25px 0'
    },
    sidebarNav: {
        "& > li": {
            padding: '15px',
            listStyle: 'none',
            borderBottom: '1px solid #ddd',
            textTransform: 'uppercase',
        }
    },
    productsWrap: {
        lineHeight: '1.5rem',
        display: 'none',
        "& > h5": {
            color: '#008b8b',
            fontSize: '16px',
            marginTop: '10px',
        },
        "& > div": {
            textTransform: 'none',
            color: '#666'
        }
    },
    sideBarProducts: {
        
        "&:hover": {
            background: '#ddd',
             "& $productsWrap": {
            display: 'block'
        }
        }
    },
    sideBarFlyers: {
        lineHeight: '1.5rem',
        "&:hover": {
            background: '#ddd',
            "& $sideBarSubFlyers": {
                display: 'block'
            }
        }
    },
    sideBarSubFlyers: {
        marginTop: '10px',
        display: 'none',
        "& > div": {
            textTransform: 'none',
            color: '#666'
        }
    },
    sidebarSocial: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '60%',
        padding: '10px 0',
        margin: '0 auto'
    },
    sidebarContact: {
        marginTop: '20px',
        paddingLeft: '15px'
    },

    sidebarPhone: {
        color: '#008b8b',
        fontWeight: '600',
        fontSize: '18px',
        marginTop: '10px'
    },

    // for responsive
    [theme.breakpoints.down('md')]: {
        productsNavWrap: {
            width: '930px'
        }
    },

    [theme.breakpoints.down('sm')]: {
        barWrap: {
            "& > div": {
                display: 'block',
                padding: '5px 0',
                textAlign: 'center',
                fontWeight: 'bold'
            }
        },
        headerBar: {
            display: 'none'
        },
        headerWrap: {
            display: 'none'
        },
        navWrap: {
            display: 'none'
        },
        resHeaderWrap: {
            display: 'block'
        }
    },

    [theme.breakpoints.down('xs')]: {
        sideBar: {
            width: '60%'
        }
    }
    
}));
export default useStyles;
