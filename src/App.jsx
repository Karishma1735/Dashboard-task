import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
          <Route path='/'  element={<Home />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
