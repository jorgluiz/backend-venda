import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";

import { Container, P, H3, Li, Ul, H4, A } from "./styles";

const Ytformp3 = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isToggleOpen01, setIsToggleOpen01] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
      <Main>
        <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
        <Container>
          <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>🎥 Projeto de Download de Áudio do YouTube</H3>
          <P>
            <a href="https://yt-download-mp3-frontend-d80c3323b80c.herokuapp.com" target="_blank">direcionar para página</a>
          </P>
          <H3>Observação importante: para ter acesso backend, precisa ativar ngrok localmente!</H3>
          {isToggleOpen01 && (
            <>
              <div>
                <H4>📄 Descrição do Projeto</H4>
                <P>Este projeto é uma aplicação backend desenvolvida com Node.js e Express, que permite aos usuários baixar o áudio de vídeos do YouTube no formato MP3. Ele é projetado para oferecer uma experiência rápida e amigável, com suporte a metadados como título e thumbnail do vídeo.</P>
                <H4>🛠️ Tecnologias Utilizadas</H4>
                <P><strong>Frontend:</strong></P>
                <Ul>
                  <Li><strong>Download de Áudio:</strong> Transforma vídeos do YouTube em arquivos MP3 prontos para download.</Li>
                  <Li><strong>Metadados Incluídos:</strong> O título do vídeo e a imagem da thumbnail são incorporados como cabeçalhos personalizados na resposta.</Li>
                  <Li><strong>Validação de URL:</strong> Verifica se a URL fornecida é válida antes de iniciar o download.</Li>
                  <Li><strong>Filtro de Qualidade:</strong> Seleciona automaticamente o melhor formato de áudio disponível.</Li>
                  <Li><strong>Suporte a Cookies:</strong> Utiliza cookies armazenados localmente para acessar conteúdos restritos, se necessário.</Li>
                  <Li><strong>Interface de Carregamento:</strong> Um círculo animado é exibido para indicar o progresso do download.</Li>
                </Ul>
                <H4>💻 Tecnologias Utilizadas</H4>
                <P><strong>Backend:</strong></P>
                <Ul>
                  <Li><strong>Node.js:</strong> Ambiente de execução para JavaScript no servidor.</Li>
                  <Li><strong>Express:</strong> Framework para criação de APIs robustas e flexíveis.</Li>
                  <Li><strong>@distube/ytdl-core:</strong> Biblioteca para manipulação e extração de vídeos do YouTube.</Li>
                </Ul>
                <H4>Configuração e Utilitários:</H4>
                <Ul>
                  <Li><strong>dotenv</strong> Gerenciamento de variáveis de ambiente.</Li>
                  <Li><strong>fs:</strong> Manipulação de arquivos locais.</Li>
                  <Li><strong>CORS:</strong> Controle de acesso para origens externas.</Li>
                </Ul>
                <H4>Estilização:</H4>
                <Ul>
                  <Li><strong>HTML e CSS:</strong> Utilizados para criar uma interface simples e responsiva.</Li>
                </Ul>
                <P><strong>🚀 Projeto de Download de Áudio do YouTube com Frontend e Backend Integrados
                  Desenvolvi um projeto de download de áudio do YouTube utilizando YTDL-Core. Inicialmente, hospedei tanto o frontend quanto o backend no Heroku, mas enfrentei um grande desafio:
                  🔴 Erro ao baixar o áudio: "UnrecoverableError: Sign in to confirm you’re not a bot" – mesmo com cookies, o download não funcionava.</strong></P>
                <P><strong>💡 Solução:
                  Decidi dividir a aplicação. O frontend permaneceu no Heroku, e o backend foi executado localmente, utilizando o Ngrok para criar um túnel reverso, permitindo que o frontend acessasse o backend via internet.</strong></P>
                <P><strong>✅ Resultado:
                  O problema foi solucionado, e agora consigo realizar downloads de áudio de qualquer vídeo, independentemente do tamanho.</strong></P>
                <P><strong>⚠️ Limitação: A versão gratuita do Ngrok oferece um limite de 1TB de transferência de dados.

                  Este projeto me desafiou a encontrar alternativas para contornar restrições de servidores e autenticações, ampliando minha experiência em deploy e soluções criativas em ambientes de hospedagem.</strong></P>
              </div>
            </>
          )}
        </Container>
      </Main>
    </div>
  );
};

export default Ytformp3;