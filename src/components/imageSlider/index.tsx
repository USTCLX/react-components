import React, { Component } from 'react';
import classnames from 'classnames';
import './index.scss';

type element = 'current' | 'left' | 'right';

interface Props {
  list: Array<string>;
}
interface State {
  items: Array<{
    id: 'current' | 'left' | 'right';
    index: number;
  }>;
  transform: 'none' | 'translateX(-100%)' | 'translateX(100%)';
  transition: 'none' | 'transform 0.3s ease-in-out';
}

export default class ImageSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { list } = props;

    this.state = {
      items: [
        { id: 'left', index: -1 },
        { id: 'current', index: 0 },
        { id: 'right', index: 1 },
      ],
      transform: 'none',
      transition: 'none',
    };
  }

  current: number = 0;
  direction!: 'left' | 'right';

  handleClickLeft = () => {
    if (this.current > 0) {
      this.direction = 'left';
      this.setState({
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
      });
    }
  };

  handleClickRight = () => {
    const { list } = this.props;
    if (this.current < list.length) {
      this.direction = 'right';
      this.setState({
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
      });
    }
  };

  handleTransformEnd = () => {
    const { items, elements, srcs } = this.state;
    if (this.direction === 'left') {
      this.current--;
      items.push(items.shift()!);
      items.forEach(item => item.index--);
    } else if (this.direction === 'right') {
      this.current++;
      items.unshift(items.pop()!);
      items.forEach(item => item.index++);
    }
    this.setState({
      items,
      transform: 'none',
      transition: 'none',
    });
  };

  render() {
    const { list } = this.props;
    const { items, transform, transition } = this.state;
    return (
      <div className="image-slider-wrapper">
        <div
          className="image-slider-list"
          style={{ transform, transition }}
          onTransitionEnd={this.handleTransformEnd}>
          {items.map((item, index) => {
            return (
              <div key={index} className={classnames('image-slider-list-item', item.id)}>
                <img className={`image-slider-list-item_img`} src={list[item.index]} alt="slider" />
              </div>
            );
          })}
        </div>

        <div className="image-slider-buttion">
          <button className="image-slider-button_left" onClick={this.handleClickLeft}>
            left
          </button>
          <button className="image-slider-button_right" onClick={this.handleClickRight}>
            right
          </button>
        </div>
      </div>
    );
  }
}
