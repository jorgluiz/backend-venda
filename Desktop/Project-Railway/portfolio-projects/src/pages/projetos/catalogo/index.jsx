import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";

import { Container, P, H3, Li, Ul, H4 } from "./styles";

const Carousel = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isToggleOpen01, setIsToggleOpen01] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
      <Main>
        <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
        <Container>
          <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>Projeto: Catálogo de Carros (Catalogo)</H3>
          <P>
            <a href="https://portfolio-work-developed-d98bf30e877e.herokuapp.com/front-end/catalogo" target="_blank">direcionar para página</a>
          </P>
          {isToggleOpen01 && (
            <>
              <div>
                <P><strong>Visão Geral</strong></P>
                <P>Este projeto apresenta um catálogo interativo de carros, permitindo aos usuários explorar diferentes modelos, aprender sobre a empresa, e conhecer as características dos carros oferecidos. A interface foi projetada para ser moderna e intuitiva, com imagens e textos que destacam os produtos e a marca. O sistema de busca facilita a localização de modelos específicos, enquanto as seções informativas (sobre a empresa e suas funcionalidades) oferecem um panorama detalhado do serviço.</P>
                <H3>Funcionalidades e Fluxo da Aplicação</H3>
                <H4>1. Catálogo de Carros:</H4>
                <Ul>
                  <Li>Exibição de múltiplos carros com imagens e descrições.</Li>
                  <Li>Funcionalidade de filtro e busca para facilitar a localização de modelos específicos.</Li>
                  <Li>Botões de ação {'("I want this!")'} para interação com os carros.</Li>
                </Ul>
                <H4>{'Seção "Sobre":'}</H4>
                <Ul>
                  <Li>Descrição da empresa, destacando sua missão e visão.</Li>
                  <Li>Imagem da empresa e um parágrafo explicativo.</Li>
                </Ul>
                <H4>Recursos:</H4>
                <Ul>
                  <Li>Apresentação de funcionalidades do serviço oferecido, como opções de aluguel e contato com a empresa.</Li>
                  <Li>Cada recurso é ilustrado com uma imagem e uma descrição breve.</Li>
                </Ul>
                <H4>Interatividade e Estilo:</H4>
                <Ul>
                  <Li>Navegação fluida entre as seções do site.</Li>
                  <Li>Cabeçalho fixo com opções de navegação para facilitar o acesso às diferentes áreas do site.</Li>
                  <Li>Rodapé com informações sobre a empresa, links úteis e ícones de redes sociais.</Li>
                </Ul>
                <H3>Tecnologias Utilizadas:</H3>
                <Ul>
                  <Li><strong>React:</strong> Biblioteca JavaScript para construir interfaces de usuário interativas.</Li>
                  <Li><strong>CSS:</strong> Estilos personalizados para o design responsivo e atraente do catálogo.</Li>
                  <Li><strong>Imagens:</strong> Utilização de recursos visuais de alta qualidade para ilustrar os carros e as funcionalidades.</Li>
                </Ul>
                <H3>Destaques do Design:</H3>
                <Ul>
                  <Li><strong>Responsividade:</strong> A interface foi projetada para funcionar bem em dispositivos móveis e desktops, garantindo uma boa experiência de usuário em todas as telas.</Li>
                  <Li><strong>Estética Moderna:</strong> A escolha de imagens e o layout foram feitos para garantir uma apresentação limpa, agradável e fácil de navegar.</Li>
                  <Li><strong>Navegação Intuitiva:</strong> A estrutura de navegação foi pensada para garantir que os usuários encontrem facilmente as informações que procuram</Li>
                </Ul>
              </div>
            </>
          )}
        </Container>
      </Main>
    </div>
  );
};

export default Carousel;