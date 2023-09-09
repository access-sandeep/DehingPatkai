import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DehingData } from './DehingData';
import { useState } from 'react';
import Layout from './global_partials/Layout';
import Home from './pages/Home';
import All from './pages/All';
import Fresh from './pages/Fresh';
import Books from './pages/Books';
import Electronics from './pages/Electronics';
import GiftIdeas from './pages/GiftIdeas';
import Baby from './pages/Baby';
import BuyAgain from './pages/BuyAgain';

function App() {  
  const [products, setProduct] = useState([{id: Date.now(), name:'MoboDev12', price: 200001, description:'along desc 1'}]); 

  return (
      <div className="App">      
        <DehingData.Provider value={{products, setProduct}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="all" element={<All />} />
                <Route path="fresh" element={<Fresh />} />
                <Route path="books" element={<Books />} />
                <Route path="electronics" element={<Electronics />} />
                <Route path="gift_ideas" element={<GiftIdeas />} />
                <Route path="baby" element={<Baby />} />
                <Route path="buy_again" element={<BuyAgain />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DehingData.Provider> 
      </div>   
  );
}

export default App;
