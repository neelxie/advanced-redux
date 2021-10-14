
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCake from './components/HooksCake';
import IceCreamContainer from './components/icecream';
import NewCakes from './components/NewCakes';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer cake />
      <ItemContainer />
      <HooksCake />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakes />
    </div>
    </Provider>
  );
}

export default App;
