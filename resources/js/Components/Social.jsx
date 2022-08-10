import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

const SocialShare = [
    {
        iconName: faLinkedinIn,
        link: "https://fr.linkedin.com/in/antoine-greuzard",
    },
    {
        iconName: faGithub,
        link: "https://github.com/antoinegreuzard",
    }
];

const Social = () => {
    return (
        <ul className="social list-unstyled pt-1 mb-5">
            {SocialShare.map((val, i) => (
                <li key={i}>
                    <a href={val.link} target="_blank" rel="noreferrer">
                        <i><FontAwesomeIcon icon={val.iconName}/></i>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Social;
