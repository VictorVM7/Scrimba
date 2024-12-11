import './App.css'
import Header from "./components/Header.tsx";
import Main from "./Layout/Main.tsx";
import InputIngredients from "./components/Input.tsx";

function App() {

  return (
      <>
          <Header/>
          <InputIngredients/>
          <Main />
      </>
  )
}

export default App
