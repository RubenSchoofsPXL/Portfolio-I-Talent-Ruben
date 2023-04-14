import React from "react";
import styles from '@/styles/Home.module.css'


const CleanCode: React.FC = () => {
    return (
        <>
            <div className={styles.news}>
                <div className={styles.newsItems}>
                    <div className={styles.newsItemScreenshot2}>
                        <img src='/Portfolio-I-Talent-Ruben/assets/cleancode.png' width={500} /> <br/>
                        <p>
                            Foto Clean Code <br/>
                            Kantoor JIDOKA, Mechelen
                        </p>
                    </div>
                    <div className={styles.newsText2}>
                        <h1>Cursus Clean Code @ JIDOKA</h1>
                        <p>
                            Ik heb samen met twee andere stagiairs en twee JIDOKA-werknemers de Clean Code cursus gevolgd op kantoor Mechelen. Dit is een professionele cursus gegeven door Geert Guldentops, ook werknemer bij JIDOKA. De cursus wordt gegeven aan niet alleen alle werknemers maar ook stagiairs en klanten. Volgers van de cursus krijgen op het einde een certificaat. <br/> <br/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CleanCode;