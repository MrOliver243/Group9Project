import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

class FAQ extends Component {
  render() {
    return (
      <div className='container-fluid'>

        <h1>FAQ</h1>
            <Accordion>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="10">

                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="10">
                <Card.Body></Card.Body>
              </Accordion.Collapse>
            </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      How do I make an account?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Click the Sign Up button in the top right and enter your
                    email address, choose a password and then create a username. </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      What if i forget my password?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Placeholder</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      How do I make a review?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body> Placeholder.</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Are you going to be adding more games?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>Yes, hopefully in the future.</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                      Why is The Gateway better than other game databases?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>It was developed by gamers for gamers.</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                      My review has been submitted but i dont see it.
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>Refresh the page and it should appear. Otherwise contact us and we would be happy to help..</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    Where can i find the games genre?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>The genres for each game are located in the games page.
                     You can find the games page in the top right side of the page</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                    Who designed the home page?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>The home page was developed by Akin</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="8">
                    What was TheGateway developed?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>TheGateway was developed in Maynooth University</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="9">
                    How can I donate to TheGateway?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body>We are not currently taking donations?</Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="10">

                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="10 ">
                    <Card.Body></Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="10">

                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body></Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="10">

                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body></Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="10">

                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body></Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>

                  <Accordion.Collapse eventKey="10">
                    <Card.Body></Card.Body>
                  </Accordion.Collapse>
                </Card>


                </Accordion>

      </div>
    );
  }
}

export default FAQ;
