import Image from 'next/image'
import Navigation from '../components/Navigation'
import AudioPlayer from '@/components/AudioPlayer'
import { playlist } from '../lib/data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 my-60">
      <Image
        src="/images/logo.png"
        height={150}
        width={150}
        alt="ellington willoughby logo"
        className="absolute top-6 right-6 p-4"
      />
      <Navigation />
      <h1 className="text-6xl font-light p-6 border-4 border-neutral-300">Ellington Willoughby</h1>
      <section className="container max-w-lg max-h-60 h-48 w-full">
        <div className="">
          <AudioPlayer playlist={playlist} />
        </div>
      </section>
    </main>
  )
}
