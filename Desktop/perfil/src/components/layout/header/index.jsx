import { Container } from './styles';

const Header = ({ isHamburguerOpen, setIsHamburguerOpen }) => {
  const toggleHamburguer = () => setIsHamburguerOpen(!isHamburguerOpen);

  return (
    <Container>
      <div onClick={toggleHamburguer} className='container-hamburguer'>
        <div className='hamburguer'></div>
        <div className='hamburguer'></div>
        <div className='hamburguer'></div>
      </div>
    </Container>
  );
};

export default Header;