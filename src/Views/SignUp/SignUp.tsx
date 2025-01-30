import { Input, Link } from "@heroui/react";
import image_form from "./../../assets/image/image_form.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import './SignIn.css';
import Alternative from "../../components/Auth/Alternative";
import ButtonGoogle from "../../components/Auth/ButtonGoogle";
import Buttonsignup from "../../components/Auth/ButtonLogin";
import { useNavigate } from "react-router-dom";

// Define la estructura del formulario, si lo deseas, puedes usar este tipo para mejor claridad
interface FormInput {
    nombre: string;
    email: string;
    password: string;
    ConfirmarPassword: string;
}

export default function SignUp() {
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset,
        watch,
    } = useForm<FormInput>();
    const navigate = useNavigate(); 


    const onSubmit: SubmitHandler<FormInput> = (data) => {
        // console.log(data);
        // alert(JSON.stringify(data));
        navigate('/iniciar-sesion')
        reset(); 
    };

    return (
        <section className="signup__container">
            <div className="signup__left-container">
                <div className="signup__form-cotainer">
                    <h1 className="form__title">Regístrate</h1>
                    <ButtonGoogle text="Continuar con Google" />
                    <Alternative />

                    <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="signup_input_pass">
                            <Input
                                label="Nombre de usuario"
                                placeholder="Ingresar nombre de usuario"
                                radius="none"
                                type="text"
                                {...register("nombre", { required: "Nombre es requerido" })}
                                aria-invalid={errors.nombre ? "true" : "false"}
                            />
                        </div>
                            {errors.nombre && (
                                <span className="signup_pass_error">{errors.nombre.message}</span>
                            )}

                        <div className="signup_input_email">
                            <Input
                                label="Correo Electrónico"
                                placeholder="Ingresar correo"
                                radius="none"
                                type="email"
                                {...register("email", { required: "Correo electrónico es requerido" })}
                            />
                        </div>
                            {errors.email && (
                                <span className="signup_email_error">{errors.email.message}</span>
                            )}

                        <div className="signup_input_pass">
                            <Input
                                label="Contraseña"
                                placeholder="*******"
                                radius="none"
                                type="password"
                                {...register("password", { required: "Contraseña es requerida" })}
                            />
                        </div>
                            {errors.password && (
                                <span className="signup_pass_error">{errors.password.message}</span>
                            )}

                        <div className="signup_input_pass">
                            <Input
                                label="Repetir contraseña"
                                placeholder="*******"
                                radius="none"
                                type="password"
                                {...register("ConfirmarPassword", {
                                    required: "Las contraseñas no coinciden",
                                    validate: (value) =>
                                        value === watch("password") || "Las contraseñas no coinciden",
                                })}
                            />
                        </div>
                        {errors.ConfirmarPassword && (
                            <span className="signup_pass_error">
                                {errors.ConfirmarPassword.message}
                            </span>
                        )}

                        <p className="signup__forgot-password">¿Olvidaste la contraseña?</p>
                        {/* <Buttonsignup href="/iniciar-sesion" text="Iniciar" type="submit"/> */}
                        <Buttonsignup text="Iniciar" type="submit" />
                    </form>

                    <p className="signup__dont-account">
                        ¿Ya tienes una cuenta? <a href="/iniciar-sesion">Iniciar Sesión</a>
                    </p>
                </div>
            </div>

            <div className="signup__right-container">
                <img src={image_form} alt="Formulario de registro" className="image_form" />
            </div>
        </section>
    );
}
