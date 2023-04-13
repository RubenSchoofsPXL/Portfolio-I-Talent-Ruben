import React from "react";
import styles from '@/styles/Home.module.css'

const Innovatieroute: React.FC = () => {
    return(
        <>
            <div className={styles.news}>
                <div className={styles.newsItems}>
                    <div className={styles.newsItem}>
                        <img src='/assets/wisemen.png' width={100} height={100} /> <br/>
                        <p>
                            Wisemen
                        </p> <br/>
                        <a href='https://www.linkedin.com/company/wisemen-digital/' target='_blank'>
                            <img src='/assets/link.png' width={75} height={75}  />
                        </a>
                    </div>
                    <div className={styles.newsText}>
                        <h1>Innovatieroute UX/UI</h1>
                        <p>
                            Tijdens de innovatieroute UI/UX heb ik meerdere sessies over UI/UX design gevolgd. De eerste sessie werd gegeven door Shana Houben en Brecht Sluismans van Wiseman. Deze sessie was puur theoretisch en zal ik dus niet in detail bespreken. <br /> <br />
                            De volgende twee sessies waren gegeven door Lonneke Spinhof en Renco Tampère van Humix en Christoph Van Ochten van Appfoundry. Naast theorie zoals het verschil tussen UI en UX was de grote focus van de twee sessies een groepsopdracht met als resultaat een pitch waarbij de groep een oplossing moet voorstellen. <br/> <br />
                            Elk team moest een onderwerp/thema bedenken waar ze een oplossing wou voor ontwerpen. De oplossing is voor deze opdracht een mock-up of prototype. De groepen presenteren deze dus met de pitch. <br/> <br />
                            Een goed resultaat behalen is mogelijk door de geziene concepten en theorie rond UI, UX en meer toe te passen tijdens de groepsopdracht. De gebruikte tools voor de opdracht zijn Miro en Figma. <br/> <br />
                        </p>
                    </div>
                    <div className={styles.newsItem}>
                        <img src='/assets/humix.png' width={100} height={100} /> <br/>
                        <p>
                            Humix
                        </p> <br/>
                        <a href='https://www.linkedin.com/company/humix/' target='_blank'>
                            <img src='/assets/link.png' width={75} height={75}  />
                        </a>
                    </div>
                    <div className={styles.newsItem}>
                        <img src='/assets/appfoundry.png' width={100} height={100} /> <br/>
                        <p>
                            AppFoundry
                        </p> <br/>
                        <a href='https://www.linkedin.com/company/appfoundry/' target='_blank'>
                            <img src='/assets/link.png' width={75} height={75}  />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Innovatieroute;