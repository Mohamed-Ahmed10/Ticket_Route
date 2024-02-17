import { useTranslation } from "react-i18next";
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import TransportCard from "../components/TransportCard";
import bus from "../assets/bus.jpg"
import train from "../assets/train.jpg"
import plane from "../assets/plane.jpeg"
import car from "../assets/car.jpg"
import { useState } from "react"

export default function Reservation() {
    let { t } = useTranslation()

    const [show, setShow] = useState(false)

    setTimeout(function () { setTimeout(setShow(true), 1500) }, 1500);

    const services = [
        {
            name: 'bus',
            ar_name:"اتوبيس",
            pricePerPerson: 20.5,
            from: "Cairo",
            to: "Sharm Elshekh",
            image: bus
        },
        {
            name: 'train',
            ar_name:"قطار",
            pricePerPerson: 200,
            from: "Cairo",
            to: "Luxor",
            image: train
        },
        {
            name: 'airplane',
            ar_name:"طائرة",
            pricePerPerson: 7000,
            from: "Cairo",
            to: "London",
            image: plane
        },
        {
            name: 'Private car',
            ar_name:"سيارة خاصة",
            pricePerPerson: "Contact us for prices",
            priceAr: "تواصل معنا للمزيد من التفاصيل",
            from: "Customer order",
            ar: "بناء على طلب العميل",
            to: "Customer order",
            image: car
        }
    ]


    return (
        <div className="pt-4 text-center">
            <h1>{t('reservation')}</h1>


            <Container>
                {show ?
                    <Row className="mt-4">
                        {services.map(service =>
                            <Col sm={6} className="p-2 d-flex justify-content-center" key={Math.random()}>
                                <TransportCard service={service}></TransportCard>
                            </Col>
                        )}
                    </Row> :
                    <Spinner className="mt-4" animation="grow" />
                }
            </Container>
        </div>
    )
}
