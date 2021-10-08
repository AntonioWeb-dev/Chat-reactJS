import { Container, RegisterForm } from "./style";
import { InputText } from "../../components/input-text";
import { useFormik } from "formik";
import { ButtonSend } from '../../components/button-send';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: values => {
      console.log(values)
    },
  });
  return (
    <Container>

      <RegisterForm onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <h1 id="title">NextWorld</h1>
          <InputText
            NameInput="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputText
            NameInput="Email"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputText
            NameInput="Age"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
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
