import { Home } from "./components/Home";
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function RickAndMorty() {
  return (
    <Provider store={ store }>
      <div className="rickAndMorty__container">
        <Home />
      </div>
    </Provider>
    
  );
}

export default RickAndMorty;
