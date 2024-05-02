import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
    
        ████████╗ ██████╗ ██████╗ ██╗   ██╗
        ╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
           ██║   ██║   ██║██████╔╝ ╚████╔╝ 
           ██║   ██║   ██║██╔══██╗  ╚██╔╝  
           ██║   ╚██████╔╝██████╔╝   ██║   
           ╚═╝    ╚═════╝ ╚═════╝    ╚═╝   
██╗  ██╗ █████╗ ██╗   ██╗██╗    ██╗ ██████╗  ██████╗ ██████╗ 
██║  ██║██╔══██╗╚██╗ ██╔╝██║    ██║██╔═══██╗██╔═══██╗██╔══██╗
███████║███████║ ╚████╔╝ ██║ █╗ ██║██║   ██║██║   ██║██║  ██║
██╔══██║██╔══██║  ╚██╔╝  ██║███╗██║██║   ██║██║   ██║██║  ██║
██║  ██║██║  ██║   ██║   ╚███╔███╔╝╚██████╔╝╚██████╔╝██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚══╝╚══╝  ╚═════╝  ╚═════╝ ╚═════╝       
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  ████████╗ ██████╗ ██████╗ ██╗   ██╗
  ╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
     ██║   ██║   ██║██████╔╝ ╚████╔╝ 
     ██║   ██║   ██║██╔══██╗  ╚██╔╝  
     ██║   ╚██████╔╝██████╔╝   ██║   
     ╚═╝    ╚═════╝ ╚═════╝    ╚═╝  
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version: Alpha)</div>
        <Seperator>----</Seperator>

        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
