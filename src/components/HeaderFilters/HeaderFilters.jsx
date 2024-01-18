import React from "react";
import { Stack, Select } from "@chakra-ui/react";

export const HeaderFilters = () => {
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
      category: "Books",
    },
  ];
  return (
    <Stack spacing={3}>
      <Select placeholder="Categories" variant={"filled"} size="md">
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
