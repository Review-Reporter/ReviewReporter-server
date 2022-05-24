import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5'

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30rem;
  height: 10rem;
  padding: 1rem;
  background: white;
  border-radius: 0.2rem;
`;

const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.4;
  letter-spacing: 1.5;
  width: 100%;
`;

const Info = ({ isVisible, setIsVisible, children }) => {
  if (!isVisible) return null;
  return (
    <Background>
      <InfoContainer>
        <CloseIcon size="30" color="#666666"
          onClick={()=>setIsVisible(false)}
        />
        <Text>{children}</Text>
      </InfoContainer>
    </Background>
  )
};

export default Info;