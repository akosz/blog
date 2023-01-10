import './App.css';
import { Layout } from './components/Layout';
import { NewsCard } from './components/NewsCard';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { News } from './pages/News';
import { Index } from './admin/pages/Index';
import { News as AdminNews } from "./admin/pages/news/News";
import { Add } from './admin/pages/news/Add';
import { Edit } from './admin/pages/news/Edit';
import { useEffect, useState } from 'react';
import newsjson from './news.json'
import { NewsList } from './pages/NewsList';

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsjson);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home news={news}/>} />
          <Route path='/hirek' element={<NewsList news={news} />}/>
          <Route path='/hir/:id' element={<News />} />
          <Route path='/kapcsolat' element={<Contact />} />

          <Route path='/admin' element={<Index />}>
            <Route path='news' element={<AdminNews />}>
              <Route path='add' element={<Add news={news} handleChange={setNews}/>} />
              <Route path='edit' element={<Edit />} />
            </Route>
          </Route>

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
