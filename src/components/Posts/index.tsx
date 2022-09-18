import React from "react";
import { UserProfile } from "../UserProfiles";

import userImage from '../../assets/user-image.png';
import './global.css';

interface iPostProps {
  author: string;
  role: string;
  content: string;
}

export function Posts(props: iPostProps) {
  
  return (
    <article className="post">
      <header>
        <UserProfile name="Leslie Alexander" role="Web Developer" avatar={userImage} blockClass="post-profiler" />
        <time title="18 de Setembro às 17:44" dateTime="2001-05-15 19:00">Públicado há 1h</time>
      </header>

      <div className="post-container">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <br/>
        <a href="#"> 👉 jane.design/doctorcare </a>
        <br/><br/>
        <a href="#"> #novoprojeto #nlw #rocketseat </a>
      </div>
      
      <form className="feedback-comment">
          <strong>
            Deixe seu feedback
          </strong>

          <textarea placeholder="Deixe seu comentário" />

          <button type="submit">
            Publicar
          </button>
      </form>

    </article>
  )
}