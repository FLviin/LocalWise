import Head  from "next/head";
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
     <title>LocalWise</title>
    </Head>
    
    <main className={styles.contentContainer}>
      <section className={styles.left}>
          <input type="text" />
      </section>
      <section className={styles.right}>
          
      </section>
    </main>
    
    </>
    
  )
}
