function ExibeUsuario(props) {
  return (
    <>
      <img src={props.imagem} />
      <div class="texto">
        <strong>{props.nomeUsuario}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </>
  );
}

export default function Usuario() {
  return (
    <div class="usuario">
      {
        <ExibeUsuario
          imagem="assets/img/catanacomics.svg"
          nomeUsuario="catanacomics<"
          nome="Catana"
        />
      }
    </div>
  );
}
