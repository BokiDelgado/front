import { Button } from "@heroui/react";

interface ButtonLoginProps {
  text: string;
  type?: 'button' | 'submit' | 'reset'; // Añade el tipo de botón
}

function ButtonLogin({ text, type = 'submit' }: ButtonLoginProps) {
  return (
    <Button className="login__button" type={type} radius="none">
      {text}
    </Button>
  );
}

export default ButtonLogin;