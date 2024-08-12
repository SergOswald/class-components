import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'React learning',
  description: 'My App is react learning lesson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}