import { useTranslation } from "react-i18next";
import InfiniteCalendar from 'react-infinite-calendar';
import { useState } from "react"
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function Reservation() {
    let { t } = useTranslation()
    var today = new Date();

    const confirm = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        handleClose()
    }
    var minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDateSelect = (date) => {
        console.log(date.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }))
    };
    return (
        <div className="pt-4 text-center">
            <h1>{t('reservation')}</h1>

            <InfiniteCalendar
                width={400}
                height={400}
                selected={today}
                disabledDays={[0, 6]}
                minDate={minDate}
                onSelect={handleDateSelect}
            />

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>


            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="text-center">{t('tour_data')}</h4>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{t('client_name')}</Form.Label>
                        <Form.Control type="text" placeholder="your name" />
                    </Form.Group>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={confirm}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
