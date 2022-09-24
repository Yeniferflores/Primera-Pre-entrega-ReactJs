import NavBar from './Components/NavBar/NavBar';
import CartWidget from './Components/NavBar/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {

  let miEstilo = {backgroundColor : "orange"};
  
  return (
    <div ClassName="main" style={miEstilo}>
      <NavBar/>
      <ItemListContainer greeting= "Bienvenidos a mi E-Commerce"/>
      
    </div>
  );
}



export default App;
