import 'App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from 'components/Header';
import Home from 'components/Home/Index'
import Category from 'components/Category/Index'
import Brand from 'components/Brand/Index'
import Model from 'components/Model/Index'
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <div className='flex bg-gray-100'>

        <div className='h-screen w-1/6 sticky top-0'>
          <Header />
        </div>

        <div className='h-full w-5/6'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="brand" element={<Brand />} />
            <Route path="model" element={<Model />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
