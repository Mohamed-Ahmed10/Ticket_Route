import { Container, Row, Col, Image } from 'react-bootstrap';
import companyImage from '../assets/logo.png';
import { useTranslation } from "react-i18next";

const About = () => {
    let { t } = useTranslation()

    return (
        <Container>
            <h1 className='text-center my-4'>{t('about_us')}</h1>
            <Row className="my-4">
                <Col md={6}>
                    <h2>{t('who_we_are')}</h2>
                    <p>{t('who_desc')}</p>
                </Col>
                <Col md={6}>
                    <Image src={companyImage} alt="Company Image" fluid />
                </Col>
            </Row>
            <hr />
            <Row className="my-4">
                <Col md={6}>
                    <Image src={companyImage} alt="Company Image" fluid />
                </Col>
                <Col md={6}>
                    <h2>{t('what_we_offer')}</h2>
                    <p>{t('offer_desc')}</p>
                </Col>
            </Row>
            <hr />
            <Row className="my-4">
                <Col>
                    <h2>{t('our_vision')}</h2>
                    <p>{t('vision_desc')}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
