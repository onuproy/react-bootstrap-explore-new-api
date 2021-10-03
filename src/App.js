import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-03&sortBy=publishedAt&apiKey=a015b0a244184ba3af40c8ad9c962459')
      .then(res => res.json())
      .then(data => setNews(data.articles))

  }, []);

  return (
    <div className="App">
      <h2>To day all english news in world</h2>
      {news.length === 0 ?
      <Spinner animation="border" />
      :
        <Row xs={2} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>
      }
    </div>
  );
}

export default App;
