import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Movis from "./components/Movis";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Movis />
      </GridItem>
    </Grid>
  );
}

export default App;
