import {Button} from "@heroui/react";

interface SPButtonProps {
    text: string;
  }
  
  function ButtonGoogle({ text }: SPButtonProps) {
  
    return (
      <>
        <Button className="login__button-Google" type="submit" radius="none">
          {text}
        </Button>
      </>
    );
  }
  export default ButtonGoogle;