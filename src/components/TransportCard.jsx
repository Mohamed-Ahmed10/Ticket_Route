/* eslint-disable react/prop-types */
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import logo from "../assets/icon.png"
import { useState } from "react"
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

export default function TransportCard({ service }) {

    const [inputs, setInputs] = useState({
        input1: '',
        input2: '',
        input3: '',
    });

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs)
    };


    const confirm = () => {
        Swal.fire({
            icon: "success",
            title: t('reserve_confirmation'),
            imageUrl: logo,
            imageWidth: 70,
            imageAlt: "Custom image",
            html: `
                <div>${t('thanks') + inputs.input1}</div>
                <div>${t('end_reserve') + inputs.input2} </div>
            `,
            // timer: 2500
        });
    }

    let { t, i18n } = useTranslation()
    const [show, setShow] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [selectedDate, setSelectedDate] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">{t('reservation_details')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="text-center my-2 text-bg-secondary p-3">{t('your_date')}</h4>
                    <Form.Group as={Row} className="my-4" controlId="formPlaintextPassword">
                        <Form.Label column sm="4" >{t('client_name')}</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                type="text"
                                name="input1"
                                value={inputs.input1}
                                onChange={handleInputChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4">{t('date_from')}</Form.Label>
                        <Col sm="6">
                            <input
                                type="date"
                                name="input2"
                                value={inputs.input2}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={confirm}>{t('confirm')}</Button>
                </Modal.Footer>
            </Modal>

            <Card>
                <Card.Img variant="top" loading='lazy' src={service.image} />
                <Card.Body>
                    <Card.Title>{i18n.language === "en" ? service.name : service.ar_name}</Card.Title>
                    <Card.Text as="div">
                        <div>{t('from')} : {i18n.language === "ar" && service.ar ? service.ar : service.from}</div>
                        <div>{t('price')} : {i18n.language === "ar" && service.ar ? service.priceAr : service.pricePerPerson}</div>
                    </Card.Text>
                    <Button variant="primary" className='mt-4' onClick={handleShow}>{t('reserve_now')}</Button>
                </Card.Body>
            </Card >
        </>
    );
}

