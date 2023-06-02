import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Movis from "../components/Movis";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, //nav main
        lg: `"nav main"`, //nav , main
      }}
    >
      {/* <GridItem area="nav">
        <NavBar />
      </GridItem> */}
      <GridItem area="main">
        <Movis />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
