import React from "react";

export default function Posts() {
  const informacoesPosts = [
    {imagemUsuario:"assets/img/meowed.svg", nomeUsuario: "meowed", imagemConteudo: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", nomeCurtida: "respondeai", numeroCurtidas: "101523"},
    {imagemUsuario:"assets/img/barked.svg", nomeUsuario: "barked", imagemConteudo: "assets/img/dog.svg", imagemCurtida: "assets/img/adorable_animals.svg", nomeCurtida: "adorable_animals", numeroCurtidas: "99159"}
  ]

  function Post(props) {
    const [salvo, setSalvo] = React.useState("bookmark-outline")
    const [curtida, setCurtida] = React.useState("heart-outline")
    const [classeCurtida, setClasseCurtida] = React.useState("")
    const quantidadeCurtidas=Number(props.numeroCurtidas)
    const [numCurtidas, setNumCurtidas] = React.useState(quantidadeCurtidas.toLocaleString('pt-BR'))

    function verificaSalvo(){
      if (salvo === "bookmark-outline"){
        setSalvo("bookmark")
      } else {
        setSalvo("bookmark-outline")
      }
    }
    
    function verificaCurtidaImagem(){
      if (curtida === "heart-outline"){
        setCurtida("heart")
        setClasseCurtida("vermelho")
        setNumCurtidas((quantidadeCurtidas+1).toLocaleString('pt-BR'))
      }
    }

    function verificaCurtida(){
      if (curtida === "heart-outline"){
        setCurtida("heart")
        setClasseCurtida("vermelho")
        setNumCurtidas((quantidadeCurtidas+1).toLocaleString('pt-BR'))
      } else {
        setCurtida("heart-outline")
        setClasseCurtida("")
        setNumCurtidas((quantidadeCurtidas).toLocaleString('pt-BR'))
      }
    }
    
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagemUsuario} />
            {props.nomeUsuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
  
        <div class="conteudo">
          <img onClick={verificaCurtidaImagem} src={props.imagemConteudo} />
        </div>
  
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon class={classeCurtida} onClick={verificaCurtida} name={curtida}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={verificaSalvo} name={salvo}></ion-icon>
            </div>
          </div>
  
          <div class="curtidas">
            <img src={props.imagemCurtida} />
            <div class="texto">
              Curtido por <strong>{props.nomeCurtida}</strong> e{" "}
              <strong>outras {numCurtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div class="posts">
      {informacoesPosts.map((p) => <Post 
        imagemUsuario= {p.imagemUsuario}
        nomeUsuario={p.nomeUsuario}
        imagemConteudo={p.imagemConteudo}
        imagemCurtida={p.imagemCurtida}
        nomeCurtida={p.nomeCurtida}
        numeroCurtidas={p.numeroCurtidas}
      />)}      
    </div>
  );
}
