import './App.css';
import { Layout } from './components/Layout';
import { NewsCard } from './components/NewsCard';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { News } from './pages/News';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hir/:id' element={<News />}/>
          <Route path='/kapcsolat' element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
