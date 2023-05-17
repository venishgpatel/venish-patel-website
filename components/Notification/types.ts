import type { ToastContent, ToastOptions } from "react-toastify"

export interface NotificationProps {
  content: ToastContent<{}>;
  options?: ToastOptions;
}

export type {
  ToastContent as NotificationContent,
  ToastOptions as NotificationOptions
} from "react-toastify"
