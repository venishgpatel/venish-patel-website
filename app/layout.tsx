import Provider from '@/components/Provider'
import './globals.css'
import '@fontsource/quicksand'

export const metadata = {
  title: 'Venish Patel | Programmer & Designer',
  description: 'Venish Patel',
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
