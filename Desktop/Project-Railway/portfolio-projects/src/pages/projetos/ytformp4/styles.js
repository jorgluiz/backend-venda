import styled from "styled-components";

export const Container = styled.div`

  max-width: 950px;
  margin: 0 auto; /* Centraliza o container horizontalmente */
  padding: 0 30px; /* Espaçamento de 30px nas laterais */
  border: solid 1px red;

  & .player-video-personalizado {
    cursor: pointer;
  }
  & .player-video-personalizado:active {
    cursor: progress;
  }

  & .margin10 {
  margin-top: -15px;
}
`;

export const P = styled.p`

font-size: 16px;
line-height: 28px;
color: #323F4B;
margin-bottom: 20px;

& a {
  color: blue;
}
`;

export const H4 = styled.ul`

font-weight: 600;
margin-bottom: 20px;
`;

export const H3 = styled.h3`

line-height: 28px;
margin-bottom: 20px;
`;

export const Li = styled.li`

padding: 8px 0 8px 0;
`;

export const Ul = styled.ul`

margin-bottom: 20px;
`;
