import { useState } from 'react';
import Image from 'next/image';
import perfil from '../../../assets/images/perfil.jpeg';
import Link from 'next/link';

import { Containerfixed, Container, Menu, XContainer, Bar, DiagonalOne, DiagonalTwo } from './styles';

const SideBar = ({ isHamburguerOpen, setIsHamburguerOpen }) => {
  const [activeLink, setActiveLink] = useState('/'); // Estado para armazenar o link ativo

  return (
    <Containerfixed isHamburguerOpen={isHamburguerOpen}>
      {isHamburguerOpen &&
        <XContainer onClick={() => setIsHamburguerOpen(!isHamburguerOpen)}>
          <DiagonalOne />
          <DiagonalTwo />
        </XContainer>
      }
      <Container>
        <Link href="/">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "solid 2px #243b53", borderRadius: '50%', width: "160px", height: "160px", marginTop: "40px" }}>
            <Image src={perfil} width={150} height={150} style={{ borderRadius: '50%' }} />
          </div>
        </Link>
        <h3 style={{ color: "#d1dfed" }}>Jorge Luiz de Medeiros e Silva Jr</h3>
        <p style={{ color: "#bcccdc", fontSize: "20px" }}>Web Developer</p>
        <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "20px" }}></div>
        <Menu>
          <ul>
            <li>
              <Link href="/projetos">
                <span onClick={() => setActiveLink('/projetos')} className={activeLink === '/projetos' ? 'active' : ''}>Projetos</span>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <span onClick={() => setActiveLink('/sobre')} className={activeLink === '/sobre' ? 'active' : ''}>Sobre</span>
              </Link>
            </li>
          </ul>
        </Menu>
        <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "20px" }}></div>
      </Container>
    </Containerfixed>
  );
};

export default SideBar;