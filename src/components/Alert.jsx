import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap';


export default function Alert() {
    const confirm = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <Button onClick={confirm}>Close</Button>
    )
}
