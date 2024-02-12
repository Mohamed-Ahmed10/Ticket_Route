import Carousel from 'react-bootstrap/Carousel';
import bus from '../assets/bus3.avif'
import train from '../assets/train.jpg'
import plane from '../assets/plane.jpeg'
import { useTranslation } from "react-i18next";
function Intro() {

    let { t } = useTranslation()
    return (
        <Carousel>
            <Carousel.Item>
                <img src={bus} alt="Bus" className="image_item" />
                <Carousel.Caption>
                    <h3>{t('bus_title')}</h3>
                    <p>{t('bus_desc')}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={plane} alt="plane" className="image_item" />
                <Carousel.Caption>
                    <h3>{t('plane_title')}</h3>
                    <p>{t('plane_desc')}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={train} alt="train" className="image_item" />
                <Carousel.Caption>
                    <h3>{t('train_title')}</h3>
                    <p>{t('plane_desc')}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Intro;