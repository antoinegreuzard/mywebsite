import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const experienceContent = [
    {
        year: "2021 - Maintenant",
        position: "Développeur web",
        compnayName: "Séquane",
        details: `Je travaille depuis avril chez Séquane, une agence de communication qui à deux pôles, web et print. Mes missions se situent dans le développement des sites internet, la gestion de projets, le SAV, la formation, etc.`,
    },
    {
        year: "2021",
        position: "Développeur web",
        compnayName: "ADaKa",
        details: `Pendant deux mois, j'ai travaillé comme développeur web et intégrateur web dans l'agence web & design ADaKa. J'ai eu la chance de travailler sur plusieurs projets web variés.`,
    },
    {
        year: "2016 - 2020",
        position: "Développeur web",
        compnayName: "IMS ON LINE",
        details: `Après avoir fini mes études, j’ai été accepté en tant que salarié chez IMS ON LINE. Mes missions étaient la maintenance, le développement, le référencement de site internet, mais aussi la gestion de la hotline et le suivi des projets. J’ai aussi pu aider des clients en tant que technicien sur leur poste.`,
    },
];

const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <i><FontAwesomeIcon icon={faBriefcase} /></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">{val.year}</span>
                    <h3 className="poppins-font text-uppercase">
                        {val.position}
                        <span className="place open-sans-font"> {val.compnayName}</span>
                    </h3>
                    <p className="open-sans-font"> {val.details}</p>
                </li>
            ))}
        </ul>
    );
};

export default Experience;
