import { useState, useEffect } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";
import Image from 'next/image';
import portfolioImg from "../../assets/images/portfolio.png";
import stripelogo from "../../assets/images/stripeLogo.png";
import carousel from "../../assets/images/carousel.png";
import analyzeFeelings from "../../assets/images/analyze-feelings.png";
import stream from "../../assets/images/stream.png";
import youtube from "../../assets/images/youtube.png";
import imageGeneration from "../../assets/images/imageGeneration.png";
import catalogo from "../../assets/images/catalogo.png";
import ytmp3 from "../../assets/images/ytmp3.png";
import ytmp4 from "../../assets/images/ytmp4.png";
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
                      <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React</span>
                      <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Styled-components</span>
                    </div>
                    <h2 className="item-h2">Portfolio</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
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
                        <span style={{ margin: "0 10px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js e Express.js</span>
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
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/carousel">
                <Image src={carousel} />
                <div className="item">
                  <div className="sub-item">
                    <div>
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React</span>
                      <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Next.js</span>
                      <span style={{ margin: "0 8px 0 8px", padding: "0 5px 0 5px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>styled-components</span>
                    </div>
                    <h2 className="item-h2">Carousel</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/dataAnalysis">
                <Image src={analyzeFeelings} />
                <div className="item">
                  <div className="sub-item">
                    <div className="tech">
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js e Express</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Puppeteer</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Puppeteer-Extra</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>OpenAI API</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Frontend (HTML, CSS, JavaScript)</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>dotenv</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Heroku</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>archiver</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>unzipper</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>OpenAI</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>path</span>
                    </div>
                    <h2 className="item-h2">data analysis tedency</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/streamDolby">
                <Image src={stream} />
                <div className="item">
                  <div className="sub-item">
                    <div className="tech">
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> Node.js e Express</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Millicast API</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>EJS</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>HTML/CSS</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>GraphQL</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>dotenv</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>axios e https</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>open</span>
                    </div>
                    <h2 className="item-h2">Live Broadcast Control and Viewing System</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/imageGenerator">
                <Image src={imageGeneration} />
                <div className="item">
                  <div className="sub-item">
                    <div className="tech">
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML5</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>CSS3</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>JavaScript</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Backend</span>
                    </div>
                    <h2 className="item-h2">Enlarged View Image Generator</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/youtube">
                <Image src={youtube} />
                <div className="item">
                  <div className="sub-item">
                    <div className="tech">
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React.js</span>
                    </div>
                    <h2 className="item-h2">Custom Video Player</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/catalogo">
                <Image src={catalogo} />
                <div className="item">
                  <div className="sub-item">
                    <div className="tech">
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> React.js</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>CSS</span>
                    </div>
                    <h2 className="item-h2">catalog</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/ytformp3">
                <Image src={ytmp3} />
                <div className="item">
                  <div className="sub-item">
                    <div className="tech">
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML e CSS</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Node.js</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Express</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>@distube/ytdl-core</span>
                    </div>
                    <h2 className="item-h2">Download de Áudio do YouTube</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-item">
              <Link href="/projetos/ytformp4">
                <Image src={ytmp4} />
                <div className="item">
                  <div className="sub-item">
                    <div className="tech">
                      <h1 className="item-h1" style={{ display: "inline" }}>Tech:</h1>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}> HTML e CSS</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Node.js</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>Express</span>
                      <span style={{ marginRight: "3px", backgroundColor: "#e4e7eb", color: "#52606D", borderRadius: "5px" }}>@distube/ytdl-core</span>
                    </div>
                    <h2 className="item-h2">Download de Vídeo do YouTube</h2>
                    <p className="item-p">estudos e aprendizado</p>
                    <p>⭐⭐⭐⭐⭐ 🚀</p>
                  </div>
                </div>
              </Link>
            </div>
          </GridContainer>
        </Container>
      </Main>
    </div>
  );
};

export default Projetos;