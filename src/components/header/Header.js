import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./styles";
import Logo from '../../images/logo.png'

const Header = () => {
    const classes = useStyles();

    const handleOverlayClose = () => {
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none'
    }

    const handleOverlayOpen = () => {
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'block'
    }
    return (
        <div>
            <div className={classes.barWrap}>
                <ul className={classes.headerBar}>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Email</li>
                    <li>Social</li>
                    <li>Login/Register</li>
                    <li>Checkout</li>
                    <li>£ 0</li>
                    <li>Card</li>
                </ul>
                <div>Ad Print Delivered in High Quality</div>
            </div>
            <div className={classes.headerWrap}>
                <img src={Logo} alt="logo" className={classes.logo} />
                <div>
                    <div>Mon. - Fri. 09:30 - 18:00 | Sat. 10:00 - 18:00</div>
                    <div className={classes.headerPhone}>020 7289 9000</div>
                </div>
            </div>

            <div className={classes.navWrap}>
                <ul className={classes.nav}>
                    <li className={classes.products}>
                        all products
                        
                        <div className={classes.productsNavWrap}>
                        <ul className={classes.productsSubNav}>
                            <li>
                                <h4 className={classes.subHeader}>advertising materials</h4>
                                <div>Business Cards</div>
                                <div>Digital Flyers</div>
                                <div>Litho Flyers</div>
                                <div>Promotional Items</div>
                            </li>
                            <li>
                                <h4 className={classes.subHeader}>business/personal stationery</h4>
                                <div>Calenders</div>
                                <div>Complient Slips</div>
                                <div>Envelopes</div>
                                <div>Folders</div>
                                <div>Invoice Books</div>
                                <div>Labels/Stickers</div>
                                <div>Letterheads</div>
                                <div>Notepads</div>
                                <div>Stamps</div>
                            </li>
                            <li>
                                <h4 className={classes.subHeader}>advertising products</h4>
                                <div>Brochures &amp; Magazines</div>
                                <div>Foil Press</div>
                                <div>Posters</div>
                                <div>Books</div>
                                <div>Hard Cover Menu</div>
                                <div>Lether Cover Menu</div>
                                <div>Paper Menu</div>
                            </li>
                            <li>
                                <h4 className={classes.subHeader}>customized items</h4>
                                <div>Awards &amp; Trophies</div>
                                <div>Roller Banners</div>
                                <div>Canvas &amp; Framed Print</div>
                                <div>Mugs</div>
                                <div>T-shirts</div>
                                <div>Vinyl</div>
                                <div>Wedding Cards</div>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li>business cards</li>
                    <li className={classes.flyer}>
                        flyers
                        <div className={classes.flyerSubNav}>
                            <div>Litho Flyers</div>
                            <div>Digital Flyers</div>
                        </div>
                    </li>
                    <li>envelopes</li>
                    <li>invoice books</li>
                    <li>stamps</li>
                    <li>roller banners</li>
                    <li>london book</li>
                </ul>
            </div>

            {/* For Small Devices */}
            <div className={classes.resHeaderWrap}>
                <div className={classes.resHeader}>
                    <MenuIcon onClick={handleOverlayOpen}/>
                    <img src={Logo} alt="logo" className={classes.resLogo} />
                    <div>£ 0</div>
                </div>
            </div>

            <div className={classes.overlay} id="overlay">
                <CloseIcon className={classes.overlayClose} onClick={handleOverlayClose}/>
                <div className={classes.sideBar}>
                    <img src={Logo} alt="logo" className={classes.sideBarLogo}/>

                    <ul className={classes.sidebarNav}>
                        <li className={classes.sideBarProducts}>
                            All products
                            <div className={classes.productsWrap}>
                                <h5>advertising materials</h5>
                                <div>Business Cards</div>
                                <div>Digital Flyers</div>
                                <div>Litho Flyers</div>
                                <div>Promotional Items</div>

                                <h5>business/personal stationery</h5>
                                <div>Calenders</div>
                                <div>Complient Slips</div>
                                <div>Envelopes</div>
                                <div>Folders</div>
                                <div>Invoice Books</div>
                                <div>Labels/Stickers</div>
                                <div>Letterheads</div>
                                <div>Notepads</div>
                                <div>Stamps</div>

                                 <h5>advertising products</h5>
                                <div>Brochures &amp; Magazines</div>
                                <div>Foil Press</div>
                                <div>Posters</div>
                                <div>Books</div>
                                <div>Hard Cover Menu</div>
                                <div>Lether Cover Menu</div>
                                <div>Paper Menu</div>

                                 <h5>customized items</h5>
                                <div>Awards &amp; Trophies</div>
                                <div>Roller Banners</div>
                                <div>Canvas &amp; Framed Print</div>
                                <div>Mugs</div>
                                <div>T-shirts</div>
                                <div>Vinyl</div>
                                <div>Wedding Cards</div>
                            </div>
                        </li>
                        <li>business cards</li>
                        <li className={classes.sideBarFlyers}>
                            flyers
                            <div className={classes.sideBarSubFlyers}>
                                <div>Litho Flyers</div>
                                <div>Digital Flyers</div>
                            </div>
                        </li>
                        <li>envelopes</li>
                        <li>invoice books</li>
                        <li>stamps</li>
                        <li>roller banners</li>
                        <li>london book</li>
                    </ul>

                    <div className={classes.sidebarSocial}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </div>

                    <div className={classes.sidebarContact}>
                         <div>Mon. - Fri. 09:30 - 18:00</div>
                         <div>Sat. 10:00 - 18:00</div>
                        <div className={classes.sidebarPhone}>020 7289 9000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
