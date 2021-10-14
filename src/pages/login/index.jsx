import { useContext, useState } from "react";
import { InputText } from "../../components/input-text";
import { Container, LoginForm } from "./style";
import { ButtonSend } from "../../components/button-send";
import { Axios } from "../../services/axios";
import { emailValidation, passwordValidation } from "../../validations";
import { UserContext } from '../../context/userContext';
import { useHistory } from 'react-router';

function LoginPage() {
  const context = useContext(UserContext);
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    email: ""
  });
  const [rememberUser, setRememberUser] = useState("");

  const validate = () => {
    let errors = {};
    if (passwordValidation(password)) {
      errors.password = 'Senha inválida';
    }
    if (emailValidation(email)) {
      errors.email = 'E-mail inválido';
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    const errorsFound = validate();
    if (Object.keys(errorsFound).length > 0) {
      setErrors(errorsFound);
      return;
    }
    const data = {
      email,
      password
    };
    const result = await Axios.post("/login", data);
    if (result.status === 200) {
      context.login({ ...result.data })
      history.push('/chat');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <div className="container-form">
          <h1 id="title">NextWorld</h1>

          <InputText
            NameInput="Email"
            handleChange={setEmail}
            value={email}
            typeInput="text"
          />
          {errors.email ? <div className="error">{errors.email}</div> : null}
          <InputText
            NameInput="Password"
            handleChange={setPassword}
            value={password}
            typeInput="password"

          />
          {errors.password ? (
            <div className="error">{errors.password}</div>
          ) : null}
          <label htmlFor="remember-login" className="remember-user">
            <input
              id="remember-login"
              type="checkbox"
              name="remember-login"
              onClick={() => setRememberUser(!rememberUser)}
            />
            Lembrar usuario
          </label>
          <ButtonSend Name="Entrar" />
        </div>
      </LoginForm>
    </Container>
  );
}

export default LoginPage;
