// import React, { useState } from "react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { Products } from "../Products/Products";
// import { CartPage } from "../../../pages/CarPage/CartPage";

// export const TabHeader = () => {
//   const [show, setShow] = useState(true);
//   return (
//     <Tabs variant="enclosed">
//       <TabList>
//         <Tab onChange={() => setShow(false)}>Products</Tab>
//         <Tab>Cart</Tab>
//       </TabList>
//       <TabPanels>
//         {show ? (
//           <TabPanel>
//             <Products />
//           </TabPanel>
//         ) : (
//           <TabPanel>
//             <CartPage />
//           </TabPanel>
//         )}
//       </TabPanels>
//     </Tabs>
//   );
// };
