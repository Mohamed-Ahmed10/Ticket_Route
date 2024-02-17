import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import translateIcon from "../assets/translate.svg"
function SiteNav() {
    const { t, i18n } = useTranslation();

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Ticket route</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" >
                        <NavLink className="nav-link" to="/">{t('home')}</NavLink>
                        <NavLink className="nav-link" to="/about">{t('about')}</NavLink>
                        <NavLink className="nav-link" to="/contact">{t('contact')}</NavLink>
                        <NavLink className="nav-link" to="/reservation">{t('reservation')}</NavLink>
                    </Nav>
                    <img src={translateIcon} style={{ width: '40px' }} onClick={handleLanguage} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;