import { Link } from 'react-router-dom';
import { BsFillChatDotsFill } from "react-icons/bs"
import { Container, Li } from "./style"

function Home() {
  return (
    <Container>
      <header className="header">
        <div className="menu">

          <h1 id="title">NextWorld</h1>

        </div>
        <div className="login-button">
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </header>
      <section className="main">
        <div className="apresentation">
          <div>
            <div className="main-phrase">
              <h1>Conectividade a todo instante</h1>
              <span>O CONTROLE NA SUA MÃO</span>
            </div>
            <button className="button-start">
              <BsFillChatDotsFill color={"#525652"} size={18} />
              <Link to="/register">Experimentar</Link>
            </button>
          </div>
          <div id="main-image">
            <img src="./images/main-image.png" alt="" />
          </div>
        </div>
      </section>

    </Container>
  );
}

export default Home;
