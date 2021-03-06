import { AppRoutes } from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function RickAndMorty() {
  return (
    <Provider store={ store }>
        <AppRoutes />
    </Provider>
    
  );
}

export default RickAndMorty;
