import React from "react";

export default function Usuario() {
  
  const [nome, setNome] = React.useState('Catana')
  const [imagem, setImagem] = React.useState('assets/img/catanacomics.svg')
  
  function mudaNome(){
    setNome(prompt("Digite seu novo nome de usuário"))
  }
  
  function mudaImagem(){
    setImagem(prompt("DIgite o endereço de sua nova imagem"))
  }

  function ExibeUsuario(props) {
    return (
      <>
        <img onClick={mudaImagem} src={props.imagem} />
        <div class="texto">
          <strong>{props.nomeUsuario}</strong>
          <span>
            {props.nome}
            <ion-icon onClick={mudaNome} name="pencil"></ion-icon>
          </span>
        </div>
      </>
    );
  }
  
  return (
    <div class="usuario">
      {
        <ExibeUsuario
          imagem={imagem}
          nomeUsuario="catanacomics"
          nome={nome}
        />
      }
    </div>
  );
}
