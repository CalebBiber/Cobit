import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import logoImg from '@/public/logo.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="rounded-full mx-auto md:max-w-none h-16 w-16" src={logoImg} alt="Cobit" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/#download" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Download
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
