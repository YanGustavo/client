import {Body} from "./styles";
const Contact = () => {
  function addClass() {
    document.body.classList.add("sent");
  }
  //https://codepen.io/bobbykorec/pen/qOGbyr

  //https://codepen.io/bobbykorec/pen/qOGbyr
  //https://codepen.io/wwwebneko/pen/RRQKze code to learn about transition to envelope 
  return (
    <Body>
  <strong>As funcionalidades desta pagina ainda não estão concluídas <button>Relatar Problema!</button></strong>
  <small>Entre com sua mensagem (opcional) e click no botão enviar</small>
<div className="wrapper centered">
  <article className="letter">
    <div className="side">
      <h1>Nosso Contato</h1>
      <p>
        <textarea placeholder="Sua Mensagem"></textarea>
      </p>
    </div>
    <div className="side">
      <p>
        <input type="text" placeholder="Seu Nome" />
      </p>
      <p>
        <input type="email" placeholder="Seu E-Mail" />
      </p>
      <p>
        <button id="sendLetter" onClick={() => addClass()}>Enviar</button>
      </p>
    </div>
  </article>
  <div className="envelope front"></div>
  <div className="envelope back"></div>
</div>
<p className="result-message centered">Obrigado por sua Mensagem!</p>
</Body>  
  );
}
export default Contact;