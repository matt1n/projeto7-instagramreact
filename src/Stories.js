function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">{props.texto}</div>
    </div>
  );
}

export default function Stories() {
  const conteudoStories = [
    { imagem: "assets/img/9gag.svg", texto: "9gag" },
    { imagem: "assets/img/meowed.svg", texto: "meowed" },
    { imagem: "assets/img/barked.svg", texto: "barked" },
    {
      imagem: "assets/img/nathanwpylestrangeplanet.svg",
      texto: "nathanwpylestrangeplanet",
    },
    { imagem: "assets/img/wawawicomics.svg", texto: "wawawicomics" },
    { imagem: "assets/img/respondeai.svg", texto: "respondeai" },
    { imagem: "assets/img/filomoderna.svg", texto: "filomoderna" },
    { imagem: "assets/img/memeriagourmet.svg", texto: "memeriagourmet" },
  ];
  return (
    <div class="stories">
      {conteudoStories.map((c) => <Story imagem={c.imagem} texto={c.texto}/>)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
