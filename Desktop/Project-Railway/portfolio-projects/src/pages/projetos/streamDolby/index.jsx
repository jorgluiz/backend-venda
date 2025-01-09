import { useState } from "react";
import Main from "@/components/layout/main";
import SideBar from "@/components/layout/sideBar";
import Header from "@/components/layout/header";

import { Container, P, H3, Li, Ul, H4, A } from "./styles";

const Stripe = () => {
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);
  const [isToggleOpen01, setIsToggleOpen01] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <SideBar isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></SideBar>
      <Main>
        <Header isHamburguerOpen={isHamburguerOpen} setIsHamburguerOpen={setIsHamburguerOpen}></Header>
        <Container>
          <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>Projeto: Sistema de Controle e Visualização de Transmissões ao Vivo</H3>
          <P>
            <a href="https://dolbyio-streaming-272abf7507d6.herokuapp.com/" target="_blank">direcionar para página</a>
          </P>
          {isToggleOpen01 && (
            <>

              <P><strong>Visão Geral</strong></P>
              <P>Este projeto foi desenvolvido para gerenciar e visualizar transmissões ao vivo de maneira dinâmica. Ele permite ao usuário iniciar, parar, visualizar e monitorar múltiplas transmissões em tempo real através de uma interface web amigável. Utilizando tecnologias como Millicast para streaming e Firebase para persistência de dados, o sistema é escalável e configurável, atendendo a diferentes necessidades de transmissão ao vivo.</P>
              <P><strong>Funcionalidades</strong></P>
              <Ul>
                <Li><strong>Controle de Transmissão: </strong> Criação e encerramento de transmissões ao vivo com gerenciamento completo de tokens para segurança.</Li>
                <Li><strong>Visualização em Tempo Real: </strong> Integração de uma interface de visualização ao vivo, onde espectadores podem acessar transmissões específicas usando URLs configuráveis.</Li>
                <Li><strong>Armazenamento e Recuperação de Dados: </strong> Persiste informações da transmissão, como nome do stream e tokens, usando Firebase.</Li>
                <Li><strong>Gestão de Tokens: </strong> Geração dinâmica de tokens para usuários específicos, permitindo controle de acesso a cada transmissão.</Li>
                <Li><strong>Monitoramento de Status: </strong> Utilização de uma API GraphQL para monitorar e listar o status de transmissões, como {'"ativa"'} e {'"finalizada"'}.</Li>
              </Ul>
              <P><strong>Tecnologias Utilizadas</strong></P>
              <P>Backend</P>
              <Ul>
                <Li><strong>Node.js e Express:</strong> Estrutura principal do servidor e gerenciamento de rotas.</Li>
                <Li><strong>Firebase:</strong> Persistência de dados para salvar informações de streams e tokens.</Li>
                <Li><strong>Millicast API:</strong> Gerenciamento de transmissão ao vivo com criação de tokens e controle de transmissões.</Li>
              </Ul>
              <P>Frontend</P>
              <Ul>
                <Li><strong>EJS:</strong> Motor de templates para renderização de páginas dinâmicas no servidor.</Li>
                <Li><strong>HTML/CSS:</strong> Estrutura e estilização das páginas de controle e visualização.</Li>
              </Ul>
              <P>Outras Tecnologias:</P>
              <Ul>
                <Li><strong>GraphQL:</strong> API para obter e monitorar dados em tempo real de transmissões.</Li>
                <Li><strong>dotenv:</strong> Gerenciamento de variáveis de ambiente para manter chaves seguras.</Li>
                <Li><strong>axios e https:</strong> Clientes HTTP para realizar requisições às APIs externas.</Li>
                <Li><strong>open:</strong> API para obter e monitorar dados em tempo real de transmissões.</Li>
              </Ul>
              <P><strong>Principais Bibliotecas e Dependências</strong></P>
              <Ul>
                <Li><strong>dotenv:</strong> Para configuração de variáveis de ambiente, mantendo chaves sensíveis fora do código-fonte.</Li>
                <Li><strong>express:</strong> Framework web para facilitar o gerenciamento do servidor.</Li>
                <Li><strong>body-parser:</strong> Analisa dados de requisições HTTP em JSON e URL-encoded.</Li>
                <Li><strong>axios:</strong> Cliente HTTP para requisições mais complexas e fáceis de configurar.</Li>
                <Li><strong>cors:</strong> Permite controle de acesso entre diferentes domínios (cross-origin requests).</Li>
                <Li><strong>firebase:</strong> Biblioteca para conectar e manipular dados no Firebase.</Li>
                <Li><strong>graphql-request:</strong> Cliente para realizar requisições GraphQL de forma simples.</Li>
              </Ul>
              <H3>Considerações Finais</H3>
              <P>Este projeto é um sistema robusto para o controle de transmissões ao vivo, implementado com boas práticas de segurança e gerenciamento de dados. As integrações com APIs e o uso de GraphQL trazem flexibilidade para monitoramento, enquanto Firebase e Millicast facilitam o armazenamento e controle das transmissões. Este é um exemplo sólido de um sistema backend voltado para escalabilidade e modularidade, ideal para plataformas que demandam uma estrutura sólida e integração de dados em tempo real.</P>
            </>
          )}
        </Container>
      </Main>
    </div>
  );
};

export default Stripe;