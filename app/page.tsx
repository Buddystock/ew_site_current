import Link from 'next/link'
import Navigation from '@/components/Navigation'
import AudioPlayer from '@/components/AudioPlayer'
import { playlist } from '@/lib/data'
import Logo from '@/components/Logo'
import BackgroundContainer from '@/components/BackgroundContainer'

export default function Home() {

  const mainStyle: React.CSSProperties = {
    minHeight: '100vh',
    maxWidth: '100vw',
    height: '100%',
    width: '100%'
  };

  const backgroundStyle: React.CSSProperties = {
  };

  return (
    <main style={mainStyle}>
      <BackgroundContainer backgroundImage='/images/lavalamp.gif' opacity={0.7}>
        <div className="flex min-h-screen flex-col items-center justify-start pt-20">
          <Navigation />

          <Link href="https://www.facebook.com/EllingtonWilloughby/">
            <Logo />
          </Link>

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
