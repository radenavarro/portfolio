import React from "react";
import "./Habilidades.scss";
import DevIcon from "../../components/style/DevIcon";
import SkillBlock from "../../components/SkillBlock";

const Habilidades = (props) => {

  return (
    <div className={'habilidades'}>
      <h2>FRAMEWORKS</h2>
      <div className={'habilidades-grupo slidefrom-left'}>
        <SkillBlock
          icon={"devicon-react-original"}
          iconSize={50}
          skillname={"REACT"}
          rating={8}
        />
        <SkillBlock
          icon={"devicon-laravel-plain"}
          iconSize={50}
          skillname={"LARAVEL"}
          rating={7}
        />
        <SkillBlock
          icon={"devicon-express-original"}
          iconSize={50}
          skillname={"EXPRESS"}
          rating={5}
        />
        <SkillBlock
          icon={"devicon-angularjs-plain"}
          iconSize={50}
          skillname={"ANGULAR"}
          rating={4}
        />
      </div>
      <br/>
      <h2>LENGUAJES</h2>
      <div className={"habilidades-grupo slidefrom-right"}>
        <SkillBlock
          icon={"devicon-html5-plain"}
          iconSize={50}
          skillname={"HTML5"}
          rating={8}
        />
        <SkillBlock
          icon={"devicon-css3-plain"}
          iconSize={50}
          skillname={"CSS3"}
          rating={8}
        />
        <SkillBlock
          icon={"devicon-javascript-plain"}
          iconSize={50}
          skillname={"JAVASCRIPT"}
          rating={8}
        />
        <SkillBlock
          icon={"devicon-php-plain"}
          iconSize={50}
          skillname={"PHP"}
          rating={7}
        />
        <SkillBlock
          icon={"devicon-java-plain"}
          iconSize={50}
          skillname={"JAVA"}
          rating={4}
        />
      </div>
      <br/>
      <h2>HERRAMIENTAS</h2>
      <div className={'habilidades-grupo slidefrom-left'}>
        <SkillBlock
          icon={"devicon-git-plain"}
          iconSize={50}
          skillname={"GIT"}
          rating={7}
        />
        <SkillBlock
          icon={"devicon-redux-plain"}
          iconSize={50}
          skillname={"REDUX"}
          rating={7}
        />
        <SkillBlock
          icon={"devicon-sass-original"}
          iconSize={50}
          skillname={"SASS"}
          rating={6}
        />
        <SkillBlock
          icon={"devicon-mysql-plain"}
          iconSize={50}
          skillname={"MYSQL"}
          rating={6}
        />
        <SkillBlock
          icon={"devicon-nodejs-plain"}
          iconSize={50}
          skillname={"NODE JS"}
          rating={5}
        />
        <SkillBlock
          icon={"devicon-docker-plain"}
          iconSize={50}
          skillname={"DOCKER"}
          rating={4}
        />
        <SkillBlock
          icon={"devicon-amazonwebservices-original"}
          iconSize={50}
          skillname={"AMAZON WEBSERVICES"}
          rating={3}
        />
      </div>
    </div>
  )
}

export default Habilidades;
