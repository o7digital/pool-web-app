import './globals.css'

export const metadata = {
  title: 'Pool Link Prototype',
  description: 'Landing page + demo app for Pool Link',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
