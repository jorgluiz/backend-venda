import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";

import { Container, P, H3, Li, Ul, H4, A } from "./styles";

const Portfolio = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isToggleOpen01, setIsToggleOpen01] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
      <Main>
        <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
        <Container>
          <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>Projeto: Player de Vídeo Personalizado</H3>
          <P>
            <a href="https://portfolio-work-developed-d98bf30e877e.herokuapp.com/video" target="_blank">direcionar para página</a>
          </P>
          {isToggleOpen01 && (
            <>
              <div>
                <H4>Descrição Geral</H4>
                <P>Este projeto é um player de vídeo completo e interativo, desenvolvido com React.js, com funcionalidades que replicam a experiência imersiva de grandes plataformas de streaming, como YouTube e Netflix. Focado na facilidade de uso e personalização, ele oferece controle de volume, barra de progresso interativa, reprodução em lista (playlist) e configurações personalizáveis de qualidade e velocidade.</P>
                <H4>Objetivo</H4>
                <P>Criar uma experiência de reprodução de vídeo otimizada e acessível, com ênfase em uma interface de usuário <strong>(UI)</strong> intuitiva e interativa. Este player foi projetado para permitir uma navegação suave e intuitiva, enquanto oferece ao usuário controle total sobre a reprodução e personalização de sua experiência.</P>
                <H4>1. Principais Funcionalidades</H4>
                <Ul>
                  <Li>Botões de play/pause, avançar para o próximo vídeo e repetir.</Li>
                  <Li>Transição suave entre vídeos da playlist.</Li>
                </Ul>
                <H4>2. Barra de Progresso Personalizada</H4>
                <Ul>
                  <Li>Permite ao usuário arrastar o playhead para avançar ou retroceder.</Li>
                  <Li>Exibe tempo atual e duração total, com indicadores de horas, minutos e segundos.</Li>
                </Ul>
                <H4>3. Controle de Volume Avançado</H4>
                <Ul>
                  <Li>Ajuste progressivo do volume com botão de mute e desmute.</Li>
                  <Li>Indicador visual do volume (volume baixo, médio e mudo), atualizado dinamicamente.</Li>
                </Ul>
                <H4>4. Modo Tela Cheia e Miniatura</H4>
                <Ul>
                  <Li>Alternância entre modos de tela cheia e minimizada.</Li>
                  <Li>Ícones personalizáveis para indicar o status.</Li>
                </Ul>
                <H4>5. Configurações Personalizáveis</H4>
                <Ul>
                  <Li>Opções para ajuste de qualidade, legendas e velocidade.</Li>
                  <Li>Interface para exibir o menu de configurações com controles intuitivos.</Li>
                </Ul>
                <H4>Comentários e Playlist</H4>
                <Ul>
                  <Li>Área para comentários abaixo do vídeo, criando um ambiente de interação.</Li>
                  <Li>Playlist interativa à direita para navegação rápida entre vídeos relacionados.</Li>
                </Ul>
                <H3>UI e UX</H3>
                <H4>Design Focado em Experiência do Usuário (UX)</H4>
                <Ul>
                  <Li><strong>Acessibilidade e Facilidade de Navegação:</strong> A interface é projetada para ser intuitiva, com botões bem posicionados e funcionalidades facilmente acessíveis.</Li>
                  <Li><strong>Experiência Visual e Interativa:</strong> Transições suaves e animações de hover que tornam o player visualmente agradável e responsivo às ações do usuário.</Li>
                  <Li><strong>Layout Responsivo:</strong> Adaptado para uma experiência coesa em diferentes dispositivos, mantendo a estrutura organizada e eficiente em qualquer resolução.</Li>
                </Ul>
                <H4>Interface de Usuário (UI)</H4>
                <Ul>
                  <Li><strong>Estética Profissional e Minimalista:</strong> Elementos visuais inspirados em plataformas populares, com ícones claros e uma paleta de cores neutra.</Li>
                  <Li><strong>Elementos Interativos com Feedback Visual:</strong> Animações sutis e feedback imediato ao interagir com a barra de progresso, controles de volume e botões de reprodução.</Li>
                </Ul>
                <H3>Tecnologias Utilizadas</H3>
                <Ul>
                  <Li><strong>Frontend:</strong> React.js</Li>
                  <Li><strong>Funcionalidades de Vídeo:</strong> HTML5 Video API, com manipulação de eventos (onMouseMove, onProgress, etc.)</Li>
                  <Li><strong>Estado e Controle de Contexto:</strong> Hooks personalizados e useRef para otimização de performance e gerenciamento do estado do player.</Li>
                  <Li><strong>Controle de Volume e Progresso:</strong> useState, onClick, onChange e onMouseDown para controle preciso das ações do usuário.</Li>
                </Ul>
              </div>
            </>
          )}
        </Container>
      </Main>
    </div>
  );
};

export default Portfolio;