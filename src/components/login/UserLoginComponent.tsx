import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserLoginComponent = (props:any) => {
  return (
    <div>
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="user@gmail.com" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  );
}

export default UserLoginComponent;