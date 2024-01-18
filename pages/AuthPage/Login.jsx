import { Input,Button } from "@chakra-ui/react";
import { useState } from "react";


export const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
      
      });
  return (
    <>
        <Input
          placeholder="email"
          type="email"
          fontSize={14}
          size={"sm"}
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <Input
          placeholder="password"
          type="password"
          fontSize={14}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />

        <Button
          width={"full"}
          colorScheme="gray"
          variant="outline"
          size={"sm"}>LOGIN</Button>
    </>
  )
}
