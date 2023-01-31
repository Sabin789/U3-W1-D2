import { Container,Row,Col } from "react-bootstrap";

const Welcome = () => {
    return ( 
        <Container className="mt-5 mb-5">
         <Row >
          <Col xs={12} className="text-center">
            <div className="">
             <h3>Epi-Books Store</h3>
             <p>You can find all the books below</p>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem labore necessitatibus assumenda aperiam sequi optio velit, cum perspiciatis corporis fugit? Aperiam nostrum pariatur magni facilis accusamus nam consectetur beatae?</p>
            </div>
           </Col>
          </Row>
        </Container>
     );
}
 
export default Welcome;