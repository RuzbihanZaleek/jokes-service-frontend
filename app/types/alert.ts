export interface AlertOptions {
  title: string;
  text?: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
  position?:
    | "top"
    | "top-end"
    | "top-left"
    | "top-right"
    | "center"
    | "center-left"
    | "center-right"
    | "bottom"
    | "bottom-end"
    | "bottom-left"
    | "bottom-right";
  timer?: number;
  showConfirmButton?: boolean;
  toast?: boolean;
}
