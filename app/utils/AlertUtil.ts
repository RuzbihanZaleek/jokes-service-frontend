import Swal from "sweetalert2";
import { AlertOptions } from "../types/alert";

export const showAlert = ({
  title,
  text,
  icon = "info",
  position = "bottom-end",
  timer = 2000,
  showConfirmButton = false,
  toast = true,
}: AlertOptions) => {
  Swal.fire({
    title: title,
    text: text || "",
    icon: icon,
    position: position,
    timer: timer,
    showConfirmButton: showConfirmButton,
    toast: toast,
    timerProgressBar: true,
  });
};
