import styled from "styled-components";

export const Containerfixed = styled.div`
  position: sticky;
  /* flex-shrink: 0; */
  top: 0;
  z-index: 10;
  height: 100vh;
  min-width: 330px; /* Impede que a largura seja comprimida */
  background-color: #102a43;
  transition: transform 500ms ease-in-out; /* Transição suave para mover o sidebar */
  transform: translateX(0); /* Posição inicial */

  @media (max-width: 1250px) {
    /* Alterna para 'fixed' em telas menores para remover o espaço quando o sidebar é oculto */
    position: fixed;
    left: 0;
    transform: ${({ isHamburguerOpen }) => (isHamburguerOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }

  & li {
    list-style-type: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & li {
    padding: 10px;
  }

  & a {
    font-size: 20px;
    color: rgb(188, 204, 220);
      /* font-weight: bold; */

    &:hover {
      color: #84c5f4;
    }
  }

    /* Aplica estilo especial quando o link estiver ativo */
    & span.active {
    color: #84c5f4; /* Cor para o link ativo */
    /* font-weight: bold; Torna o link ativo em negrito */
  }
`;

export const XContainer = styled.div`
  position: absolute; /* Use 'fixed' se você quer que ele permaneça visível enquanto a página rola */
  top: 16px; /* Distância do topo */
  right: 16px; /* Distância do lado direito */
  width: 24px;
  height: 24px;
  cursor: pointer; /* Ícone de cursor para indicar que é clicável */

  @media (min-width: 1250px) {
    display: none;
  }
`;

export const Bar = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #d1dfed;
  top: 50%;
  left: 0;
  transform-origin: center;
`;

export const DiagonalOne = styled(Bar)`
  transform: rotate(45deg);
`;

export const DiagonalTwo = styled(Bar)`
  transform: rotate(-45deg);
`;
