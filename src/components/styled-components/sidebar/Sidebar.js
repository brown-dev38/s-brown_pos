import styled from 'styled-components';

/*----------------------------------------------------------------*\
  # Styling Sidebar
\*----------------------------------------------------------------*/
export const SideBar = styled.div`
  background-color: ${props => props.theme.color.white};
  top: 0;
  left: 0;
  position: absolute;
  padding: 2rem 1rem;
  width: ${props => (props.$active ? '5rem' : '15rem')};
  height: 100vh;
  transition: ${props => props.theme.transition.transition0_5s};
`;

/*----------------------------------------------------------------*\
  # Styling Logo
\*----------------------------------------------------------------*/
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoImg = styled.img`
  width: 5rem;
  height: auto;
`;

export const LogoTitle = styled.span`
  font-size:  ${props => props.theme.fontSize.fz125};
  font-weight: ${props => props.theme.fontWeight.fw900};
  color: ${props => props.theme.color.grayText};
  padding-inline-start: 1rem;
  opacity: ${props => (props.$active ? '0' : '1')};
  transition: ${props => (props.$active ? props.theme.transition.transition0_2 : props.theme.transition.transition1_35s)};
`;

/*----------------------------------------------------------------*\
  # Styling Burger Button Menu
\*----------------------------------------------------------------*/
export const Burger = styled.div`
  content: "";
  background-color: ${props => props.theme.color.primary};
  position: absolute;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 2rem;
  z-index: 1;
  right: calc(-2.1rem / 2);
  top: calc(6rem / 1.15);

  &::after {
    content: "";
    position: absolute;
    width: calc(6rem + 15rem);
    height: 0.12rem;
    top: calc(2.2rem / 2);
    right: 2.1rem;
    z-index: 0;
    transition: ${props => props.theme.transition.transition0_5s};
    background-color:  ${props => props.theme.color.grayBlackground};
  }
`;

export const BurgurTrigger = styled.div`
  content: "";
  width: 2.1rem;
  height: 2.1rem;
  cursor: pointer;
  z-index: 6;
  opacity: 0;
  position: relative;
`;

export const BurgerMenu = styled.div`
  content: "";
  background-color: ${props => props.$active ? props.theme.color.white : props.theme.color.primary};
  position: relative;
  z-index: 1;
  width: 1.2rem;
  height: 0.18rem;
  border-radius: 2rem;
  left: 0.45rem;
  bottom: calc(2.2rem / 2);
  transition: ${props => props.theme.transition.transition0_5s};

  &::before {
    content: "";
    background-color: ${props => props.theme.color.white};
    position: absolute;
    width: 1.2rem;
    height: 0.18rem;
    border-radius: 2rem;
    top: -0.4rem;
    transition: ${props => props.theme.transition.transition0_5s};
    transform: ${props => props.$active ? "translateY(0rem) rotate(0deg)" : "translateY(0.4rem) rotate(-45deg)"};
  }

  &::after {
    content: "";
    background-color: ${props => props.theme.color.white};
    position: absolute;
    width: 1.2rem;
    height: 0.18rem;
    border-radius: 2rem;
    top: 0.4rem;
    transition: ${props => props.theme.transition.transition0_5s};
    transform: ${props => props.$active ? "translateY(0rem) rotate(0deg)" : "translateY(-0.4rem) rotate(45deg)"};
  }

`;

/*----------------------------------------------------------------*\
  # Styling Profile
\*----------------------------------------------------------------*/
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-block-start: 2.5rem;
`;

export const ProfileImg = styled.img`
  width: 3rem;
  height: auto;
  border-radius: 2rem;
`;

export const ProfileContent = styled.div`
  padding-inline-start: 1rem;
  transition: ${props => (props.$active ? props.theme.transition.transition0_2s : props.theme.transition.transition1_35s)};
  opacity: ${props => (props.$active ? '0' : '1')};
`;

export const ProfileTitle = styled.p`
  font-size: ${props => props.theme.fontSize.fz0825};
  font-weight: ${props => props.theme.fontWeight.fw700};
  color: ${props => props.theme.color.grayText};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const ProfileName = styled.p`
  padding-block-start: 0.25rem;
  font-size: ${props => props.theme.fontSize.fz0725};
  color: ${props => props.theme.color.grayText};
`;

/*----------------------------------------------------------------*\
  # Styling Content
\*----------------------------------------------------------------*/
export const Content = styled.div`
  margin-block-start: 2rem;
`;

export const ContentUl = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContentUlBottom = styled(ContentUl)`
  margin-top: 15rem;
`;

export const ContentList = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-block: 0.75rem;
  width: 100%;
  border-radius: 0.25rem;
  transition: ${props => props.theme.transition.transition0_35s};
  background-color: ${props => props.$active ? props.theme.color.primary : ''};
  // background-color: ${props => props.active ? props.theme.color.grayBlackgroundActive : ''};

  &:hover {
    // background-color: ${props => props.theme.color.grayBlackgroundActive};
    background-color: ${props => props.theme.color.primary};
  }
`;

export const ContentMenu = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.05rem;
  color: ${props => props.$active ? props.theme.color.white : props.theme.color.blackTextItem};
  // color: ${props => props.$active ? props.theme.color.goldText : props.theme.color.grayText};
  font-size: ${props => props.theme.fontSize.fz1};
  font-weight: ${props => props.$active ? props.theme.fontWeight.fw900 : props.theme.fontWeight.fw500};
  transition: ${props => props.theme.transition.transition0_35s};
  width: 100%;

  &:hover {
    color: ${props => props.theme.color.white};
  }
`;

export const ContentName = styled.span`
  margin-inline-start: 0.5rem;
  opacity: ${props => props.$active ? '0' : '1'};
  // transition: ${props => (props.$active ? props.theme.transition.transition0_2 : props.theme.transition.transition1_35s)};
`;