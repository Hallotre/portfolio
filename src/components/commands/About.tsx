import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Toby Haywood</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a front-end developer</HighlightAlt> based in Bergen,
        Norway.
      </p>
      <p>
        My fascination with the dynamic world of web development <br />
        led me to dive deep into creating seamless and engaging user experiences.
        
      </p>
    </AboutWrapper>
  );
};

export default About;
