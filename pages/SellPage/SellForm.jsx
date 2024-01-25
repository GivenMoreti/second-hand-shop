import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Select,
  Container,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Formik } from "formik";


export const SellForm = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <Container p={2} m={2}>
      <Formik
        initialValues={{
          email: "",
          username: "",
          cellphone: "",
          motivation: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          //   username
          if (!values.username) {
            errors.username = "Required";
          }
          // motivation
          if (!values.motivation) {
            errors.motivation = "Required";
          }
          // cellphone
          if (!values.cellphone) {
            errors.cellphone = "Required";
          } 

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Box m={4} p={4} gap={4} justifyContent={"space-between"}>
            <form onSubmit={handleSubmit}>
              <FormLabel color={"whiteAlpha.500"}>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
                p={6}
                mb={4}
              />
              {errors.email && touched.email && errors.email}
              <FormLabel color={"whiteAlpha.500"}>Username</FormLabel>
              <Input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                p={6}
                mb={4}
              />
              {errors.username && touched.username && errors.username}

              <FormLabel color={"whiteAlpha.500"}>
                What is the category of your products?
              </FormLabel>
              <FormControl mb={4}>
                <Select placeholder="Select category" color={"whiteAlpha.500"}>
                  <option>Electronics</option>
                  <option>Books</option>
                </Select>
              </FormControl>

              <FormLabel color={"whiteAlpha.500"}>Cellphone</FormLabel>
              <Input
                type="tel"
                name="cellphone"
                maxLength={10}
                placeholder="cellphone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cellphone}
                p={6}
                mb={4}
              />
              {errors.cellphone && touched.cellphone && errors.cellphone}
              <FormLabel color={"whiteAlpha.500"}>
                Give us a brief motivation
              </FormLabel>
              <Input
                type="text"
                name="motivation"
                placeholder="motivation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.motivation}
                p={10}
                mb={4}
              />
              {errors.motivation && touched.motivation && errors.motivation}
              <Button
                type="Send"
                disabled={isSubmitting}
                variant={"outline"}
                w={"full"}
              >
                Submit
              </Button>
            </form>
          </Box>
        )}
      </Formik>
    </Container>
  );
};
