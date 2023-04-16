import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
