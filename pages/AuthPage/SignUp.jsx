import React, { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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
        placeholder="username"
        type="text"
        size={"sm"}
        fontSize={14}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          size={"sm"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button width={"full"} colorScheme="gray" variant="outline">
        Sign up
      </Button>
    </>
  );
};
