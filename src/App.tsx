import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Commits from './pages/Commits';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import User from './pages/User';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":login" element={<User />} />
        <Route path=":login/:name/commits" element={<Commits />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
