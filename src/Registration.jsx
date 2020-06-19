import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Papa from 'papaparse';


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            npiNumber:0,
            businessAddress:"",
            telephoneNumber:0,
            email:"",
            myData: []
           

        }
        
    }
   
    componentDidMount(){
      fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then((data) => this.setState({ myData: data }));

  }
 
 
 
    firstNamehandler=(e)=>{
      this.setState({firstName:e.target.value})
    }
    lastNamehandler=(e)=>{
        this.setState({lastName:e.target.value})
      }
    npinumberhandler=(e)=>{
        this.setState({npiNumber:e.target.value})
      }
    buisnessadresshandler=(e)=>{
        this.setState({businessAddress:e.target.value})
      }
    telephonehandler=(e)=>{
        this.setState({telephoneNumber:e.target.value})
      }
    emailhandler=(e)=>{
        this.setState({email:e.target.value})
      }
    submithandler=(e)=>{
        e.preventDefault();
        console.log(this.state.firstName);
        alert(this.state.firstName);
        
           const myObjStr = JSON.stringify(this.state.data);
            
        console.log(myObjStr);
    }
    dataSee=()=>{
      //  const myObjStr = JSON.stringify(this.state.data);
            
      //   console.log(myObjStr);
    }
    render() {
        return (
            <div>
         {console.log(this.state.myData)}
     
   
 <Form style={{border:'1px solid black'}}>
  <Form.Group>
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="First Name" value={this.state.value} onChange={this.firstNamehandler}/>
    <Form.Control type="text" placeholder="Last Name" value={this.state.value} onChange={this.lastNamehandler} />
  </Form.Group>
  <Form.Group>
    <Form.Label>NPI Number</Form.Label>
    <Form.Control type="number" placeholder="NPI number" value={this.state.value} onChange={this.npinumberhandler}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Business Address</Form.Label>
    <Form.Control type="text" placeholder="Address" name="address-line-1" id="address-line-1" value={this.state.value} onChange={this.buisnessadresshandler}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Telephone Number</Form.Label>
    <Form.Control type="tel" placeholder="phone number" value={this.state.value} onChange={this.telephonehandler}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.state.value} onChange={this.emailhandler}/>
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={this.submithandler}>
    Submit
  </Button>
</Form>
       
            </div>
  
        );
    }
}

export default Registration;