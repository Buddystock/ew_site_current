import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/ew_logo.svg"
      height={500}
      width={500}
      alt="ellington willoughby logo"
      className="p-12"
      priority={true}
    />
  )
}
