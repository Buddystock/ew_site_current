import Link from "next/link";
import BackgroundContainer from "@/components/BackgroundContainer";

export default function AboutPage() {

  const wrapStyle: React.CSSProperties = {
    height: '100vh',
    width: '100vw'
  }

  const originLinkStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2.5rem',
    textDecoration: 'underline',
  }

  return (
    <div style={wrapStyle}>
      <BackgroundContainer backgroundImage="/images/abstract.gif" opacity={0.7}>
        <h1 className="body subpixel-antialiased underline">About</h1>
        <p className="body font-semibold text-2xl/6 p-8 subpixel-antialiased">Ellington Willoughby and the Mythical Squid
          is a high energy psychedelic pop six piece from S.E. Portland.
        </p>

        <p className="body  font-semibold text-2xl/6 p-8 subpixel-antialiased">
          Funky Grooves back singer-songwriter melodies to take you on a genre bending journey that is both far out and close to home. The arrival is unexpected. You'll be glad you took the trip.
        </p>

        <Link href="/about/origin">
          <h2 style={originLinkStyle} className="body">
            Origin Story
          </h2>
        </Link>

      </BackgroundContainer>
    </div>
  );
}
