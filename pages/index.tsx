import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Counter from './component/counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div className={styles.container}>
    <Counter />
  </div>
}
