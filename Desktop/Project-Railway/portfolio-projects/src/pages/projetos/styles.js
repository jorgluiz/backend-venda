import styled from "styled-components";

export const Container = styled.div`
max-width: 950px;
margin: 0 auto; /* Centraliza o container horizontalmente */
padding: 0 30px 0 30px; /* Opcional: ajuste de padding para um pouco de espaçamento interno */
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 30px; /* Substitui margin-top por padding-top */
 /*  grid-template-columns: 435px 435px;  Duas colunas com 435px cada ou grid-template-columns: repeat(2, 435px); Duas colunas em telas maiores
  row-gap: 30px; /* Espaçamento entre as linhas */
  column-gap: 30px; 
  row-gap: 30px;
  grid-template-columns: repeat(2, minmax(300px, 100%)); /* Responsivo */

   /* Responsividade para telas menores */
   @media (max-width: 750px) {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
   
  }

  & img {
    display: block;
    width: 100%;
    height: 244px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  };

  & .item {
    height: 244px;
    width: 100%;
    border: 1px solid #ccc;
    background-color: #ffffff;
    display: flex;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 0 10px #102a43;
    }

  & .sub-item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 0 0 20px;

    & .item-h2, .item-p {
    color: #323F4B;
  }
    & .item-p {
      font-size: 20px;
    }
  };
  };
  };

  & .container-item {
    transition: transform 500ms ease-in-out; /* Transição suave para mover o sidebar */
    transform: translateY(0); /* Posição inicial */

  /* Transforma somente em telas maiores */
  @media (min-width: 700px) { /* Ajuste o valor conforme necessário */
    &:hover {
      transform: translateY(-30px);
    }
  }
  };
`;

