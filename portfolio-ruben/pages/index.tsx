import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ActivityTimeline from "../components/ActivityTimeline";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [page, setPage] = React.useState("home");

    const clickTimeline = () => {
        setPage("timeline");
    };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="h"
              target="_blank"
            >
              <img
                src="/pxl.png"
                alt="PXL Logo"
                className={styles.pxlLogo}
                width={400}
                height={100}
              />
            </a>
          </div>
          <p>Door Ruben Schoofs</p>
        </div>

        <div className={styles.center}>
            {page === "timeline" && <ActivityTimeline></ActivityTimeline>}
        </div>

        <div className={styles.grid}>
            <a
                className={styles.card}
                onClick={clickTimeline}
            >
                <h2 className={inter.className}>
                   Timeline activiteiten <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Een overzicht van alle activiteiten.
                </p>
            </a>
            <a
                href=""
                className={styles.card}
                target="_blank"
            >
                <h2 className={inter.className}>
                    Seminarie <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                </p>
            </a>
            <a
                href=""
                className={styles.card}
                target="_blank"
            >
                <h2 className={inter.className}>
                    Innovatieroute <span>-&gt;</span>
                </h2>
                <p className={inter.className}>

                </p>
            </a>
            <a
                href=""
                className={styles.card}
                target="_blank"
            >
                <h2 className={inter.className}>
                    Hackathon Ergotherapie <span>-&gt;</span>
                </h2>
                <p className={inter.className}>

                </p>
            </a>
        </div>
      </main>
    </>
  )
}
