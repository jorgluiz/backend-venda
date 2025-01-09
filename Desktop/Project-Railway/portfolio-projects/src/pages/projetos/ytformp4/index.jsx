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
          <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>🎥 Projeto de Download de Vídeo do YouTube</H3>
          <P>
            <a href="https://yt-download-mp3-frontend-d80c3323b80c.herokuapp.com" target="_blank">direcionar para página</a>
          </P>
          <H3>Observação importante: para ter acesso backend, precisa ativar ngrok localmente!</H3>
          {isToggleOpen01 && (
            <>
              <div>
                <H4>📄 Resumo para o Portfólio</H4>
                <P>Este projeto é uma aplicação <strong>full-stack</strong> que permite baixar e combinar vídeos e áudios do YouTube com as seguintes funcionalidades:</P>
                <Ul>
                  <Li><strong>Recuperação de metadados:</strong> Título, formatos disponíveis e thumbnail de um vídeo do YouTube.</Li>
                  <Li><strong>Processamento de mídia:</strong> Combinação de vídeo e áudio com qualidade configurável usando ffmpeg.</Li>
                  <Li><strong>Comunicação em tempo real:</strong> Progresso do processamento é exibido dinamicamente via Socket.IO.</Li>
                </Ul>
                <P><strong>Tecnologias utilizadas:</strong></P>
                <Ul>
                  <Li><strong>Backend:</strong> Node.js, Express, ytdl-core, fluent-ffmpeg, Socket.IO.</Li>
                  <Li><strong>Frontend:</strong> HTML, CSS.</Li>
                  <Li><strong>Outras ferramentas:</strong> uuid, cors, fs.</Li>
                </Ul>
                <P><strong>Diferenciais técnicos:</strong></P>
                <Ul>
                  <Li>Geração de arquivos de mídia em tempo real.</Li>
                  <Li>Uso de arquivos binários do ffmpeg para maior controle.</Li>
                  <Li>Suporte a múltiplas origens (CORS configurável).</Li>
                </Ul>
                <P>Esse projeto pode ser expandido para incluir suporte a múltiplos downloads simultâneos com filas, personalização da interface e integração com serviços de armazenamento em nuvem como AWS S3.</P>
                <h1>1. Estrutura do Backend</h1>
                <P><strong>Principais funcionalidades implementadas</strong></P>
                <Ul>
                  <Li><strong>yt-video-formats:</strong> Responsável por receber uma URL de vídeo do YouTube e retornar</Li>
                  <Li style={{ marginLeft: "10px" }}>Responsável por receber uma URL de vídeo do YouTube e retornar:</Li>
                  <Li style={{ marginLeft: "30px" }}>Formatos de vídeo disponíveis (resolvidos para qualidades únicas, exceto 1080p).</Li>
                  <Li style={{ marginLeft: "30px" }}>Thumbnail do vídeo (melhor qualidade disponível).</Li>
                  <Li style={{ marginLeft: "30px" }}>Título do vídeo sanitizado (removendo caracteres especiais).</Li>
                  <Li style={{ marginLeft: "10px" }}>Utiliza <strong style={{ backgroundColor: "#CECECE" }}>ytdl-core.</strong> para validação e recuperação de informações do vídeo.</Li>
                  <Li><strong>yt-download:</strong></Li>
                  <Li style={{ marginLeft: "10px" }}>Combina duas etapas principais:</Li>
                  <Li style={{ marginLeft: "30px" }}>1. <strong style={{ backgroundColor: "#CECECE" }}>ytVideoAduioDownload:</strong></Li>
                  <Li style={{ marginLeft: "40px" }}>Baixa o vídeo e o áudio em formatos separados usando <strong style={{ backgroundColor: "#CECECE" }}>ytdl-core.</strong></Li>
                  <Li style={{ marginLeft: "40px" }}>Garante que apenas uma requisição de download é processada por vez (<strong style={{ backgroundColor: "#CECECE" }}>isProcessing</strong>).</Li>
                  <Li style={{ marginLeft: "40px" }}>Salva os arquivos localmente em formato binário.</Li>
                  <Li style={{ marginLeft: "30px" }}>2. <strong style={{ backgroundColor: "#CECECE" }}>toCombineVideoAudio:</strong></Li>
                  <Li style={{ marginLeft: "40px" }}>Utiliza ffmpeg para combinar vídeo e áudio.</Li>
                  <Li style={{ marginLeft: "40px" }}>Envia o arquivo combinado ao cliente e remove os arquivos temporários.</Li>
                  <Li style={{ marginLeft: "40px" }}>Emite eventos de progresso para o cliente via Socket.IO.</Li>
                </Ul>
                <H4>Tecnologias e bibliotecas</H4>
                <Ul>
                  <Li><strong style={{ backgroundColor: "#CECECE" }}>ytdl-core:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>Para obter metadados e fazer download de vídeos do YouTube.</Li>
                  <Li style={{ marginLeft: "30px" }}>É necessário baixar os vídeos como binários para processamento posterior.</Li>
                  <Li><strong style={{ backgroundColor: "#CECECE" }}>fluent-ffmpeg:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>Integra <strong style={{ backgroundColor: "#CECECE" }}>ffmpeg</strong> ao Node.js, necessário para manipulação de vídeo e áudio.</Li>
                  <Li style={{ marginLeft: "30px" }}>o <strong style={{ backgroundColor: "#CECECE" }}>ffmpeg</strong> foi configurado com o caminho binário manualmente:</Li>
                  <Li>ffmpeg.<span style={{ color: "#4078f2", fontWeight: "700" }}>setFfmpegPath</span>(path.<span style={{ color: "#4078f2", fontWeight: "700" }}>resolve</span><span style={{ color: "#50a14f", fontWeight: "700" }}>("C:\\Users\\Dev\\Desktop\\ffmpeg-master-latest-win64-gpl-shared\\bin\\ffmpeg.exe"));</span></Li>
                  <Li style={{ marginLeft: "30px", listStyle: "none" }}>Essa configuração foi essencial, pois ffmpeg não é instalado globalmente no sistema, sendo usado de um diretório local.</Li>
                  <Li><strong style={{ backgroundColor: "#CECECE" }}>Socket.IO:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>Para comunicação em tempo real entre o cliente e o servidor.</Li>
                  <Li style={{ marginLeft: "30px" }}>Utilizado para enviar atualizações do progresso do processamento.</Li>
                </Ul>
                <H4>Pontos positivos</H4>
                <Ul>
                  <Li style={{ marginLeft: "30px" }}>O uso do isProcessing para evitar requisições simultâneas garante que o servidor não enfrente conflitos ao manipular arquivos temporários.</Li>
                  <Li style={{ marginLeft: "30px" }}>O tratamento de erros é robusto, com respostas adequadas para URLs inválidas, ausência de formatos ou falhas no processamento.</Li>
                  <Li style={{ marginLeft: "30px" }}>A remoção de arquivos temporários ao final do processamento impede o consumo desnecessário de espaço em disco.</Li>
                </Ul>
                <h1>2. Estrutura do Frontend</h1>
                <P><strong>Carregamento com Feedback Visual</strong></P>
                <Ul>
                  <Li>A animação de carregamento (#loadingContainer) fornece uma experiência de usuário fluida durante o processamento de vídeos.</Li>
                  <Li><strong>Características:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>Utiliza um círculo animado com transição de opacidade, o que torna a animação visualmente agradável.</Li>
                  <Li style={{ marginLeft: "30px" }}>Oculta o elemento carregador inicialmente com display: none.</Li>
                </Ul>
                <h1>3. Considerações sobre o Projeto</h1><br />
                <H3><strong>Pontos fortes</strong></H3>
                <Ul>
                  <Li><strong>Automatização de tarefas complexas:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>A combinação de vídeo e áudio usando ffmpeg é eficiente, permitindo resultados de alta qualidade.</Li>
                  <Li><strong>Uso de tecnologias modernas:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>Integração com Socket.IO oferece uma experiência interativa em tempo real.</Li>
                  <Li><strong>Desempenho:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>A configuração de <span style={{ color: "#4078f2", fontWeight: "700" }}>isProcessing</span> evita sobrecarga e garante o funcionamento estável do servidor.</Li>
                </Ul>
                <H4>Possíveis desafios</H4>
                <Ul>
                  <Li><strong>Limitações de desempenho em larga escala:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}> <span style={{ color: "red", fontWeight: "700" }}>Downloads simultâneos podem saturar o servidor.</span> Solução: Implementar filas de processamento (ex.: <span style={{ color: "#4078f2", fontWeight: "700" }}>bull</span> ou <span style={{ color: "#4078f2", fontWeight: "700" }}>kue</span>).</Li>
                  <Li><strong>Configuração do ffmpeg:</strong></Li>
                  <Li style={{ marginLeft: "30px" }}>O uso do caminho binário é necessário, mas pode ser um desafio em ambientes diferentes (ex.: Linux ou Docker). Uma alternativa seria incluir o binário diretamente no projeto e configurá-lo dinamicamente.</Li>
                </Ul>
                <P><strong>🚀 Projeto de Download de Áudio e Vídeo do YouTube com Frontend e Backend Integrados
                  Desenvolvi um projeto de download de vídeo do YouTube utilizando YTDL-Core. Inicialmente, hospedei tanto o frontend quanto o backend no Heroku, mas enfrentei um grande desafio:
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