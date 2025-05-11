import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      <Greeting name="Abdullahi" surname="Dahir" />

      <Counter />
    </>
  );
}

export default App;
