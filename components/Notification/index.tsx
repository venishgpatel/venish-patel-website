'use client'

import { useCallback, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { NotificationProps } from "./types"

const Notification = ({ content, options }: NotificationProps) => {

  const notify = useCallback(() => {
    if (!content) return null

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
  }, [content, options])

  useEffect(() => {
    notify()
  }, [content, options])
  
  return (
    <ToastContainer position='bottom-center' className={'text-base'} />
  )
}

export default Notification