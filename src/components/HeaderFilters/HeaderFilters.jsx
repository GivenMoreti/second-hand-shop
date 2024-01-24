import React from "react";
import { Stack, Select } from "@chakra-ui/react";

export const HeaderFilters = () => {
  //use the items in the products for categories
  const categories = [
    {
      id: 1,
      category: "Electronics",
    },
    {
      id: 2,
      category: "Automative",
    },
    {
      id: 3,
      category:"Books"
    }
    
  ];
  return (
    <Stack spacing={3}>
      <Select placeholder="Categories" variant={"outline"} size="md">
        {categories.map((item) => {
          return (
            <option key={item.id} value="option1">
              {item.category}
            </option>
          );
        })}
      </Select>
    </Stack>
  );
};
