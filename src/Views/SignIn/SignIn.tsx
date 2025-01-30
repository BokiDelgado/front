import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from "@heroui/react";
import './SignIn.css'; // Importa tus estilos CSS
import image_form from "./../../assets/image/image_form.jpg";
import ButtonLogin from "../../components/Auth/ButtonLogin";
import ButtonGoogle from "../../components/Auth/ButtonGoogle"; // Importa el botón de Google
import Alternative from "../../components/Auth/Alternative"; // Importa el componente Alternative

export default function SignIn() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate(); // Hook para redireccionar
  const [userRole, setUserRole] = useState<'user' | 'admin'>('user'); // Estado para el rol

  const onSubmit = handleSubmit((data) => {
    console.log(data); // Muestra los datos del formulario en la consola
    reset(); // Limpia el formulario después de enviarlo

    // Redirige según el rol seleccionado
    if (userRole === 'admin') {
      navigate('/admin'); // Redirige al dashboard de administrador
    } else {
      navigate('/user'); // Redirige al dashboard de usuario
    }
  });

  return (
    <>
      {/* Contenedor principal */}
      <section className="login__container">
        {/* Contenedor de la izquierda */}
        <div className="login__left-container">
          {/* Contenedor del formulario */}
          <div className="login__form-cotainer">
            <h1 className="form__title">Iniciar Sesión</h1>

            {/* Botón de Iniciar con Google */}
            <ButtonGoogle text="Continuar con Google" />

            {/* Componente Alternative (línea divisoria o texto) */}
            <Alternative />

            {/* Formulario de inicio de sesión */}
            <form className="login__form" onSubmit={onSubmit}>
              {/* Campo de correo electrónico */}
              <div className="login_input_email">
                <Input
                  label="Correo Electrónico"
                  placeholder="Ingresar correo"
                  radius="none"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <span className="login_email_error">Es necesario ingresar correo electrónico</span>
              )}

              {/* Campo de contraseña */}
              <div className="login_input_pass">
                <Input
                  label="Contraseña"
                  placeholder="*******"
                  radius="none"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
                <span className="login_pass_error">Es necesario ingresar la contraseña</span>
              )}

              {/* Selector de rol */}
              <div className="login_role_selector">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={userRole === 'user'}
                    onChange={() => setUserRole('user')}
                  />
                  Usuario
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={userRole === 'admin'}
                    onChange={() => setUserRole('admin')}
                  />
                  Administrador
                </label>
              </div>

              {/* Enlace para recuperar contraseña */}
              <p className="login__forgot-password">¿Olvidaste la contraseña?</p>

              {/* Botón de inicio de sesión */}
              <ButtonLogin text="Iniciar" type="submit" />
            </form>

            {/* Enlace para registrarse */}
            <p className="login__dont-account">
              ¿No tienes una cuenta? <a href="/registro">Regístrate</a>
            </p>
          </div>
        </div>

        {/* Contenedor de la derecha (imagen) */}
        <div className="login__right-container">
          <img src={image_form} className="image_form" alt="Form" />
        </div>
      </section>
    </>
  );
}