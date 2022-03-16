

import {Form,Button} from 'react-bootstrap'

const Create = () => {
    return <div className="borderline">

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
      
    <Form.Label>Room No.</Form.Label>
    <Form.Control type="text" placeholder="Enter Room Name/No." />

    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Enter Price" />
    
    <Form.Label>Additional info(category/features)</Form.Label>
    <Form.Control type="text" placeholder="" />

    <Form.Check type="checkbox" label="Available?" />

  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div> 

}

export default Create
