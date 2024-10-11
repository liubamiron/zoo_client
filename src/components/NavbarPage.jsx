import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LanguagePopover from "./LanguagePopover";
import {useTranslation} from "../providers/index.js";

function NavbarPage() {
    const {t} = useTranslation();
    return (
        <div>
            <Container className="py-2">
                <Row>
                    {/* Logo Column */}
                    <Col xs={2} lg={6}>
                        <img src={'/logo_svg.svg'} alt="Zoo Logo"/>
                    </Col>
                    {/* Operating Hours and Ticket Button Column */}
                    <Col className="text-end" xs={10} lg={6}>
                        <span>{t('HOURS')} 10:00 - 16:00&nbsp;</span>
                        <Button style={{ background: "#0A4D1E", border: 'none' }}>{t("BY_TICKET")}</Button>
                    </Col>
                </Row>
            </Container>
            <Navbar expand="lg" style={{ background: "#0A4D1E" }} className={'pad_desk_18'}>
                <Container >
                    {/* Mobile Logo */}
                    <Navbar.Brand href="/" className="mobile-logo">
                        <img src={'/logo.svg'} alt={'logo'}/>
                    </Navbar.Brand>

                    {/* Toggle Button (Hamburger Menu) */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-menu-toggle" />
                    <Navbar.Collapse id="basic-navbar-nav" className={'navbar_menu'}>
                        <Nav className="me-auto align-content-center">
                           <Link to="/" className="nav-link text_white">ZOO</Link>
                            <Link to="/animals" className="nav-link text_white">{t('ANIMALS')}</Link>
                            <Link to="/gallery" className="nav-link text_white">{t('GALLERY')}</Link>
                            <Link to="/events" className="nav-link text_white">{t('EVENTS')}</Link>
                            <Link to="/questions" className="nav-link text_white">{t('RULES')}</Link>
                            <Link to="/contacts" className="nav-link text_white">{t('CONTACTS')}</Link>
                            <Link to="/about" className="nav-link text_white">{t('ABOUT')}</Link>
                            <Link to="/news" className="nav-link text_white">{t('NEWS')}</Link>
                            <Link to="/login" className="nav-link text_white">Login</Link>
                            {/*<Nav.Link href="/login" className="text_white">Авторизация</Nav.Link>*/}
                        </Nav>
                        <Nav className="ms-auto align-items-center">
                            <span className="text_white">
                                <img src="/icons/phone.svg" alt="Phone Icon" className="phone-icon" />&nbsp;
                                <span className="phone-number">(022) 76-37-33&nbsp;</span>
                            </span>
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/facebook-f.svg" alt="Facebook" className="social-icon" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/instagram.svg" alt="Instagram" className="social-icon" />
                                </a>
                                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/telegram.svg" alt="Telegram" className="social-icon" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
                                </a>
                            </div>
                            <LanguagePopover />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarPage;
