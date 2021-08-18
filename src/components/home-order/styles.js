import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    homeOrderWrap: {
        padding: '25px 0',
        background: '#f2f2f2',
        "& > h2": {
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '26px',
            padding: '40px 0 25px 0'
        }
    },

    orderGrid: {
        // borderRight: '1px dashed #f2f2f2'
    },

    orderWrap: {
        width: '95%',
        margin: '0 auto',
        // background: 'rgb(56, 56, 56)',
    },

    orderImg: {
        background: 'rgb(56, 56, 56)',
        width: '100%',
    },

    orderImgWrap: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        "& > div": {
            border: '1px solid #27aabb',
            borderRadius: '50%',
            padding: '25px'
        },
        "&:hover": {
            "& $orderImg": {
                background: '#27aabb'
            },
            "& > $div": {
                background: '#27aabb'
            }
        }
    },
    orderText: {
        textAlign: 'center',
        color: '#f2f2f2',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingBottom: '25px'
    },
    [theme.breakpoints.down('xs')]: {
        homeOrderWrap: {
            "& > h2": {
                fontSize: '20px'
            }
        },
        orderGrid: {
            borderBottom: '1px dashed #f2f2f2'
        }
    }
}));
export default useStyles;
