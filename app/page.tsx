import Image from 'next/image'
import Navigation from '@/components/Navigation'
import AudioPlayer from '@/components/AudioPlayer'
import { playlist } from '@/lib/data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Image
        src="/images/golo.png"
        height={450}
        width={450}
        alt="ellington willoughby logo"
        className="p-4"
      />
      <Navigation />
      <section className="max-w-2xl mx-auto w-full fixed bottom-0 shadow-lg rounded-lg bg-transparent">
        <div className="w-full h-full">
          <AudioPlayer playlist={playlist} />
        </div>
      </section>
    </main>
  )
}
