import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './components/Products.jsx';
import Home from './components/Home.jsx';
import ProductPage from './components/ProductPage.jsx'
import { ThemeProvider } from './ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />}/>
            <Route path="products/:productId" element={<ProductPage />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
