import styled from 'styled-components';
const Body = styled.div`
  width: auto;
  margin:0;
  padding: 0;
`;
const Wrapper = styled.div`
  //width: 35rem;
  background-color: white;
`;

const Letter = styled.article`
  /* position: absolute;
  left: 0;
  right: 0;
  top: 0; */
  width: 25rem;
  max-width: 25rem;
  margin: 0;
  //perspective: 26rem;
`;

const Side = styled.div`
  height: 12rem;
  background-color: #fcfcf8;
  outline: 1px solid transparent;

  &:nth-of-type(1) {
    padding: 2rem 2rem 0;
    border-radius: 1rem 1rem 0 0;
    box-shadow: inset 0 0.75rem 2rem rgba(229, 225, 187, 0.5);
  }

  &:nth-of-type(2) {
    padding: 2rem;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.05), inset 0 -0.57rem 2rem rgba(229, 225, 187, 0.5);
    text-align: right;
  }
`;

const Envelope = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
`;

const FrontEnvelope = styled.div`
  width: 10rem;
  height: 6rem;
  border-radius: 0 0 1rem 1rem;
  overflow: hidden;
  z-index: 9999;
  opacity: 0;

  &::before,
  &::after {
    position: absolute;
    display: block;
    width: 12rem;
    height: 6rem;
    background-color: #e9dc9d;
    transform: rotate(30deg);
    transform-origin: 0 0;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    content: '';
  }

  &::after {
    right: 0;
    transform: rotate(-30deg);
    transform-origin: 100% 0;
  }
`;

const BackEnvelope = styled.div`
  top: -4rem;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  z-index: -9998;
  opacity: 0;
  transform: translateY(-6rem);

  &::before {
    display: block;
    width: 10rem;
    height: 10rem;
    background-color: #e9dc9d;
    border-radius: 1rem;
    content: '';
    transform: scaleY(0.6) rotate(45deg);
  }
`;

const ResultMessage = styled.p`
  opacity: 0;
  transition: all 0.3s 2s;
  transform: translateY(9rem);
  z-index: -9999;
`;

const Contact = () => {
  function addClass() {
    document.body.classList.add("sent");
  }

  return (
    <Body>
      <strong>As funcionalidades desta pagina ainda não estão concluídas <button>Relatar Problema!</button></strong>
      <small>Entre com sua mensagem (opcional) e click no botão enviar</small>
      <Wrapper className="centered">
        <Letter className="letter">
          <Side>
            <h1>Nosso Contato</h1>
            <p>
              <textarea placeholder="Sua Mensagem"></textarea>
            </p>
          </Side>
          <Side>
            <p>
              <input type="text" placeholder="Seu Nome" />
            </p>
            <p>
              <input type="email" placeholder="Seu E-Mail" />
            </p>
            <p>
              <button id="sendLetter" onClick={addClass}>Enviar</button>
            </p>
          </Side>
        </Letter>
        <Envelope className="envelope front"></Envelope>
        <Envelope className="envelope back"></Envelope>
      </Wrapper>
      <ResultMessage className="result-message centered">Obrigado por sua Mensagem!</ResultMessage>
    </Body>  
  );
}

export default Contact;
