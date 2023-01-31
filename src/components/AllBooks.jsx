
import { Component } from 'react'
import books from "../books/scifi.json"
import {Button,Card,Container,Row,Col} from 'react-bootstrap';
import { useState } from "react"

class AllBooks extends Component{
  state={
    selectedTitle:null
  }
  render(){

    return(
        
        <Container >
            <h4>{this.state.selectedTitle && "Selected Book:" +this.state.selectedTitle} </h4>
        <Row >
          
          {books.map((book)=>{
        return(
            <Col xs={12} md={6} lg={3} className="text-center mt-5" key={book.asin}>
        <Card  style={{ width: '18rem',height:"550px"}} >
        <Card.Img variant="top" src={book.img} style={{height:"330px"}}/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Price:£{book.price}
            <br />
            Category:{book.category}
          </Card.Text>
          <Button variant="primary"   onClick={()=>{
            console.log(book.title)
           this.setState({selectedTitle:book.title})
            }}>
            Select Book
          </Button>
        </Card.Body>
      </Card>

   </Col>
        )
   
 
     })}
           
            </Row>
         </Container>
    


    )

  }

}

export default AllBooks