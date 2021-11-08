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
                    Приорка серая
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Обычная
                  </CardSubtitle>
                            <CardText>
                                Прекрасная машина. Топ за свои деньги!
                  </CardText>
                  <Button>
                    Заказать
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
                    Приорка белая
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Обычная
                  </CardSubtitle>
                  <CardText>
                    Такой же топ как и серая, можешь взять и ее!
                  </CardText>
                  <Button>
                    Заказать
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
                    Приорка черная
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    БПАН
                  </CardSubtitle>
                            <CardText>
                                Самый лучший вариант из всех предложенных. Будешь самым крутым на районе инфа сотка!
                  </CardText>
                  <Button>
                    Заказать.
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
            </div>
            );

    }
}