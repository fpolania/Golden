import Swal from 'sweetalert2'
export class AlertSwal {
    showAlertError(icon?: any, title?: any, text?: any) {
        Swal.fire({
            icon: icon,
            title: `${title}`,
            text: `${text}`,
        });
    }
    showAlertSuccess(icon?: any, title?: string) {
        Swal.fire({
            position: "top-end",
            icon: icon,
            title: `${title}`,
            showConfirmButton: false,
            timer: 1500
        });
    }
}