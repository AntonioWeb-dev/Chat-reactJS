import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
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
  const history = useHistory();

  const validate = () => {
    let errors = {};
    if (passwordValidation(password)) {
      errors.password = 'Senha inválida';
    }
    if (emailValidation(email)) {
      errors.email = 'E-mail inválido';
    }
    if (nameValidation(name)) {
      errors.name = 'Nome invalido';
    }
    if (passwordMatchValidation(password, confirmPassword)) {
      errors.passwordNotMatch = 'Senhas diferentes';
    }
    return errors
  }

  const handleAvatar = (e) => {
    setFile(e.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    const errorsFound = validate();
    if (Object.keys(errorsFound).length > 0) {
      setErrors(errorsFound)
      return;
    }
    const data = {
      "name": name,
      "email": email,
      "age": 5,
      "password": password
    }
    const formData = new FormData();
    formData.append('body', JSON.stringify(data));
    formData.append('avatar', file);
    const result = await axios.post('http://localhost:3100/users', formData,
      {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
    )
    if (result.status === 200) {
      history.push('/login');
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
              <input type="file" id="avatar" name="avatar" onChange={handleAvatar} />
            </div>
          </div>

          <div>

            <InputText
              NameInput="Nome"
              handleChange={setName}
              value={name}
              typeInput="text"

            />
            {errors.name ? <div className="error">{errors.name}</div> : null}
          </div>
          <div>

            <InputText
              NameInput="E-mail"
              handleChange={setEmail}
              value={email}
              typeInput="text"
            />
            {errors.email ? <div className="error">{errors.email}</div> : null}
          </div>
          <div>

            <InputText
              NameInput="Senha"
              handleChange={setPassword}
              value={password}
              typeInput="password"
            />
            {errors.password ? <div className="error">{errors.password}</div> : null}

          </div>
          <div>

            <InputText
              NameInput="Confirmar senha"
              handleChange={setConfirmPassword}
              value={confirmPassword}
              typeInput="password"
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
