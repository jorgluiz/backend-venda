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
          <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>Projeto: Carousel de Imagens com Controles Personalizados</H3>
          <P>
            <a href="https://carousel-kabum-c0fa13dbd64e.herokuapp.com/" target="_blank">direcionar para página</a>
          </P>
          {isToggleOpen01 && (
            <>
              <div>
                <P><strong>Visão Geral</strong></P>
                <P>Esse projeto implementa um carrossel de imagens responsivo e dinâmico que permite ao usuário navegar entre os slides, alternar entre play/pause, e ajustar a rotação automática das imagens.</P>
                <H3>Funcionalidades</H3>
                <Ul>
                  <Li><strong>Rotação Automática:</strong> O carrossel avança automaticamente após 7 segundos em cada slide. O tempo pode ser personalizado.</Li>
                  <Li><strong>Navegação Manual:</strong> Usuários podem navegar entre os slides utilizando botões de seta para anterior e próximo.</Li>
                  <Li><strong>Pausa e Retomada:</strong> Função de pausa para interromper a rotação automática e retomar quando desejado.</Li>
                  <Li><strong>Controle de Transição:</strong> Tempo de transição CSS controlado para uma navegação suave.</Li>
                  <Li><strong>Looping Infinito:</strong> O carrossel retorna ao início automaticamente quando chega ao último slide e vice-versa.</Li>
                </Ul>
                <H3>Tecnologias Utilizadas</H3>
                <Ul>
                  <Li><strong>React:</strong> Estrutura principal para o desenvolvimento do componente.</Li>
                  <Li><strong>Next.js:</strong>Framework utilizado para otimizar a renderização e facilitar o roteamento de imagens. </Li>
                  <Li><strong>styled-components:</strong> Estilização dinâmica dos componentes, garantindo consistência e reutilização de estilos.</Li>
                </Ul>
                <H3>Método de Renderização das Imagens</H3>
                <Ul>
                  <Li style={{ lineHeight: "28px" }}><strong>Importação com o Next.js Image Component:</strong> As imagens são renderizadas usando o componente Image do Next.js, que oferece carregamento otimizado, dimensionamento responsivo e um tempo de carregamento reduzido. Este método melhora o desempenho, garantindo que imagens não carregadas fora da tela sejam exibidas de maneira eficiente.</Li>
                </Ul>
                <H3>Trechos do Código</H3>
                <Ul>
                  <Li><strong>Início do Slider:</strong> Inicia a rotação das imagens usando um intervalo ajustável para definir o tempo de cada slide.</Li>
                  <Li><strong>Função de Pausa e Retomada:</strong> Permite ao usuário controlar manualmente o carrossel, interrompendo a rotação automática e retomando-a quando desejado.</Li>
                  <Li><strong>Controle de Transição:</strong> Utiliza um estado para controlar a transição entre slides e garantir uma navegação suave.</Li>
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