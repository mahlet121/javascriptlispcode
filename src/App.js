import React from 'react';
import './App.css';
import Registration from './Registration';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataImport from'./DataImport';
function App() {
  return (
    <div>
 <Container>
   <Row>
    
    <Col><Registration /></Col>
    <Col><DataImport /></Col>
  </Row>
</Container>
     
    </div>
  );
}

export default App;
