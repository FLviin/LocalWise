import Head  from "next/head";
import { CarouselCards } from "../components/CarouselCards";
import { Footer } from "../components/Footer";
import { InputInit } from "../components/InputInit";
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
     <title>LocalWise</title>
    </Head>
    
    <main className={styles.contentContainer}>
      <section className={styles.left}>
          <InputInit />
      </section>
      <section className={styles.right}>
          
      </section>
      <CarouselCards/>
    </main>
    <Footer />
    </>
    
  )
}
