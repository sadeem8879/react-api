import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Container from "react-bootstrap";
import { Row, Col, Card, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import noimg from "./images/noimage.jpeg"

function App() {
  const [tesla, settesla] = useState([]);
  const [search,setsearch]=useState('');
  const [filteredsearch,setfilteredsearch]=useState([]);
  const apikey=process.env.REACT_APP_API_KEY;
  useEffect(() => { 
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-08-16&sortBy=publishedAt&apiKey=${apikey}`)
      // axios.get('https://instagram-scraper-api3.p.rapidapi.com/similar_users_v2?username_or_id=therock')
    // axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-09-11&to=2024-09-11&sortBy=popularity&apiKey=20445e53cbc1418cabe5a725fa4284eb')

      .then(response => {
        settesla(response.data.articles)
        setfilteredsearch(response.data.articles)
        console.log(response.data.articles)
      })
      .catch(error => {
        console.error('error fetching data', error);
      });
      console.log("API Key:", apikey);

  }, [apikey]);
  // useEffect(()=>{
  //   const filtered=tesla.filter(item=>
  //      item.title.toLowercase().includes(search.toLowerCase())
  //   );
  //   setfilteredsearch(filtered);
  // },[search,tesla]);
  useEffect(() => {
    const filtered = tesla.filter(item =>
      item.title && item.title.toLowerCase().includes(search.toLowerCase()) 
    );
    setfilteredsearch(filtered);
  }, [search, tesla]);
  
  return (
    <>
      <Container>
        <Row>
          <h1 className='text-center mt-3 mb-3'>Tesla App </h1>
          <input type='text' className='mt-1 mb-3' placeholder='Search By Title' value={search} onChange={e =>setsearch(e.target.value)}/>
          {filteredsearch.map(item => (
            // <Col  style={{height:"600px",width:"300px"}} className="ps-auto ms--2 card-appearence"lg={3}>
            <Col lg={3}>


              {/* <Card lg={3} md={4} sm={6} xs={12} className='me-5 'style={{height:"600px",width:"300px"}}> */}
              <Card lg={3} md={4} sm={6} xs={12} className='  ' style={{width:"277px"}}>
               
                <Card.Img variant="top" src={item.urlToImage ? item.urlToImage : noimg} style={{height:"300px",width:"277px"}}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>

                    {item.content  }<br/><br/>
                    {/* {item.description} */}
                    {/* {item.description ? (item.description.length > 100 ? item.description.slice(0, 60) + '....' : item.description ): 'No descriptio Available Here'} */}
                    {/* {item.description ? (item.description.length > 100 && item.title.length>22 ? item.description.slice(0, 60) + '....' : item.description :item.description.slice(0,50)): 'No descriptio Available Here'} */}
                    {/* {
               item.description
                   ? item.title.length > 60
                    ? item.description.length > 50
               ? item.description.slice(0, 50) + '....'
                 : item.description
                : item.description.length > 60
              ? item.description.slice(0, 60) + '....'
              : item.description
              : 'No description Available Here'
                } */}
  {item.description ? (item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description)
                      : 'No description available.'}      
                  </Card.Text>
                  <div>
                    <div className='flex text-center news-ref'>
                      <h6 className='publish '>Published At:          {item.publishedAt}</h6><small className='publish'></small>
                    </div>
                    <div>

                    </div>
                  </div>
                  <a href={item.url} className='btn btn-primary'>Learn More</a>
                </Card.Body>
              </Card>
            </Col>

          ))}
        </Row>
      </Container>

    </>
  );
}

export default App;
