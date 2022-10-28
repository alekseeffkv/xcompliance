import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import User from './pages/User';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":login" element={<User />} />
        <Route path="*" element={<p>404</p>} />
      </Route>
    </Routes>
  );
};

export default App;
