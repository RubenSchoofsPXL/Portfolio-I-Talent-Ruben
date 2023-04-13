import React from "react";
import styles from '@/styles/Home.module.css'


const Hackathon: React.FC = () => {
    return (
        <>
            <div className={styles.news}>
                <div className={styles.newsItems}>
                    <div className={styles.newsItemScreenshot}>
                        <img src='/assets/screenshot1.png' width={700} height={260} /> <br/>
                        <p>
                            Pagina voor wiskundige berekingen
                        </p> < br/>
                    </div>
                    <div className={styles.newsText}>
                        <h1>Hackathon Ergotherapie</h1>
                        <p>
                            Tijdens de hackathon Ergotherapie en Healthcare heb ik met mijn team een opdracht uitgevoerd voor de studenten Benno Smeets en Mathijs van Laeken. Zij zoeken naar een prototype applicatie voor leerlingen van de lagere en middelbare school met een beperking in de klas. Dit kunnen kinderen zijn met autisme of een motorische beperking. Het prototype zou de kinderen moeten ondersteunen met wiskundevakken in de klas omdat acties zoals een meetlat gebruiken niet evident voor hen is. Op basis van mock ups en doelstellingen kon mijn team aan de slag. <br/> <br/>
                            Het doel voor het einde van de tweede dag was het prototype presenteren aan de studenten en aantonen dat het een waardevolle applicatie is waarmee de twee aan de slag kunnen gaan. Voor hun studies gaan ze met de prototypes gebruiken resultaten verzamelen zoals feedback en tevredenheid in klaslokalen met de doelgroep. <br/> <br/>
                            Voor de opdracht heeft het team een taakverdeling opgesteld; Maarten Smeets zorgt voor het opzetten van de applicatie met Docker, Viktor Ladang maakt inloggen mogelijk met authenticatie, Kieran Marien houdt zich bezig met het inlezen van pdf’s, Dennis Vermesen is verantwoordelijk voor de tekenpagina en ik voor de pagina met wiskundige berekeningen. <br/> <br/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hackathon;