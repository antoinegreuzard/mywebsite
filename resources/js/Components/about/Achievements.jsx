import React from "react";

const achievementsContent = [
    {title: "6", subTitle1: "ans", subTitle2: "d'expérience"},
    {title: "80", subTitle1: "projets", subTitle2: "terminés"}
];

const Achievements = () => {
    return (
        <div className="row">
            {achievementsContent.map((val, i) => (
                <div className="col-6" key={i}>
                    <div className="box-stats with-margin">
                        <p className="poppins-font position-relative">{val.title}</p>
                        <p className="open-sans-font m-0 position-relative text-uppercase">
                            {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
