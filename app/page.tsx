import Link from 'next/link'
import Navigation from '@/components/Navigation'
import AudioPlayer from '@/components/AudioPlayer'
import { playlist } from '@/lib/data'
import Logo from '@/components/Logo'
import BackgroundContainer from '@/components/BackgroundContainer'

export default function Home() {
  return (
    <main >
      <BackgroundContainer backgroundImage='/images/lavalamp.gif' opacity={0.6}>
        <div className="flex min-h-screen flex-col items-center justify-start pt-20">
          <Navigation />

          <section className="flex flex-col items-center justify-start px-12 py-6">
            <Link href="https://www.facebook.com/EllingtonWilloughby/">
              <Logo />
            </Link>
          </section>

          <section className="max-w-2xl mx-auto w-full fixed bottom-0 shadow-lg rounded-lg bg-transparent">
            <div className="w-full h-full">
              <AudioPlayer playlist={playlist} />
            </div>
          </section>
        </div>
      </BackgroundContainer>
    </main>
  )
}
