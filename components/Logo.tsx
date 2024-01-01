import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image
        id="homelogo"
        src="/images/ew_logo.svg"
        height={500}
        width={500}
        alt="ellington willoughby logo"
        className="p-4"
        priority={true}
      />
    </div>
  )
}
