import {Input} from "@heroui/react";
import { useForm} from "react-hook-form"

export default function Password() {

  const {register} = useForm();

  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
        <Input
          className="login__input_pass"
          label="Contraseña"
          placeholder="*******"
          radius="none"
          type="pass"
          {...register("password", { required: true })}
        />
    </div>
  );
}