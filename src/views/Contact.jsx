import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { t } = useTranslation()
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, for this example, just showing the alert
        setShowAlert(true);
        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Container className="pt-4">
            <h1>{t('contact_us')}</h1>
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>{t('contact_thanks')}</Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName" className='my-3'>
                    <Form.Label>{t("name")}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t("enter_your_name")}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className='my-3'>
                    <Form.Label>{t("email_address")}</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder={t("enter_email")}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicMessage" className='my-3'>
                    <Form.Label>{t("message")}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder={t("enter_your_message")}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">{t("submit")}</Button>
            </Form>
        </Container>
    );
};

export default Contact;
