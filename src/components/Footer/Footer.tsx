import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import StyledFooter from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Logo />
        Developed by amar-ti2021
      </div>
      <NavMenu />
    </StyledFooter>
  );
};

export default Footer;
