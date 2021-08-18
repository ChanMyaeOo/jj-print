import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    headerSection: {
        background: '#fff',
        width: '100%',
        maxWidth: '1280px'
    },
    fixedHeader: {
        zIndex: '1400',
        position: 'fixed',
        top: 0,
        width: '100%',
        background: "#fff",
        boxShadow: '2px 2px 2px rgba(0,0,0,0.5)'
    },
    barWrap: {
        // background: '#000',
        background: "rgb(31,164,221)",
        background: "linear-gradient(90deg, rgba(31,164,221,1) 2%, rgba(84,76,214,1) 55%)",
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

    firstColor: {
        background: "rgb(254,207,93)",
        background: "linear-gradient(90deg, rgba(254,207,93,0.969625350140056) 45%, rgba(245,191,62,0.896796218487395) 63%)"
    },

    hdLinks: {
        color: '#fff',
        textDecoration: 'none',
    },
    headerGuest: {
        fontSize: '12px'
    },
    signInLink: {
        color: '#fff',
        textDecoration: 'none',
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
        fontWeight: 'bold',
        "& > a": {
            textDecoration: 'none',
            color: '#fff'
        }
    },
    hdSubLink: {
        textDecoration: 'none',
        color: '#000',
        "&:hover": {
            color: '#27aabb',
            fontWeight: 'bold'
        }
    },
    hdNavLink: {
        color: '#fff',
        textDecoration: 'none',
        "&:hover": {
            fontWeight: 'bold'
        }
    },
    navLondonBook: {
        background: '#27aabb',
        "& > a": {
            color: '#fff',
            display: 'block',
            padding: '0 5px',
            textDecoration: 'none',
            fontSize: '15px',
        }
    },
    basketIcon: {
        fontSize: '18px'
    },
    basketList: {
        display: 'flex',
        alignItems: 'center'
    },
    checkoutLink: {
        textDecoration: 'none',
        color: '#fff',
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        width: '420px',
        // height: '90px'
    },
    logoHeader: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        "& > span": {
            textTransform: "uppercase",
            fontSize: '28px',
            fontWeight: 'bold',
            paddingLeft: '10px',
            color: '#111',
            letterSpacing: '1px'
        }
    },
    headerWrap: {
        width: '90%',
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0'
        
    },
    headerPhone: {
        color: '#27aabb',
        fontWeight: '700',
        fontSize: '35px'
    },
    navWrap: {
        // background: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(255,208,90,1), rgba(255,189,121,1) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'
        background: 'linear-gradient(217deg, rgb(140 249 132), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(255,208,90,1), rgb(250 153 188) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'
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
        background: '#fff',
        marginTop: '10px',
        display: 'none',
        boxShadow: '2px 2px 2px rgba(0,0,0,0.5)',
        padding: '10px 0',
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
        background: '#fff',
        width: '1000px',
        marginTop: '10px',
        display: 'none',
        padding: '20px 0',
        boxShadow: '2px 2px 2px rgba(0,0,0,0.5)'
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
        padding: '10px 15px',
        borderBottom: '1px solid #ddd',
    },
    resHeaderLink: {
        color: '#666'
    },
    resNavLink: {
        textDecoration: 'none',
        color: '#000'
    },
    resLogo: {
        width: '205px',
    },
    smBasketWrap: {
        display: 'flex',
        alignItems: 'center',
        "& > a": {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#000'
        }
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
        background: '#fff',
        height: '100%',
        overflowY: 'scroll'
    },
    sideBarLogo: {
        width: '195px',
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
