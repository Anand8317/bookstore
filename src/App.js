import { Link, Route, Routes } from 'react-router-dom';
import Booklist from './components/Booklist';
import Category from './components/Category';
import './App.css';

function App() {
  return (
    <>
      <nav className="nav-bar">
        <a className="nav-brand" href="#/">Bookstore CMS</a>
        <ul className="nav-links">
          <li><Link to="/" aria-current="page" className="nav-link active-link" href="#/">BOOKS</Link></li>
          <li><Link to="/category" className="nav-link" href="#/categories">CATEGORIES</Link></li>
        </ul>
        <button className="icon-button" type="button">
          <span className="material-icons primary-color">
            person
          </span>
        </button>
      </nav>
      {/* <nav>
        <ul classNameName="nav-link">
          <li><Link to="/">Book List</Link></li>
          <li><Link to="/category">Category</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
