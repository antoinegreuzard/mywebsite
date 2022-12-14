import React from "react";
import CloseImg from "../../../../img/cancel.svg";
import PortfolioData from "../portfolioData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink, faFile, faUser, faCode} from '@fortawesome/free-solid-svg-icons'

const Modal = ({modalId, setGetModal}) => {
    if (modalId >= 1) {
        return (
            <div className="modal_portfolio ">
                <div
                    className="modal__outside"
                    onClick={() => setGetModal(false)}
                ></div>
                <div></div>
                <div className="modal__content">
                    {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                        return (
                            <div key={item.id} data-aos="fade">
                                <h2 className="heading mb-2">{item.type}</h2>
                                <div className="modal__details">
                                    {item.modalDetails.map((details, i) => {
                                        return (
                                            <div key={i} className="row open-sans-font">
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="pr-2"><FontAwesomeIcon icon={faFile}/></i>
                                                    Projet :{" "}
                                                    <span className="ft-wt-600 uppercase">{details.projet}</span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="pr-2"><FontAwesomeIcon icon={faUser}/></i>
                                                    Client :{" "}
                                                    <span className="ft-wt-600 uppercase">{details.client}</span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="pr-2"><FontAwesomeIcon icon={faCode}/></i>
                                                    Langage :{" "}
                                                    <span className="ft-wt-600 uppercase">{details.langage}</span>
                                                </div>
                                                <div className="col-12 col-sm-6 mb-2">
                                                    <i className="pr-2"><FontAwesomeIcon icon={faLink}/></i>
                                                    Lien :{" "}
                                                    <a className="preview-link" target="_blank"
                                                       rel="noopener noreferrer nofollow" href={details.link}>
                                                        {details.lien}
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <figure className="modal__img">
                                    <img src={item.image} alt={item.type}/>
                                </figure>

                                <button
                                    className="close-modal"
                                    onClick={() => setGetModal(false)}
                                >
                                    <img src={CloseImg} alt="fermer"/>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Modal;
