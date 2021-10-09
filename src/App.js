
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCake from './components/HooksCake';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCake />
      <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
