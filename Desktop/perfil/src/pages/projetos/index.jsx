import { useState, useEffect } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Image from 'next/image';
import portfolioImg from "../../assets/images/portfolio.png";
import stripelogo from "../../assets/images/stripeLogo.png";
import carousel from "../../assets/images/carousel.png";
import Link from "next/link";

import { GridContainer, Container } from "./styles";


const Projetos = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1250) {
        setIsHamburguerOpen(true); // Aberto para telas grandes
      } else {
        setIsHamburguerOpen(false); // Fechado para telas menores
      }
    };

    // Inicializa o estado correto com base no tamanho da tela ao carregar o componente
    handleResize();

    // Adiciona o evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsHamburguerOpen]);

  return (
    <div style={{ display: "flex" }}>
      <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
      <Main>
        <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
        <Container>
          <h1 style={{ color: "323f4b" }}>Oi! 👋</h1>
          <p style={{ fontSize: "20px", color: "323f4b", lineHeight: "32px" }}>Este portfólio é a culminação da minha jornada de aprendizado em desenvolvimento web e servidor, onde explorei as capacidades do ReactJS tanto no frontend e Express backend</p>
          <GridContainer>
            <div className="container-item">
              <Link href="/projetos/portfolio">
                <Image src={portfolioImg} />
                <div className="item">
                  <div className="sub-item">
                    <div>
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>React</span>
                      <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Styled-components</span>
                    </div>
                    <h2 className="item-h2">Portfolio</h2>
                    <p className="item-p">estudos e aprendizado</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/stripe">
                <Image src={stripelogo} />
                <div className="item">
                  <div className="sub-item">
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div>
                        <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      </div>
                      <div style={{ display: "block", margin: "auto 0" }}>
                        <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Node.js e Express.js</span>
                      </div>
                      <div style={{ display: "block", margin: "auto 0" }}>
                        <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>JWT</span>
                      </div>
                      <div style={{ display: "block", margin: "auto 0" }}>
                        <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Stripe</span>
                      </div>
                      <div>
                        <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Firebase</span>
                      </div>
                      <div>
                        <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Middleware e Cookie</span>
                      </div>
                      <div>
                        <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>dotenv</span>
                      </div>
                      <div>
                        <span style={{ margin: "10px 0 0 0", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>nodemon</span>
                      </div>
                    </div>
                    <h2 className="item-h2">Stripe</h2>
                    <p className="item-p">estudos e aprendizado</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Image src={carousel} />
              <div className="item">Div 3</div>
            </div>
            <div className="container-item">
              <Image src={portfolioImg} />
              <div className="item">Div 4</div>
            </div>
            <div className="container-item">
              <Image src={portfolioImg} />
              <div className="item">Div 4</div>
            </div>
            <div className="container-item">
              <Image src={portfolioImg} />
              <div className="item">Div 4</div>
            </div>
            <div className="container-item">
              <Image src={portfolioImg} />
              <div className="item">Div 4</div>
            </div>
            <div className="container-item">
              <Image src={portfolioImg} />
              <div className="item">Div 4</div>
            </div>
            <div className="container-item">
              <Image src={portfolioImg} />
              <div className="item">Div 4</div>
            </div>
          </GridContainer>
        </Container>
      </Main>
    </div>
  );
};

export default Projetos;