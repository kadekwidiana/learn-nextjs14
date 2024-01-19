import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'My Next App',
  description: 'Description My App',
  icons: {
    icon: '/icon.png'
  }
}


export default function Home() {
  // throw new Error('Error') 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  )
}
