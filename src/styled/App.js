import styled from 'styled-components';

//CSS Variables
const WEBSITE_WIDTH = "1080px";
const NAV_HEIGHT = "50px";
const NAV_MENU_WIDTH = 250;
const NAV_COLOR = "";
const NAV_FONT_COLOR = "";
const CONTENT_FONT_COLOR = "";
const MOBILE = "781px";
const TABLET = "1050px";


export const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "Header Header Header"
    "PrimaryContent PrimaryContent SideBar"
    "Footer Footer Footer";
  text-align: center;
  grid-template-rows: ${NAV_HEIGHT} auto 200px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: ${WEBSITE_WIDTH};
`;

export const Header = styled.div`
  grid-area: Header;
  background: #9fa;
  height: ${NAV_HEIGHT};
  width: 100%;
  position: fixed;
  left:0;
  z-index: 2;

  
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${WEBSITE_WIDTH};
  height: 100%;
  margin: 0 auto;

  @media (max-width:${WEBSITE_WIDTH}){
    width: 100%;
  }

`;

export const NavButton = styled.div`
  display: none;
  width: 300px;
  text-align: left;
  margin-left: 15px;

  @media (max-width:${MOBILE}){
    display: flex;
    order: 1;
    width: 100px;
  }
`;

export const Brand = styled.div`
  background: #a12;
  width: 300px;
  text-align: left;
  margin-left: 15px;
  order: 1;
  
  @media (max-width:${MOBILE}){
    order: 2;
    margin-left: 0;
    text-align: center;
  }
`;

export const NavLinks = styled.div`
  background: #d42;
  width: 100%;
  display: flex;
  justify-content: left;
  order: 2;

  @media (max-width:${MOBILE}){
    display: none;
  }

`;

export const NavLink = styled.a`
  padding: 0 10px 0 10px;
`;

export const NightButton = styled.div`
  text-align: right;
  margin-right: 15px;
  order: 3;

  @media (max-width:${MOBILE}){
    width: 100px;
  }

`;

// Night Mode Switch
export const SwitchInputUI = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

export const SwitchSliderUI = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bbcdd9;
  transition: 0.4s;
  border-radius: 100px;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 100%;
  }
`;
export const SwitchUI = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
  margin-bottom: 0;
  vertical-align: middle;
  ${SwitchInputUI}:checked + ${SwitchSliderUI} {
    background-color: black;
  }
  ${SwitchInputUI}:checked + ${SwitchSliderUI}:before {
    transform: translateX(20px);
  }
`;
/////////////////////


export const PrimaryContent = styled.div`
  grid-area: PrimaryContent;
  background: #1aa;
  min-height: 1000px;

`;

export const SideBar = styled.div`
  grid-area: SideBar;
  background: #4fc;

`;

export const Footer = styled.div`
  grid-area: Footer;
  background: #f3a;

`;

export const NavSideMenu = styled.div`
  display: none;
  height: 100%;
  width: ${NAV_MENU_WIDTH}px;
  background: rgba(0,0,0,1);
  backdrop-filter: blur(4px);
  transition: ease 0.3s;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 10;
  margin-left: -${(NAV_MENU_WIDTH + 15)}px;
  margin-top: ${NAV_HEIGHT};


  @media (max-width:${MOBILE}){
    display: flex;
  }
`;

export const NavSideMenuShadow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  position: fixed;
  display: none;
  visibility: hidden;
  top: 0;
  right: 0;
  margin-top: ${NAV_HEIGHT};
  transition: 0s;
  z-index: -1;
  opacity: 0;
  backdrop-filter: blur(4px);
  transition: visibility 1s, opacity 0.6s;
  
  @media (max-width:${MOBILE}){
    display: flex;
  }
`;

export const Hamburger = styled.span`
  width: 50px;
  height: ${NAV_HEIGHT};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  top: 0;
`;

export const HamburgerInner = styled.span`
    height: 3px;
    width: 22px;
    display: flex;
    background: black;
    margin: 2px 0;
    border-radius: 5px;
`;

// Nav Button Switch
export const NavInputUI = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

export const NavUILabel = styled.label`
  position: relative;
  width: 50px;
  height: 50px;

  ${NavInputUI}:checked ~ ${NavSideMenu} {
    transform: translateX(250px);
  }

  ${NavInputUI}:checked ~ ${NavSideMenuShadow} {
    z-index: 9;
    opacity: 1;
    visibility: visible;
    transition: visibility 0s, opacity 0.8s;
  }
`;

/////////////////////