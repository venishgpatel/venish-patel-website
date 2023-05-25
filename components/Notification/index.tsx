'use client'

import { useCallback, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { NotificationProps, NotificationContent, NotificationOptions } from './types'

const Notification = ({ content, options }: NotificationProps) => {
  const { resolvedTheme } = useTheme()

  const notify = useCallback((content: NotificationContent<{}>, options: NotificationOptions | undefined) => {
    if (!content) return null

    switch (options?.type) {
      case 'warning':
        toast.warn(content, options)
        break
      case 'success':
        toast.success(content, options)
        break
      case 'error':
        toast.error(content, options)
        break
      case 'info':
        toast.success(content, options)
        break
      case 'default':
      default:
        toast(content, options)
    }
  }, [])

  useEffect(() => {
    notify(content, options)
  }, [notify, content, options])
  
  return (
    <ToastContainer
      position='bottom-center'
      className={'text-base'}
      toastClassName={'!bg-surface-opposite !text-primary-opposite'}
      theme={resolvedTheme === 'dark' ? 'light' : 'dark'}
    />
  )
}

export default Notification