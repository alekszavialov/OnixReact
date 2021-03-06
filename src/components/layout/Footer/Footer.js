import React, { Component } from 'react';
import FooterView from './FooterView';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerSocials: [
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
      ],
      footerAbout: [
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
      ],
    };
  }

  render() {
    const { footerSocials, footerAbout } = this.state;
    return (
      <FooterView footerSocials={footerSocials} footerAbout={footerAbout} />
    );
  }
}
