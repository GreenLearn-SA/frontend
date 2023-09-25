import React from 'react'
import './card.css'

export default function Card({corDeFundo , conteudo , nome , imagem , linkGit}) {
  const cardStyle = {
    backgroundStyle:{
      backgroundColor: corDeFundo || (4, 193, 250, 0.732),
    },

    txtColor:{
      color: corDeFundo || '#fff'
    }
  };
  return (
    <div className="parent">
      <div className="card" >
        <div className="content-box" style={cardStyle.backgroundStyle}>
          <span className="card-title">{nome}</span>
          <p className="card-content">
            {conteudo}
          </p>
          <a href={linkGit}><span style={cardStyle.txtColor} className="see-more">Clica ai</span></a>
        </div>
        <div className="date-box">
          <img src={imagem} alt={nome}/>
        </div>
      </div>
    </div>
  )
}
