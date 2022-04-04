import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import {FileSaver, saveAs} from 'file-saver';

const Sidebar = ({ isOpen, toggle }) => {
  const saveFile = () => {
    saveAs(
      "/Resume.pdf",
      "MyCV.pdf"
    );
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={false}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='skills'
            onClick={toggle}
            smooth={false}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Skills
          </SidebarLink>
          <SidebarLink
            to='projects'
            onClick={toggle}
            smooth={false}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Projects
          </SidebarLink>
          {/* <SidebarLink
            to='signup'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Sign Up
          </SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='' onClick={saveFile}>resume</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
