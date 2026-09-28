// PascalCase - App.tsx
// HeaderHeading - App.tsx
// ExceploDeNomeDeComponente

import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container/";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>Testando meu componente de heading</Heading>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
