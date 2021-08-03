import React from "react";
import useStyles from "./styles";
import Logo from '../../images/logo.png'

const Header = () => {
    const classes = useStyles();
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
        </div>
    );
};

export default Header;
