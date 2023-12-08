import Image from 'next/image'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Navigation />
      <h1 className="text-6xl font-light p-6 border-4 border-neutral-300">Ellington Willoughby</h1>
    </main>
  )
}
