function Post(props) {
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
        <img src={props.imagemConteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtida} />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtida}</strong> e{" "}
            <strong>outras {props.numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const informacoesPosts = [
    {imagemUsuario:"assets/img/meowed.svg", nomeUsuario: "meowed", imagemConteudo: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", nomeCurtida: "respondeai", numeroCurtidas: "101.523"},
    {imagemUsuario:"assets/img/barked.svg", nomeUsuario: "barked", imagemConteudo: "assets/img/dog.svg", imagemCurtida: "assets/img/adorable_animals.svg", nomeCurtida: "adorable_animals", numeroCurtidas: "99.159"}
  ]
  
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
