import logo from "./logo.svg";
import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "primary",
})`
  background: ${({ primary }) => (primary ? "blue" : "gray")};
`;

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      
      <Container>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Container>
    </>
  );
}

export default App;
