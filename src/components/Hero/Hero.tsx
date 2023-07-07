import Subtitle from "../../lib/ui/Subtitle";
import Title from "../../lib/ui/Title";
import StyledHero from "./StyledHero";
import image from "../../assets/undraw_medical_care.svg";
const Hero = () => {
  return (
    <StyledHero>
      <div>
        <div>
          <Title>Covid Id</Title>
          <Subtitle>Monitoring Perkembangan Covid</Subtitle>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            excepturi magnam labore non similique laborum quibusdam voluptatum
            suscipit mollitia inventore aliquam quod nemo sunt, natus ipsa
            quasi. Architecto, quam sapiente.
          </p>
        </div>
        <div>
          <button>vaccine</button>
        </div>
      </div>
      <img src={image} />
    </StyledHero>
  );
};

export default Hero;
