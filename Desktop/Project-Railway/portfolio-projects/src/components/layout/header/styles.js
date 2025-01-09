import styled from "styled-components";

export const Container = styled.div`
display: none;
background-color: #e4e7eb;
height: 100px;
width: 100%;

box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

& .hamburguer {
  background-color: #555;
  width: 30px;
  height: 4px;
  margin: 0 0 8px 0;
}

@media (max-width: 1250px) {
  display: flex;
  align-items: center;

  & .container-hamburguer {
    margin-left: 23px;
  }
  }
`;