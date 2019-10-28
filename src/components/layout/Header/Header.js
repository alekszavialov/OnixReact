import React, { useState } from 'react';
import HeaderView from './HeaderView';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuListClass = menuIsOpen ? 'open' : 'hidden';
  return (
    <HeaderView
      toggleMenu={() => setMenuIsOpen(!menuIsOpen)}
      menuListClass={menuListClass}
    />
  );
}
