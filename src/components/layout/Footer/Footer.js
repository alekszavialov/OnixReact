import React, { useState } from 'react';
import FooterView from './FooterView';

export default function Footer() {
  const [footerSocials] = useState([
    {
      className: 'ico-twitter',
      href: '//#'
    },
    {
      className: 'ico-skype',
      href: '//#'
    },
    {
      className: 'ico-dribble',
      href: '//#'
    }
  ]);
  const [footerAbout] = useState([
    {
      ico: 'home',
      title: 'Location',
      text: '324, Golden Tower, Amborkhana, Sylhet'
    },
    {
      ico: 'email',
      title: 'email',
      text: 'junaed@deviserweb.com'
    },
    {
      ico: 'phone',
      title: 'toll free call',
      text: '0800 234 5578'
    },
  ]);

  return (
    <FooterView footerSocials={footerSocials} footerAbout={footerAbout} />
  );
}
