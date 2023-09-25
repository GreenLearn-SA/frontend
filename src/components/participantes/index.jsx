import React from "react";
import Card from "./cards";

export default function Participantes() {
  return (
    <div className="container">
      <h1>Participantes</h1>
      <Card
        nome="Bernardo"
        conteudo="lindo maravilhoso e gosta de negros"
        imagem="https://pbs.twimg.com/profile_images/1078856196558385152/DHoWrBC1_400x400.jpg"
        corDeFundo="#A5B74B"
        linkGit="https://github.com/Bernardo-Mattos"
      />
      <Card 
        nome="Ash" 
        conteudo="Emo fudido cheio de  depressao" 
        imagem="https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.18.1/CHAMPION/22/ICON" 
        corDeFundo="#298EC1" 
        linkGit="https://github.com/cemeterydriiver" />
      <Card 
        nome="Daniel" 
        conteudo="Preto" 
        imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWH3qjjM8tJPBtyFkTM3aHH38rjUi1kbaVA&usqp=CAU'
        corDeFundo="#000" 
        linkGit="https://github.com/fanilinho22" />
      <Card 
        nome="Vitinho" 
        conteudo="ele parece um cachorro fofo" 
        imagem="https://i.pinimg.com/1200x/bb/16/5c/bb165c8fcecf107962691450d7505dd3.jpg" 
        corDeFundo="#ef9a50" 
        linkGit="https://github.com/Vitor-Piress" />
      <Card 
        nome="Pedro" 
        conteudo="soca fofo enforca errado erra buraco geme fino goza rápido" 
        imagem="https://img.freepik.com/fotos-gratis/cachorro-basenji-vermelho-e-branco-de-aparencia-chique-com-capuz-de-algodao-preto-com-capuz-levantado-parece-a-esquerda-isolado-no-branco_346278-418.jpg?w=2000" 
        corDeFundo="#f0f" 
        linkGit="https://github.com/Pedroo-Nietoo" />
      <Card 
        nome="" 
        conteudo="" 
        imagem="" 
        corDeFundo="" 
        linkGit="" />
      
      
    </div>
  );
}
