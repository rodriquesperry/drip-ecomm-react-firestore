import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import ProductDetail from './routes/product-detail/product-detail.component';
import Checkout from './routes/checkout-page/checkout.component';

const App = () => {
  {
    /**
      Step 1: import BrowserRouter and wrap App with it in index.js
      Step 2: import Routes and Route as shown above
      Step 3: Wrap element which is Route in Routes and add attributes
    */
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='/product-detail/*' element={<ProductDetail />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
