import React, { Component } from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText, Button} from 'reactstrap';
import "./ServicesView.css"

export class ServicesView extends Component {

    render() {
        return (
        <div>
            <h2>Технические услуги</h2>
                <CardGroup>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://www.tts.ru/upload/iblock/9e4/shinomontazh.jpg"
                            height = "228px"
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Шиномонтаж
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                500р за колесо
                            </CardSubtitle>
                            <CardText>
                                Приходите со своими колесами.
                            </CardText>
                            <Button>
                                Купить
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://www.tts.ru/upload/iblock/a29/zamena-masla-v-dvigatele.jpg"
                            height = "228px"
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Замена масла
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                1000р
                            </CardSubtitle>
                            <CardText>
                                Используем подсолнечное масло. 
                            </CardText>
                            <Button>
                                Купить
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://www.tts.ru/upload/iblock/cd4/econom-to.jpg"
                            height = "228px"
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Техническое обслуживание
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                5000р
                            </CardSubtitle>
                            <CardText>
                                Обслужим по кайфу.
                            </CardText>
                            <Button>
                                Купить
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            <h2>Косметические услуги</h2>
                <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://www.tts.ru/upload/iblock/33d/полная_покраска_авто.jpg"
                        height = "228px"
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Покраска авто
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            70000р.
                        </CardSubtitle>
                        <CardText>
                            Покрасим в черный вашу приорку.
                        </CardText>
                        <Button>
                            Купить
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://www.tts.ru/upload/iblock/c3d/tonirovka.jpg"
                        height = "228px"
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Тонировка
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            3000р
                        </CardSubtitle>
                        <CardText>
                            Тонировка в круг.
                        </CardText>
                        <Button>
                            Купить
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://www.tts.ru/upload/iblock/305/полировка_фар.jpg"
                        height = "228px"
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Полировка фар
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            700р за фару
                        </CardSubtitle>
                        <CardText>
                            Будут как новые.
                        </CardText>
                        <Button>
                            Купить
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>);
    }
}