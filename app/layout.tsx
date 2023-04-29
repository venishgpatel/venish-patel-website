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
    <html lang="en" className='font-quicksand bg-surface text-primary'>
      <body>{children}</body>
    </html>
  )
}
