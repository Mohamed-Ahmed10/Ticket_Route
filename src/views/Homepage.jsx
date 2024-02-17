import Intro from "../components/Intro";
import Testimonials from "../components/Testimonials";
import { Container } from 'react-bootstrap';

export default function Homepage() {
    return (
        <div>
            <Intro />
            <Testimonials />

            <footer className="bg-dark text-light py-4">
                <Container>
                    <div className="text-center">
                        <p>&copy; 2024 Your Reservation Company. All rights reserved.</p>
                        <p>Contact: info@ticketroute.com</p>
                    </div>
                </Container>
            </footer>


        </div>
    )
}
