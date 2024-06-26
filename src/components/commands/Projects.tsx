import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
   const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
   useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
   const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "", ""]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Museum Semester 23",
    desc: "A website for a museum that is intended for children and families.",
    url: "https://museum-semester-23.netlify.app",
  },
  {
    id: 2,
    title: "GameHub",
    desc: "An ecommerce web application where users can browse various products and make purchases. (dummy website)",
    url: "https://spaghetti-ca.netlify.app",
  },
  {
    id: 3,
    title: "GameHub",
    desc: "Github Repo for GameHub project.",
    url: "https://github.com/Hallotre/HTML-CSS-CA",
  },
  {
    id: 4,
    title: "Museum",
    desc: "Github Repo for Museum project.",
    url: "https://github.com/Hallotre/Museum-semester",
  },
 
];

export default Projects;
