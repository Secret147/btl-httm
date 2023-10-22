
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home/home';
import MainSample from './components/manage_sample/MainSample';
import SampleDetail from './components/manage_sample/sampleDetail';
import AddSample from './components/manage_sample/addSample';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="" element={<Home></Home>}></Route>
            <Route path='/manage-sample' element={<MainSample></MainSample>}></Route>
            <Route path='/sample/:id' element={<SampleDetail></SampleDetail>}></Route>
            <Route path='/add-sample' element={<AddSample></AddSample>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
