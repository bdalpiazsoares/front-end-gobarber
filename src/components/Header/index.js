import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';

import logo from '~/assets/logo_purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard"> Dashboard </Link>
        </nav>
        <aside>
          <Profile>
            <Notifications />
            <div>
              <strong>Bernardo</strong>
              <Link to="/profile"> Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Bernardo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
