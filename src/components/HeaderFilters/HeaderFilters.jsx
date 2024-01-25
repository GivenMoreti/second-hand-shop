import React from "react";
import { VStack, Select } from "@chakra-ui/react";


export const HeaderFilters = () => {
  //use the items in the products for categories
 
  
  return (
    <VStack spacing={3}>
       <Select placeholder="Categories" variant={"outline"} size="md">
        {/* {categories.map((item) => {
          return (
            <option key={item.id} value="option1">
              {item.category}
            </option>
          );
        })} */}
      </Select> 
    
    </VStack>
  );
};
