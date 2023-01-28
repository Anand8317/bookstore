import { Link, Route, Routes } from 'react-router-dom';
import Booklist from './components/Booklist';
import Category from './components/Category';

function App() {
  return (
    <>
      <nav>
        <ul className="nav-link">
          <li><Link to="/">Book List</Link></li>
          <li><Link to="/category">Category</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
