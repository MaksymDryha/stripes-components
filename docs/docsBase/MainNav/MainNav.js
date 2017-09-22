import React from 'react';

import css from './MainNav.css';
import NavButton from './NavButton';
import NavDivider from './NavDivider';
import NavGroup from './NavGroup';
import Breadcrumbs from './Breadcrumbs';
import NavIcon from './NavIcon';

import Dropdown from '../../../lib/Dropdown';
import NavDropdownMenu from './NavDropdownMenu';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMenuOpen: false,
    };

    this.toggleUserMenu = this.toggleUserMenu.bind(this);
  }

  toggleUserMenu() {
    const isOpen = this.state.userMenuOpen;
    this.setState({
      userMenuOpen: !isOpen,
    });
  }

  render() {
    const userIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26">
      <rect width="26" height="26" style={{ fill: '#3D9964' }} />
      <path d="M1.1 24.9c0 0 0-2.6 0.8-3.7 0.8-1 5.8-5.2 11.1-5.1s9.9 3.1 10.9 4.4 1.1 4.4 1.1 4.4L1.1 24.9z" style={{ fill: '#FFF' }} />
      <path d="M18.6 11.4c0 4.2-2.5 7.6-5.6 7.6 -3.1 0-5.6-3.4-5.6-7.6S8.4 3.8 13 3.8 18.6 7.2 18.6 11.4z" style={{ fill: '#FFF' }} />
      <path d="M13 19.5c-3.4 0-6.1-3.6-6.1-8.1 0-3.5 0.6-8.1 6.1-8.1 5.5 0 6.1 4.6 6.1 8.1C19.1 15.9 16.4 19.5 13 19.5zM13 4.3c-3.6 0-5.1 2.1-5.1 7.1 0 3.9 2.3 7.1 5.1 7.1 2.8 0 5.1-3.2 5.1-7.1C18.1 6.5 16.6 4.3 13 4.3z" style={{ fill: '#3D9964' }} />
    </svg>
    );

    const userDD = (
      <ul><li className={`${css.nowrap} ${css.ddTextItem}`}>Logged in as <strong>James Whitcomb</strong></li>
        <li className={css.ddDivider} aria-hidden="true" />
        <li><button className={css.ddButton} type="button" onClick={this.toggleUserMenu}><span>Log out</span></button></li>
        <li><a className={css.ddLink} onClick={this.toggleUserMenu} href="#"><span>Test Link</span></a></li>
        <li><a className={css.ddLink} onClick={this.toggleUserMenu} href="#"><span>Test Link</span></a></li>
      </ul>
    );
    const menuLinks = (
      <NavButton href="#" title="Users">
        <NavIcon color="#61f160" />
        <span>
          Users
        </span>
      </NavButton>
    );

    let firstNav;
    const breadcrumbArray = [];

    if (breadcrumbArray.length === 0) {
      firstNav = (
        <NavGroup md="hide">
          <NavButton href="#">
            <NavIcon color="#fdae35" />
            <span className={css.brandingLabel} style={{ fontSize: '22px' }}>FOLIO</span>
          </NavButton>
        </NavGroup>
      );
    } else {
      firstNav = (
        <NavGroup>
          <NavButton md="hide">
            <NavIcon color="#fdae35" />
          </NavButton>
          <Breadcrumbs linkArray={breadcrumbArray} />
        </NavGroup>
      );
    }

    return (
      <nav className={css.navRoot}>
        {firstNav}
        <NavGroup>
          <NavGroup>
            {menuLinks}
            <NavDivider md="hide" />
            <NavButton md="hide" ><NavIcon color="#7eb970" /></NavButton>
            <NavButton md="hide"><NavIcon color="#b33f3f" /></NavButton>
            <NavButton md="hide"><NavIcon color="#3fb38e" /></NavButton>
            <NavButton md="hide"><NavIcon color="#3f6cb3" /></NavButton>
            <NavDivider md="hide" />
            <NavButton md="hide"><NavIcon color="#7d3fb3" /></NavButton>
          </NavGroup>
          { /* <NavGroup className={css.smallAlignRight}>
             <Dropdown open={this.state.userMenuOpen} id="UserMenuDropDown" onToggle={this.toggleUserMenu} pullRight >
              <NavButton bsRole="toggle" title="User Menu" aria-haspopup="true" aria-expanded={this.state.userMenuOpen}><NavIcon icon={userIcon} /></NavButton>
              <NavDropdownMenu bsRole="menu" onToggle={this.toggleUserMenu} aria-label="User Menu">{userDD}</NavDropdownMenu>
            </Dropdown> 
          </NavGroup> */ }
        </NavGroup>
      </nav>
    );
  }
}

export default MainNav;
