import React from 'react'
import useStyles from './styles'

const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.about}>
            <h1>About Us</h1>
            <p>At JJ Design & Print, we strive to provide our clients with the highest quality and most professional looking designs. A printing store with many years of experience, we use state-of-the-art printing machines (Digital & Litho) and equipment to achieve the highest and most professional looking work.</p>
            <br/>
            <p>Our friendly but very helpful staff ensures that you get the best value for your money with professional, high-quality printed products that will leave you satisfied with the final result. Our company is passionate about helping businesses and individuals with the best designs and quality print products: products that will help them or their business look great.</p>
            <br/>
            <p>For any questions and concerns click the Contact Us button below or give us a call on our main line and one of our staff members will be more than happy to help..</p>
            <br/>
            <p><strong>We are excited to work with you and provide you with a satisfying service.</strong></p>
            <br/>
            <p>Our products include: Business Cards, Digital and Litho Flyers, Letterheads, Envelopes, Invoice Books (NCR), Pre-inked Stamps, Compliment Slips, Brochures & Magazines, Posters, Folders, Restaurant Menus, Price List, Note Pads, Labels and Stickers, Calendars, Foil Press, Wedding Cards, Books, T-Shirts & Textiles, Mugs, Promotional Gifts, Awards & Trophy Banners & Roll-ups, Vinyl, Exhibition Pull-ups and Large Format Print and many more…</p>
            <br/>
            <p>We also provide a Mail Box Service for individual and commercial use, please visit the store to view the service and discuss further.</p>
        </div>
    )
}

export default About
