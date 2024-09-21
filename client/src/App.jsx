
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios";
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Loader from './components/Loader'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Login from './pages/Admin/Login';

function App() {
  const { loading, portfolioData, reloadData } = useSelector(state => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading())
      const response = await axios.get("http://localhost:5000/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data))
      dispatch(ReloadData(false))
      dispatch(HideLoading())
      console.log(response.data);
    } catch (error) {
      dispatch(HideLoading())
      console.log(error)
    }
  }

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData])

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData])

  return (
    <>
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/admin-login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
