import { Provider } from 'react-redux';
import { store } from './store';
import EnhancedGameScreen from './components/EnhancedGameScreen';
import './styles/globals.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EnhancedGameScreen />
      </div>
    </Provider>
  );
}

export default App;