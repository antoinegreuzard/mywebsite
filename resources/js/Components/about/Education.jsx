import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const educationContent = [
    {
        year: "2022 - Maintenant",
        degree: "Développeur web et intégrateur web",
        institute: "Freelance",
        details: `Je me lance dans le monde de l'entreprenariat en travaillant pour des agences web.`,
    }
];

const Education = () => {
    return (
        <ul>
            {educationContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <i><FontAwesomeIcon icon={faBriefcase} /></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">{val.year}</span>
                    <h3 className="poppins-font text-uppercase">
                        {val.degree}
                        <span className="place open-sans-font"> {val.institute}</span>
                    </h3>
                    <p className="open-sans-font">{val.details}</p>
                </li>
            ))}
        </ul>
    );
};

export default Education;
