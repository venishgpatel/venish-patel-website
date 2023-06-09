import { Metadata } from 'next'
import Provider from '@/components/Provider'
import './globals.css'
import '@fontsource/quicksand'

export const metadata: Metadata = {
  title: {
    default: 'Venish Patel',
    template: '%s | Venish Patel'
  },
  description: 'Venish Patel | FullStack Developer',
  keywords: ['Next.js', 'React', 'JavaScript', 'Venish', 'FullStack', 'Venish Patel'],
  authors: [{ name: 'Venish Patel', url: 'https://www.venishpatel.com/' }],
  category: 'portfolio',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='font-quicksand bg-surface text-primary antialiased'>
      <body className='text-base leading-5 laptop:leading-6 font-medium'>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
