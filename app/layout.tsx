import './globals.css'
import "@fontsource/quicksand"

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
    <html lang="en" data-theme='dark' className='font-quicksand bg-surface text-primary antialiased'>
      <body className='text-base leading-6 laptop:text-xl laptop:leading-8'>{children}</body>
    </html>
  )
}
