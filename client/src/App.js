import { Route } from 'react-router';
import './App.css';
import Home from './components/home';
import Detail from './components/detail';
import Form from './components/form';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
      <Route path ="/pokemon/:id"   exact component={Detail}/>
      <Route path ="/"   exact component={Landing}/>
      <Route path ="/pokemons/add"   exact component={Form}/>
      <Route path ="/:page" exact render={({match}) => <Home  page={match.params.page}/>}/>
    </div>
  );
}

export default App;
