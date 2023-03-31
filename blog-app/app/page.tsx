import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <p>
      <Link href='/about'>Go to About page</Link> 
      </p>
      <p>
      <Link href='/users'>Users</Link> 
      </p>
    </main>
  )
}
