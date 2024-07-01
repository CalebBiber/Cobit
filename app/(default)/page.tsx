export const metadata = {
  title: 'Cobit - Open SourceCode Wallet',
  description: 'Cobit Wallet is a mobile cryptocurrency wallet that allows users to securely store, manage, and interact with various digital assets.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Zigzag from '@/components/zigzag'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  )
}
