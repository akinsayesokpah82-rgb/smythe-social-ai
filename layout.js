import './globals.css'

export const metadata = {
  title: 'Smythe University College — Social AI',
  description: 'Student community with AI assistant',
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
