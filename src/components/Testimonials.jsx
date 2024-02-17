import { Container, Card, Row, Col } from 'react-bootstrap';
import personOne from "../assets/personOne.jpg"
import personTwo from "../assets/personTwo.jpg"
import { useTranslation } from "react-i18next";

const Testimonials = () => {
    let { t } = useTranslation()



    return (
        <div className="testimonials my-4">
            <Container>
                <Row>

                    <Col sm={6}>
                        <Card className="h-100 testimonial text-center align-items-center">
                            <Card.Img variant="top" src={personOne} alt={t('person_one')} className="testimonial-image" />
                            <Card.Body>
                                <Card.Title className="testimonial-name">{t('person_one')}</Card.Title>
                                <div className="testimonial-rating">
                                    {Array.from({ length: 4 }, (_, i) => (
                                        <span key={i} className="star">&#9733;</span>
                                    ))}
                                </div>
                                <Card.Text className="testimonial-content">{t('person_one_opinion')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card className="h-100 testimonial text-center align-items-center">
                            <Card.Img variant="top" src={personTwo} alt={t('person_two')} className="testimonial-image" />
                            <Card.Body>
                                <Card.Title className="testimonial-name">{t('person_two')}</Card.Title>
                                <div className="testimonial-rating">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i} className="star">&#9733;</span>
                                    ))}
                                </div>
                                <Card.Text className="testimonial-content">{t('person_two_opinion')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;