import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'


const Address = () => {
    return (
        <>
            <p className="open-sans-font">Antoine Greuzard
                <br/>SIREN : 903661205
                <br/>TVA : FR79903661205
                <br/>RCS : 903 661 205 R.C.S. Besançon
            </p>
            <p className="open-sans-font mb-4 mt-3">Hébergeur : <br/>IONOS SARL <br/>7, place de la Gare BP 70109 <br/>57200
                Sarreguemines Cedex France <br/>0970 808 911</p>
			<p><a className ="preview-link" href="https://antoinegreuzard.fr/politiquedeconfidentialite.pdf" target="_blank">Politique de confidentialité</a></p>
            <p className="open-sans-font custom-span-contact position-relative">
                <i className="position-absolute"><FontAwesomeIcon icon={faMap} /></i>
                <span className="d-block">Mon adresse</span>42 rue de l'étang 2560 Frasne
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="position-absolute"><FontAwesomeIcon icon={faEnvelope} /></i>
                <span className="d-block">me contacter</span>{" "}
                <a href="mailto:antoine@greuzard-communication.fr">antoine@antoinegreuzard.fr</a>
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="position-absolute"><FontAwesomeIcon icon={faPhoneSquare} /></i>
                <span className="d-block">m'appeler</span>{" "}
                <a href="tel:0659631591">06 59 63 15 91</a>
            </p>
            {/* End .custom-span-contact */}
        </>
    );
};

export default Address;
