import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import AudioPlayer from '@/components/AudioPlayer'
import { playlist } from '@/lib/data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 py-12">
      <Navigation />
      <section className="flex flex-col items-center justify-start px-12 py-6">
        <h1 className="title text-center text-5xl">
          <Link href="https://www.facebook.com/EllingtonWilloughby/">
            Ellington Willoughby and the Mythical Squid
          </Link>
        </h1>
        <Image
          src="/images/golo.png"
          height={450}
          width={450}
          alt="ellington willoughby logo"
          className="p-4"
        />
        <p className="body text-center text-2xl">
          Ellington Willoughby and the Mythical Squid is a high energy psychedelic pop six piece from S.E. Portland. Funky Grooves back singer-songwriter melodies to take you on a genre bending journey that is both far out and close to home. The arrival is unexpected. You'll be glad you took the trip.
        </p>
      </section>
      <section className="max-w-2xl mx-auto w-full fixed bottom-0 shadow-lg rounded-lg bg-transparent">
        <div className="w-full h-full">
          <AudioPlayer playlist={playlist} />
        </div>
      </section>
    </main>
  )
}
