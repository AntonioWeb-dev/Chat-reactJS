import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Container, RegisterForm } from "./style";
import { InputText } from "../../components/input-text";
import { ButtonSend } from '../../components/button-send';
import {
  emailValidation,
  nameValidation,
  passwordMatchValidation,
  passwordValidation
} from '../../validations';

function RegisterPage() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    errors.email = emailValidation(email);
    errors.name = nameValidation(name);
    errors.password = passwordValidation(password);
    errors.passwordNotMatch = passwordMatchValidation(password, confirmPassword);
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

      <RegisterForm onSubmit={handleSubmit}>
        <div className="form-container">
          <h1 id="title">NextWorld</h1>
          <div className="avatar">
            <div id="avatar-icon">
              <FaUserCircle size={113} color={"#2e75f0"} />
            </div>
            <div className="profile-image">
              <label htmlFor="avatar">Foto de perfil</label>
              <input type="file" id="avatar" name="avatar" onChange={(e) => setFile(e.target.value)} />
            </div>
          </div>

          <div>

            <InputText
              NameInput="Nome"
              handleChange={setName}
              value={name}
            />
            {errors.name ? <div className="error">{errors.name}</div> : null}
          </div>
          <div>

            <InputText
              NameInput="E-mail"
              handleChange={setEmail}
              value={email}
            />
            {errors.email ? <div className="error">{errors.email}</div> : null}
          </div>
          <div>

            <InputText
              NameInput="Senha"
              handleChange={setPassword}
              value={password}
            />
            {errors.password ? <div className="error">{errors.password}</div> : null}

          </div>
          <div>

            <InputText
              NameInput="Confirmar senha"
              handleChange={setConfirmPassword}
              value={confirmPassword}
            />
            {errors.passwordNotMatch ? <div className="error">{errors.passwordNotMatch}</div> : null}

          </div>
          <ButtonSend Name="Registrar" />
        </div>
      </RegisterForm>
      <div id="info">
        <img src="/images/main-image.png" alt="" />
        <h2>Você ja possui uma conta?</h2>
        <span>Faça login, se você já está cadastrado.</span>
        <div className="login-button">
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default RegisterPage;
