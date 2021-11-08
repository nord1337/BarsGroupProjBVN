import { Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators } from 'reactstrap';
import React, { Component } from 'react';
const items = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Lada_Granta_2018_facelift.jpg',
        altText: '',
        top: 'Грантич',
        caption: 'топич'
    },
    {
        src: 'https://pokatim.ru/uploads/posts/2018-09/1536753664_priora.jpg',
        altText: '',
        top: 'Приора жи есть',
        caption: 'вайвай какая'
    },
    {
        src: 'https://versiya.info/uploads/posts/2019-11/1573731926_1.jpg',
        altText: '',
        top: 'низкий таз',
        caption: 'радует глаз'
    }
];

export class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="carouselImg"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} width="100%" height="600" />
                    <CarouselCaption captionText={item.caption} captionHeader={item.top} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}