import type {ToastContent, ToastOptions} from "react-toastify"

export interface NotificationProps {
  content: ToastContent<{}>;
  options?: ToastOptions;
}
