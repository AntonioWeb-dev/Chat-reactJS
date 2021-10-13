import { useState } from 'react';
import { isEmail } from "validator";
import { InputText } from '../../components/input-text';
import { Container, LoginForm } from "./style";
import { ButtonSend } from "../../components/button-send";

function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  })
  const [rememberUser, setRememberUser] = useState('');

  const validate = () => {
    let errors = {};
    if (!email || !isEmail(email)) {
      errors.email = "Email invalido"
    }
    if (!name || name.length < 3) {
      errors.name = "Nome invalido"
    }
    return errors
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorsFound = validate();
    if (errorsFound) {
      setErrors(errorsFound)
      return;
    }
  }

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <div className="container-form">
          <h1 id="title">NextWorld</h1>

          <InputText
            NameInput="Name"
            handleChange={setName}
            value={name}
          />
          {errors.name ? <div className="error">{errors.name}</div> : null}
          <InputText
            NameInput="Email"
            handleChange={setEmail}
            value={email}
          />
          {errors.email ? <div className="error">{errors.email}</div> : null}
          <label htmlFor="remember-login" className="remember-user">
            <input id="remember-login" type="checkbox" name="remember-login" onClick={() => setRememberUser(!rememberUser)} />
            Lembrar usuario
          </label>
          <ButtonSend Name="Entrar" />


        </div>
      </LoginForm>
    </Container>
  );
}

export default LoginPage;
