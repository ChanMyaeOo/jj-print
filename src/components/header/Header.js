import React from "react";
import { Link, useHistory } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import useStyles from "./styles";
import Logo from "../../images/logo.png";
import { useStateValue } from "../../context/StateProvider";
import { auth } from '../../firebase/firebase'

const Header = () => {
    const classes = useStyles();
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const handleOverlayClose = () => {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
    };

    const handleOverlayOpen = () => {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "block";
    };

    // to handle header fixed on scroll
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const headerElement = document.getElementById("header");
        if (scrolled > 300) {
            headerElement.classList.add(classes.fixedHeader);
        } else if (scrolled <= 300) {
            headerElement.classList.remove(classes.fixedHeader);
        }
    };
    window.addEventListener("scroll", toggleVisible);

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            history.push('/')
        }
    };

    return (
        <div className={classes.headerSection} id="header">
            <div className={classes.barWrap}>
                <ul className={classes.headerBar}>
                    <li><Link to="/about" className={classes.hdLinks}>About Us</Link></li>
                    <li><Link to="/contact" className={classes.hdLinks}>Contact Us</Link></li>

                    <li>
                        <FacebookIcon className={classes.sIcons} />{" "}
                        <InstagramIcon className={classes.sIcons} />{" "}
                        <TwitterIcon className={classes.sIcons} />
                    </li>
                    <li>
                        <Link to={!user && "/sign-in"} className={classes.signInLink}>
                            <div onClick={handleAuthentication}>
                                <span className={classes.headerGuest}>
                                    {user ? `Hello ${user.email}` : "Hello Guest"}
                                </span>{" "}
                                <br />
                                <span>{user ? "Sign Out" : "Sign In"}</span>
                            </div>
                        </Link>
                    </li>
                    <li className={classes.hdCheckout}><Link to="/checkout">Checkout</Link></li>
                    <li className={classes.basketList}>
                        <Link to="/checkout" className={classes.checkoutLink}>
                            <ShoppingBasketIcon
                                className={classes.basketIcon}
                            />
                            &nbsp;<span>{basket.length}</span>
                        </Link>
                    </li>
                </ul>
                <div>Ad Print Delivered in High Quality</div>
            </div>
            <div className={classes.headerWrap}>
                <Link to="/">
                    <img src={Logo} alt="logo" className={classes.logo} />
                </Link>
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
                                    <h4 className={classes.subHeader}>
                                        advertising materials
                                    </h4>
                                    <div><Link to="/business-cards-details" className={classes.hdSubLink}>Business Cards</Link></div>
                                    <div><Link to="/digital-flyers-details" className={classes.hdSubLink}>Digital Flyers</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Litho Flyers</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Promotional Items</Link></div>
                                </li>
                                <li>
                                    <h4 className={classes.subHeader}>
                                        business/personal stationery
                                    </h4>
                                    <div><Link to="/" className={classes.hdSubLink}>Calenders</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Complient Slips</Link></div>
                                    <div><Link to="/envelopes-details" className={classes.hdSubLink}>Envelopes</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Folders</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Invoice Books</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Labels/Stickers</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Letterheads</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Notepads</Link></div>
                                    <div><Link to="/stamps-details" className={classes.hdSubLink}>Stamps</Link></div>
                                </li>
                                <li>
                                    <h4 className={classes.subHeader}>
                                        advertising products
                                    </h4>
                                    <div><Link to="/" className={classes.hdSubLink}>Brochures &amp; Magazines</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Foil Press</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Posters</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Books</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Hard Cover Menu</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Lether Cover Menu</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Paper Menu</Link></div>
                                </li>
                                <li>
                                    <h4 className={classes.subHeader}>
                                        customized items
                                    </h4>
                                    <div><Link to="/" className={classes.hdSubLink}>Awards &amp; Trophies</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Roller Banners</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Canvas &amp; Framed Print</Link></div>
                                    <div><Link to="/mugs-details" className={classes.hdSubLink}>Mugs</Link></div>
                                    <div><Link to="/t-shirt-details" className={classes.hdSubLink}>T-shirts</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Vinyl</Link></div>
                                    <div><Link to="/" className={classes.hdSubLink}>Wedding Cards</Link></div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><Link className={classes.hdNavLink} to="/business-cards-details">business cards</Link></li>
                    <li className={classes.flyer}>
                        flyers
                        <div className={classes.flyerSubNav}>
                            <div><Link to="/" className={classes.hdSubLink}>Litho Flyers</Link></div>
                            <div><Link to="/digital-flyers-details" className={classes.hdSubLink}>Digital Flyers</Link></div>
                        </div>
                    </li>
                    <li><Link to="envelopes-details" className={classes.hdNavLink}>envelopes</Link></li>
                    <li><Link to="/stamps-details" className={classes.hdNavLink}>stamps</Link></li>
                    <li><Link to="/mugs-details" className={classes.hdNavLink}>mugs</Link></li>
                    <li><Link to="/t-shirt-details" className={classes.hdNavLink}>t-shirts</Link></li>
                    <li className={classes.navLondonBook}><a href="https://www.londonbook.uk/" target="_blank">london book</a></li>
                </ul>
            </div>

            {/* For Small Devices */}
            <div className={classes.resHeaderWrap}>
                <div className={classes.resHeader}>
                    <MenuIcon onClick={handleOverlayOpen} />
                    <img src={Logo} alt="logo" className={classes.resLogo} />
                    <div className={classes.smBasketWrap}>
                        <ShoppingBasketIcon />
                        &nbsp;<span>0</span>
                    </div>
                </div>
            </div>

            <div className={classes.overlay} id="overlay">
                <CloseIcon
                    className={classes.overlayClose}
                    onClick={handleOverlayClose}
                />
                <div className={classes.sideBar}>
                    <img
                        src={Logo}
                        alt="logo"
                        className={classes.sideBarLogo}
                    />

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
                        <div className={classes.sidebarPhone}>
                            020 7289 9000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
