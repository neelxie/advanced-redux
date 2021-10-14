
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCake from './components/HooksCake';
import IceCreamContainer from './components/icecream';
import NewCakes from './components/NewCakes';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCake />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakes />
    </div>
    </Provider>
  );
}

export default App;
