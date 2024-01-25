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
import { Formik } from 'formik';

export const SellForm = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <Container p={2} m={2}>
    <Formik
    
    initialValues={{ email: '', username: '' }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
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
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="email"
        />
        {errors.email && touched.email && errors.email}
        <Input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        {errors.username && touched.username && errors.username}
        
        <FormControl>
            
            <Select placeholder='Select category'>
                <option>Electronics</option>
                <option>Books</option>
            </Select>
        </FormControl>
        <Input
          type="cell"
          name="cellphone"
          placeholder="cellphone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cellphone}
        />
         <Input
          type="text"
          name="motivation"
          placeholder="motivation"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.motivation}
        />
        
        
        
        
        <Button type="Send" disabled={isSubmitting} variant={"outline"}>
          Submit
        </Button>
      </form>
      </Box>
    )}
  </Formik>
  </Container>
  );
};
