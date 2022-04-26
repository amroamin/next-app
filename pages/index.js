import Head from 'next/head'
import Image from 'next/image'
import Nvabar from '../component/Nvabar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
            <title>Home</title>
            <meta title='description' content='anything'/>
        </Head>
     Home page 
    </div>
  )
}
