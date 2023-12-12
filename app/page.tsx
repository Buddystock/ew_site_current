import Image from 'next/image'
import Navigation from '@/components/Navigation'
import AudioPlayer from '@/components/AudioPlayer'
import { playlist } from '@/lib/data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Image
        src="/images/logo.png"
        height={150}
        width={150}
        alt="ellington willoughby logo"
        className="absolute top-6 right-6 p-4"
      />
      <Navigation />
      <h1 className="text-6xl font-light p-6">
        Ellington Willoughby
        <h2 className="text-center text-3xl font-light">
          & the Mythical Squid
        </h2>
      </h1>
      <section className="max-w-2xl mx-auto w-full fixed bottom-0 shadow-lg rounded-lg bg-transparent">
        <div className="w-full h-full">
          <AudioPlayer playlist={playlist} />
        </div>
      </section>
    </main>
  )
}
