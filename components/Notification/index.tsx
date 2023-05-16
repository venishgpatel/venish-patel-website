'use client'

import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { NotificationProps } from "./types"

const Notification = ({ content, options }: NotificationProps) => {
  if (!content) return null

  useEffect(() => {
    switch (options?.type) {
      case "warning":
        toast.warn(content, options)
        break
      case "success":
        toast.success(content, options)
        break
      case "error":
        toast.error(content, options)
        break
      case "info":
        toast.success(content, options)
        break
      case "default":
      default:
        toast(content, options)
    }
  }, [])

  return (
    <ToastContainer position='bottom-center' className={'text-base'} />
  )
}

export default Notification