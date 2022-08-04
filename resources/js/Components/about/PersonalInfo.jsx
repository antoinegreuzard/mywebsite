import React from "react";

const personalInfoContent = [
    {meta: "Prénom", metaInfo: "Antoine"},
    {meta: "Nom de famille", metaInfo: "Greuzard"},
    {meta: "Âge", metaInfo: "25 ans"},
    {meta: "Nationnalité", metaInfo: "Français"},
    {meta: "Freelance", metaInfo: "Disponible"},
    {meta: "Téléphone", metaInfo: "06 59 63 15 91"},
    {meta: "E-mail", metaInfo: "antoine@greuzard-communication.fr"},
];

const PersonalInfo = () => {
    return (
        <ul className="about-list list-unstyled open-sans-font">
            {personalInfoContent.map((val, i) => (
                <li key={i}>
                    <span className="title">{val.meta}: </span>
                    <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
                </li>
            ))}
        </ul>
    );
};

export default PersonalInfo;
