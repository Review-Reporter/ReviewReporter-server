import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../modules/data';
import styled from 'styled-components';

const HeaderArea = styled.div`
  width: 100%;
  position: relative;
`;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${props => 
    props.theme.border_color
  };
  
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 10;
  transition: 0.3s ease;

  &.hide {
    transform: translateY(-4rem);
  }
`;

const HeaderContainer = styled.div`
  width: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  background: rgb(36, 36, 36, 0.85);
`;

const Title = styled.div`
  font-family: ${props => props.theme.fonts.logo};
  font-size: 1.7rem;
  padding-top: 0.45rem;
  cursor: pointer;
`;

const Categories = styled.div`
  font-family: ${props => props.theme.fonts.menu};
  color: lightgray;
  cursor: pointer;
  &:hover { opacity: 0.8; };
`;

const Color = styled.span`
  color: ${props => props.theme.palette.yellow};
`;


const Header = () => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      const deltaY = pageYOffset - pageY;
      const hide = pageYOffset !== 0 && deltaY >= 0;
      setHide(hide);
      setPageY(pageYOffset);
    }
    
    const throttle = (callback, waitTime) => {
      let timerId = null;
      return () => {
          if (timerId) return;
          timerId = setTimeout(() => {
              callback();
              timerId = null;
          }, waitTime);
      };
    };

    const throttleScroll = throttle(handleScroll, 50);

    window.addEventListener('scroll', throttleScroll);
    return () => window.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  return (
    <HeaderArea>
      <HeaderWrapper
        className={hide && 'hide'}
      >
        <HeaderContainer>
          <Title
            onClick={() => {
              dispatch(setActivePage('categories'));
              scrollToTop();
            }}
          >
            <Color>re</Color>view <Color>re</Color>porter</Title>
          <Categories
            onClick={() => {
              dispatch(setActivePage('categories'));
              scrollToTop();
            }}
          >Categories</Categories>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderArea>
  )
};

export default Header;