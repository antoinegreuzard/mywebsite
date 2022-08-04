import React from "react";

const Address = () => {
    return (
        <>
            <p class="open-sans-font">Antoine Greuzard
                <br/>SIREN : 903661205
                <br/>TVA : FR79903661205</p>
            <p class="open-sans-font mb-4 mt-3">Hébergeur : <br/>IONOS SARL <br/>7, place de la Gare BP 70109 <br/>57200
                Sarreguemines Cedex France <br/>0970 808 911</p>
            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-map position-absolute"></i>
                <span className="d-block">Mon adresse</span>42 rue de l'étang 2560 Frasne
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-envelope-open position-absolute"></i>
                <span className="d-block">me contacter</span>{" "}
                <a href="mailto:antoine@greuzard-communication.fr">antoine@antoinegreuzard.fr</a>
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-phone-square position-absolute"></i>
                <span className="d-block">m'appeler</span>{" "}
                <a href="tel:0659631591">06 59 63 15 91</a>
            </p>
            {/* End .custom-span-contact */}
        </>
    );
};

export default Address;
