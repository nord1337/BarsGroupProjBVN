import React, { Component } from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText, Button} from 'reactstrap';
import "./../ServicesList/ServicesView.css"

export class CarsView extends Component {

    render() {

        return (
            <div>
            <h2>CARS</h2>
            <CardGroup>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://avatars.mds.yandex.net/get-verba/787013/2a000001609d49f598cf1c7e416f7cdea43f/cattouch"
                  height = "228px"        
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Приорка 
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://xn--80aal0a.xn--80asehdb/uploads/posts/2016-07/1467621243_logo.jpg"
                  height = "228px"
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to additional content.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://versiya.info/uploads/posts/2019-11/1573731926_1.jpg"
                  height = "228px"
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
            </div>
            );

    }
}