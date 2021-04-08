import React from 'react'
import twitter from './contact-img/images/twitter.png'
import instagram from './contact-img/images/instagram.png'
import linkedin from './contact-img/images/linkedin.png'
import facebook from './contact-img/images/facebook.png'
import github from './contact-img/images/github.png'
import contacts from './contacts.png'
import './contacts.css'
const Contacts = ()=>
{
    function showContacts()
    {
        let hiddenContacts  = document.querySelector(".hidden-contact-list");

        hiddenContacts.classList.toggle("visible-contact-list")

    }


    return(
        <>
                <div className="hidden-contacts toggle-contact-btn" onClick={showContacts}><img src={contacts} alt="contacts"/></div>
                <div className="hidden-contact-list">
                    <div className="contact-item linked-in">
                            <img src={linkedin} alt="linkedin"/>
                    </div>
                    <div className="contact-item instagram">
                        <img src={instagram} alt="instagram"/>
                    </div>
                    <div className="contact-item facebook">
                        <img src={facebook} alt="facebook"/>
                    </div>
                    <div className="contact-item twitter">
                        <img src={twitter} alt="twitter"/>
                    </div>
                    <div className="contact-item github">
                        <img src={github} alt="github"/>
                    </div>
                </div>    
                    <div className="contact-list">
                        <div className="contact-item linked-in"><img src={linkedin} alt="linkedin"/></div>
                        <div className="contact-item instagram"><img src={instagram} alt="instagram"/></div>
                        <div className="contact-item facebook"><img src={facebook} alt="facebook"/></div>
                        <div className="contact-item twitter"><img src={twitter} alt="twitter"/></div>
                        <div className="contact-item github"><img src={github} alt="github"/></div>
                    </div>
        </>
    )
}

export default Contacts