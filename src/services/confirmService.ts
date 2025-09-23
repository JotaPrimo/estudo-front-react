import Swal from "sweetalert2"

export const confirmDelete = (title: string, confirmButtonText: string, denyButtonText: string) => {
  return Swal.fire({
    title: title,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    denyButtonText: denyButtonText
  })
}