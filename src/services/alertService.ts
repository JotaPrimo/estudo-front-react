import Swal from 'sweetalert2';

export const alertService = {
  confirm: async (
    title: string = 'Atenção',
    confirmButtonText: string = 'Deletar',
    denyButtonText: string = 'Cancelar',
    showDenyButton: boolean = false
  ) => {
    return Swal.fire({
      title: title,
      showDenyButton: showDenyButton,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      denyButtonText: denyButtonText,
    });
  },

  success: async (message: string) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: 'success',
      title: message,
    });
  },

  error: async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: 'error',
      title: 'Ocorreu um erro',
    });
  },

  warning: async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: 'warning',
      title: 'Ocorreu um erro',
    });
  },

  info: async (message: string) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: 'info',
      title: message,
    });
  },
};
