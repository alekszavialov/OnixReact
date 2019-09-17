import React from 'react';
import PropTypes from 'prop-types';

footerView.propTypes = {
    footerSocials: PropTypes.array,
    footerAbout: PropTypes.array,
};

export default function footerView({footerSocials, footerAbout}) {

    return (
        <footer id="leaveAmessage">
            <div className="container">
                <div className="footer-block separator">
                    <form className="footer-block-message-form">
                        <h2>Leave a Mesage</h2>
                        <div className="footer-block-message-form-inputs">
                            <input required name="message-name" type="text" placeholder="Name*"/>
                            <input required name="message-email" type="email" placeholder="Email*"/>
                            <input required name="message-subject" type="text" placeholder="Subject*"/>
                        </div>
                        <textarea required name="message-message" cols="30" rows="10"/>
                        <button>hire me!</button>
                    </form>
                    <ul className="footer-block-about">
                        {
                            footerAbout.map(item =>
                                <li key={item.title}>
                                    <div className={`footer-block-about-ico ico-custom ico-${item.ico}`}/>
                                    <div className="footer-block-about-info">
                                        <span>{item.title}</span>
                                        <p>{item.text}</p>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <ul className="footer-block-socials">
                    {
                        footerSocials.map(item =>
                            <li key={item.className}>
                                <a
                                    className={`ico-social ${item.className}`}
                                    rel="noopener noreferrer"
                                    href="//#"
                                    target="_blank"
                                >
                                </a>
                            </li>
                        )
                    }
                </ul>
                <p className="footer-block-copyright">
                    Copyright: Junaed Ahmed, All rights reserved
                </p>
            </div>
        </footer>
    )


}