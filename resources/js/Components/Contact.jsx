import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "template_a3i5zdh",
                form.current,
                "qJrW1552V7WB1u1Px"
            )
            .then(
                (result) => {
                    toast.success("Message envoyé !", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    document.getElementById("myForm").reset();
                },
                (error) => {
                    toast.error("Erreur...", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            );
    };

    return (
        <>
            <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="VOTRE NOM" required/>
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="VOTRE E-MAIL"
                                required
                            />
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="VOTRE SUJET"
                                required
                            />
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                        <div className="form-group">
              <textarea
                  name="message"
                  placeholder="VOTRE MESSAGE"
                  required
              ></textarea>
                        </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                        <button type="submit" className="button">
                            <span className="button-text">ENVOYER</span>
                            <span className="button-icon"><FontAwesomeIcon icon={faPaperPlane} /></span>
                        </button>
                    </div>
                    {/* End .col */}
                </div>
            </form>
        </>
    );
};

export default Contact;
