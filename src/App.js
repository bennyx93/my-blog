import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import React, {Component} from 'react';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
            <Routes>
              <Route exact path='/' element={<HomePage />}/>
              <Route path='/about' element={<AboutPage />}/>
              <Route path='/articles-list' element={<ArticlesListPage />}/>
              <Route path='/article/:name' element={<ArticlePage />}/>
              <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
