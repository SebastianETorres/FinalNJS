import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
export const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Productos"}/>
    </div>
  )
}

export default App;