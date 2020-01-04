import React from 'react';
import {
  Card, Button, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const BoardComponent = (props: any) => {
  return (
    <div className="boardComponent">
    <CardDeck>
      <Card>
        <CardBody>
          <CardTitle>Things to Do</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Done</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default BoardComponent;