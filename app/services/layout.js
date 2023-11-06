import MainFooter from '@/components/MainFooter'
import MainHeader from '@/components/MainHeader'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
        <MainFooter/>
      </body>
    </html>
  )
}