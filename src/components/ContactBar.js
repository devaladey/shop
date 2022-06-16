function ContactBar() {
    return (
        <nav className="contact-bar">
            <a className="contact-bar__link contact-bar__link-text">+234 902 701 4169</a>
            <a className="contact-bar__link contact-bar__link-text">oluwatobioyedokun7@gmail.com</a>

            <a className="contact-bar__link contact-bar__link-icon first-icon"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a className="contact-bar__link contact-bar__link-icon"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a className="contact-bar__link contact-bar__link-icon"><i className="fa fa-github" aria-hidden="true"></i></a>
            <a className="contact-bar__link contact-bar__link-icon"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a className="contact-bar__link contact-bar__link-icon"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </nav>
    );
}

export default ContactBar;