import Navbar from '@/components/landing-page/Navbar'
import Footer from '@/components/landing-page/Footer'

export default function TokushohoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F10] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
