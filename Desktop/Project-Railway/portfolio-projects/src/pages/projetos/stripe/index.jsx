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
          <H3 className="player-video-personalizado onClickH3" onClick={() => isToggleOpen01 ? setIsToggleOpen01(false) : setIsToggleOpen01(true)}>Projeto: Plataforma de Autenticação e Pagamentos com STRIPE</H3>
          <P>
            <a href="https://payment-stripe-9d0c2c183f31.herokuapp.com/login/" target="_blank">direcionar para página</a>
          </P>
          {isToggleOpen01 && (
            <>

              <P><strong>Visão Geral</strong></P>
              <P>Este projeto consiste em uma plataforma completa e escalável para cursos online, oferecendo autenticação segura, processamento de pagamentos via Stripe, armazenamento e consulta de dados no Firebase Realtime Database, e gestão de tokens JWT. O sistema integra serviços de backend com uma interface de front-end HTML servida diretamente pelo servidor, permitindo que usuários autenticados com pagamento confirmado acessem conteúdo exclusivo dos cursos.</P>
              <P><strong>Funcionalidades Principais</strong></P>
              <H3>1. Autenticação de Usuários:</H3>
              <Ul>
                <Li><strong>Login e Registro: </strong>Implementação de autenticação de usuários com tokens JWT para segurança no login e navegação.</Li>
                <Li><strong>Verificação de Expiração de Tokens: </strong>Middleware de verificação e tratamento da expiração de tokens JWT, redirecionando usuários ao login quando necessário.</Li>
                <Li><strong>Gestão de Sessão com Cookies: </strong>Uso de cookies JWT para persistir sessões de usuários de forma segura.</Li>
              </Ul>
              <H3>2. Gestão de Pagamentos:</H3>
              <Ul>
                <Li><strong>Integração com Stripe:</strong> Processamento seguro de pagamentos com Stripe API para gerenciamento de assinaturas e transações de cursos.</Li>
                <Li><strong>Verificação e Atualização do Status de Pagamento:</strong> Controle de status de pagamento para garantir que apenas usuários com pagamento confirmado acessem os cursos.</Li>
              </Ul>
              <H3>3. Serviço de Páginas Estáticas e Dinâmicas:</H3>
              <Ul>
                <Li><strong>Renderização de Páginas HTML:</strong> Uso do método res.sendFile para servir páginas HTML específicas, como index.html da pasta views/createCustomers, oferecendo uma interface estática para interações como cadastro e pagamentos.</Li>
                <Li><strong>Interface para Cadastro e Gerenciamento:</strong>  Página index.html personalizada para permitir que usuários visualizem ou gerenciem informações de pagamento e perfil, trazendo uma experiência de front-end simples e eficiente.</Li>
              </Ul>
              <H3>4. Armazenamento de Dados no Firebase:</H3>
              <Ul>
                <Li><strong>Salvar e Consultar Dados no Firebase:</strong> Integração com Firebase Realtime Database para armazenamento de dados de usuários e transações.</Li>
                <Li><strong>Organização e Segurança de Dados:</strong> Estrutura para armazenamento seguro de dados, permitindo consultas rápidas e eficientes.</Li>
              </Ul>
              <H3><strong>Tecnologias Utilizadas</strong></H3>
              <Ul>
                <Li><strong>Backend:</strong>  Node.js e Express.js para criação de uma API RESTful e renderização de conteúdo estático e dinâmico.</Li>
                <Li><strong>Autenticação:</strong> JWT (jsonwebtoken) para geração e verificação de tokens e segurança de sessão.</Li>
                <Li><strong>Pagamentos:</strong>  Stripe API para processamento de pagamentos e gestão de transações.</Li>
                <Li><strong>Banco de Dados:</strong>  Firebase Realtime Database para armazenamento e recuperação de informações de usuário e transações.</Li>
                <Li><strong>Middleware e Cookies:</strong>  cookie e cookie-parser para gerenciamento de sessões.</Li>
                <Li><strong>Gestão de Variáveis de Ambiente:</strong>  dotenv para proteger variáveis sensíveis.</Li>
                <Li><strong>Ferramentas de Desenvolvimento:</strong>  nodemon para reinicialização automática do servidor em desenvolvimento.</Li>
              </Ul>
              <H3>Principais Bibliotecas e Dependências</H3>
              <Ul>
                <Li><strong>jsonwebtoken:</strong> para criação e verificação de tokens JWT.</Li>
                <Li><strong>cookie e cookie-parser:</strong> para manipulação de cookies.</Li>
                <Li><strong>dotenv:</strong> para variáveis de ambiente.</Li>
                <Li><strong>firebase-admin:</strong> para integração com Firebase.</Li>
                <Li><strong>stripe:</strong> para processamento de pagamentos.</Li>
                <Li><strong>express:</strong> como framework de API REST.</Li>
                <Li><strong>cors:</strong> para controle de segurança nas requisições cross-origin.</Li>
                <Li><strong>path:</strong> para manipulação de caminhos e envio de arquivos HTML com res.sendFile.</Li>
              </Ul>
              <H3>Diferenciais</H3>
              <P>Este projeto combina o backend seguro e escalável com um front-end servindo HTML, permitindo uma interface de usuário direta e eficaz para cadastro, autenticação e gerenciamento de transações. A integração de várias tecnologias, como Firebase, JWT, Stripe e o envio direto de arquivos HTML, faz deste um sistema completo e preparado para expansão.</P>
            </>
          )}
        </Container>
      </Main>
    </div>
  );
};

export default Stripe;