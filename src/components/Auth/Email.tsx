import { Input } from "@heroui/react";
// import { span } from "framer-motion/client";
import { useForm} from "react-hook-form"

export default function Email() {

 const {formState: {errors}} = useForm();
  const {register} = useForm();

  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      <Input
        className="login__input_email"
        label="Correo Electrónico"
        placeholder="Ingresar correo"
        radius="none"
        type="email"
        {...register("email", { required: true, message: "Nombre es requerido" })}
        // {...errors.email && <span> {errors.email.message} </span>}
      />
      
    </div>

  );
}