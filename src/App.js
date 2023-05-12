import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ProductList } from './products/productsList';
import { Cart } from './products/cart';

function App() {
  return (
    <Provider store={store}>
      <Cart />
      <ProductList />
    </Provider>
  );
}

export default App;
