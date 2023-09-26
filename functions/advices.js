import Swal from "sweetalert2";

export const adviceError = async (text) => {
  await Swal.fire({
    icon: "error",
    title: "Error",
    text: text ? text : "",
    confirmButtonText: "Accept",
    confirmButtonColor: "#d33",
  });
};

export const adviceSuccess = async (text) => {
  await Swal.fire({
    icon: "success",
    title: "Success",
    timer: 9000,
    text: text ? text : "",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#46c200",
  });
};

export const adviceMissing = async (title, text) => {
  await Swal.fire({
    icon: "warning",
    title: title ? title : "",
    text: text ? text : "",
    confirmButtonText: "Accept",
    confirmButtonColor: "#1e3c70",
  });
};

export const adviceLoading = async (title, html, text) => {
  await Swal.fire({
    title: title ? title : "Processing",
    html: html ? html : "",
    text: text ? text : "",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });
};

export const adviceLoadingClose = async () => {
  Swal.close();
};
