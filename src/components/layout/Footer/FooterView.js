import React from 'react';
import PropTypes from 'prop-types';

import '../../../scss/components/layout/footer/footer.scss';

export default function FooterView({ footerSocials, footerAbout }) {
  return (
    <footer id="leaveAmessage">
      <div className="container">
        <div className="footer-block separator">
          <form className="footer-block-message-form">
            <h2>Leave a Message</h2>
            <div className="footer-block-message-form-inputs">
              <input required name="message-name" type="text" placeholder="Name*" />
              <input required name="message-email" type="email" placeholder="Email*" />
              <input required name="message-subject" type="text" placeholder="Subject*" />
            </div>
            <textarea required name="message-message" cols="30" rows="10" />
            <button type="button">hire me!</button>
          </form>
          <ul className="footer-block-about">
            {
                            footerAbout.map((item) => (
                              <li key={item.title}>
                                <div className={`footer-block-about-ico ico-custom ico-${item.ico}`} />
                                <div className="footer-block-about-info">
                                  <span>{item.title}</span>
                                  <p>{item.text}</p>
                                </div>
                              </li>
                            ))
                        }
          </ul>
        </div>
        <ul className="footer-block-socials">
          {
                        footerSocials.map(({ className, href }) => (
                          <li key={className}>
                            <a
                              className={`ico-social ${className}`}
                              rel="noopener noreferrer"
                              href={href}
                              target="_blank"
                            >
                              &nbsp;
                            </a>
                          </li>
                        ))
                    }
        </ul>
        <p className="footer-block-copyright">
                    Copyright: Junaed Ahmed, All rights reserved
        </p>
      </div>
    </footer>
  );
}

FooterView.propTypes = {
  footerSocials: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ),
  footerAbout: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  )
};

FooterView.defaultProps = {
  footerSocials: [
    {
      className: 'ico-skype',
      href: '//#'
    }
  ],
  footerAbout: [
    {
      ico: 'home',
      title: 'Location',
      text: '324, Golden Tower, Amborkhana, Sylhet'
    }
  ]
};
