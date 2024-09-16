import React from "react";
import noimg from "./images/noimage.jpeg"
import { Row, Col, Card, Container } from "react-bootstrap";
import noimg from "./images/noimage.jpeg"

function Tesla(){
    return(
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
                  <a href={item.url} className='btn btn-primary'>Learn More</a>
                </Card.Body>
              </Card>
            </Col>

          ))}
        </Row>
      </Container>

        </>
    )
}