import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ActivityTimeline from "../components/ActivityTimeline";
import React from "react";
import Innovatieroute from "../components/Innovatieroute";
import Hackathon from "../components/Hackathon";
import CleanCode from "../components/CleanCode";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [page, setPage] = React.useState("home");

    const clickTimeline = () => {
        setPage("timeline");
    };

    const clickHome = () => {
        setPage("home");
    };

    const clickInnovatie = () => {
        setPage("innovatie");
    };

    const clickHackathon = () => {
        setPage("hackathon");
    };

    const clickCleanCode = () => {
        setPage("clean");
    };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/Portfolio-I-Talent-Ruben/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.header}>
            <a
              onClick={clickHome}
            >
              <img
                src="/Portfolio-I-Talent-Ruben/pxl.png"
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
            {page === "timeline" &&
            <div className={styles.timelineMobile}>
	            <ActivityTimeline/>
            </div> }
            {page === "innovatie" &&
            <div className={styles.textMobile}>
	            <Innovatieroute/>
            </div>}
            {page === "hackathon" &&
            <div className={styles.textMobile}>
	            <Hackathon/>
            </div>}
            {page === "clean" &&
            <div className={styles.textMobile}>
	            <CleanCode/>
            </div>}
            {page === "home" && (
                <>
                    <div className={styles.description}>
                           <div className={styles.bigText}>
                               <p>
                                   Welkom bij mijn digitale portfolio. Deze portfolio bevat een tijdlijn van alle activiteiten die ik heb gedaan voor I-Talent. Ook bespreek ik drie gekozen activiteiten in detail. Maar eerst een voorstelling;  <br/> <br/>
                                   Gegroet, ik ben Ruben Schoofs, student IT bij PXL Digital met als afstudeerrichting applicatieontwikkeling. Mijn interesses zijn dus applicaties ontwikkelen maar ook technologie in het algemeen. <br /> <br/>
                                   Wat voor persoon ben ik nu eigenlijk? Ik ben een uitvoerend persoon die liefst correct en volgens de richtlijnen taken uitvoert. Ik kan ofwel in een team of alleenstaand werken, idealistisch een combinatie van de twee. Ik ben geen analist maar denk toch wel graag over de implementatie van features. Ik ben vooral sterk in backend talen zoals C# en Java maar frontend applicaties maken doe ik ook graag. Ik ben plichtbewust, gemotiveerd en introvert maar tegelijktijdig kan ik ook zelf het initiatief nemen. <br /> <br />
                                   Een van mijn ambities is innovatie en meer kennis opdoen. Daarvoor is deze sector perfect maar ik wil ook mijn soft skills blijven verbeteren en groeien als persoon. <br /> <br />
                                   Een andere ambitie is het creëren van waarde. Tijdens mijn opleiding heb ik aan verschillende opdrachten gewerkt maar ook een paar projecten die volgens mij een meerwaarde zijn voor de samenleving, zoals het PRiSMA-project; een project rond het helpen stralen van jonge kinderen met autisme in het onderwijs. Alle projecten creëren waarde maar die waarde varieert van project tot project. In andere woorden, waar ik naar uitkijk in deze sector is de variatie en ook de mogelijkheid om de maatschappij te steunen. <br />
                                   Wat ik over een paar jaar wil bereiken is buiten het deels behalen van mijn ambities is evolueren van Junior Developer naar een volwaardige programmeur met mijn eigen specialisatie. Kennisoverdracht aan andere lijkt mij ook wel interessant om te doen. <br /> <br />
                                   Ik kan al applicaties maken in verschillende talen en frameworks. Ik kan ook projecten uitvoeren op een Agile Scrum manier in een team.  Wat ik nog zeker moet kunnen en zal ook doen is werken aan een groter project met een codebase die al langer bestaat. <br /> <br />
                               </p>
                           </div>
                    </div>
                </>
            )}
        </div>

        <div className={styles.grid}>
            <a
                className={styles.card}
                onClick={clickTimeline}
            >
                <h2 className={inter.className}>
                   Timeline <br/> activiteiten <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Een overzicht van alle activiteiten.
                </p>
            </a>
            <a
                className={styles.card}
                onClick={clickInnovatie}
            >
                <h2 className={inter.className}>
                    Innovatieroute<br/>UX/UI <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Verdiepen in de wereld van user experience.
                </p>
            </a>
            <a
                onClick={clickHackathon}
                className={styles.card}
            >
                <h2 className={inter.className}>
                    Hackathon Ergotherapie <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Een hackathon met een hart.
                </p>
            </a>
            <a
                onClick={clickCleanCode}
                className={styles.card}
            >
                <h2 className={inter.className}>
                    Cursus <br/> Clean Code <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Coderen kan ook clean.
                </p>
            </a>
        </div>
      </main>
    </>
  )
}
