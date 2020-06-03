import React, { Component } from 'react';
import classnames from 'classnames';
import { WIDTH_THRESHOLD } from './constant';
import './index.scss';

type Action = 'goLeft' | 'goRight' | 'goBack' | 'follow' | 'none';

interface Props {
  list: Array<string>;
}
interface State {
  items: Array<{
    id: 'current' | 'left' | 'right';
    index: number;
  }>;
}

export default class ImageSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [
        { id: 'left', index: -1 },
        { id: 'current', index: 0 },
        { id: 'right', index: 1 },
      ],
    };
  }

  private current: number = 0;
  private direction!: 'left' | 'right' | 'none';
  private movementX: number = 0;
  private holding: boolean = false;
  private listElement = React.createRef<HTMLDivElement>();

  handleClickLeft = () => {
    if (this.current > 0) {
      this.direction = 'left';
      this.animator('goLeft');
    }
  };

  handleClickRight = () => {
    const { list } = this.props;
    if (this.current < list.length - 1) {
      this.direction = 'right';
      this.animator('goRight');
    }
  };

  handleTransformEnd = () => {
    if (this.direction === 'none') return;
    const { items } = this.state;
    if (this.direction === 'left') {
      this.current--;
      items.push(items.shift()!);
      items.forEach(item => item.index--);
    } else if (this.direction === 'right') {
      this.current++;
      items.unshift(items.pop()!);
      items.forEach(item => item.index++);
    }
    this.animator('none');
    this.setState({
      items,
    });
  };

  handleMoveStart = (e: React.MouseEvent<HTMLImageElement>) => {
    this.holding = true;
    this.movementX = 0;
    this.animator('none');
  };

  handleMoving = (e: React.MouseEvent<HTMLImageElement>) => {
    if (this.holding) {
      this.movementX += e.movementX;
      this.animator('follow', this.movementX);
    }
  };

  handleMoveEnd = (e: React.MouseEvent<HTMLImageElement>) => {
    this.holding = false;
    this.direction = 'none';
    if (Math.abs(this.movementX) > WIDTH_THRESHOLD) {
      if (this.movementX > 0) {
        this.direction = 'left';
        this.animator('goLeft');
      } else {
        this.direction = 'right';
        this.animator('goRight');
      }
    } else {
      this.animator('goBack');
    }
  };

  animator(action: Action, movementX?: number) {
    switch (action) {
      case 'goLeft':
        this.listElement.current!.style.transform = `translateX(100%)`;
        this.listElement.current!.style.transition = `transform 0.3s ease-in-out`;
        break;
      case 'goRight':
        this.listElement.current!.style.transform = `translateX(-100%)`;
        this.listElement.current!.style.transition = `transform 0.3s ease-in-out`;
        break;
      case 'goBack':
        this.listElement.current!.style.transform = `none`;
        this.listElement.current!.style.transition = `transform 0.3s ease-in-out`;
        break;
      case 'follow':
        this.listElement.current!.style.transform = `translateX(${movementX}px)`;
        break;
      case 'none':
      default:
        this.listElement.current!.style.transform = `none`;
        this.listElement.current!.style.transition = `none`;
        break;
    }
  }

  render() {
    const { list } = this.props;
    const { items } = this.state;
    return (
      <div className="image-slider-wrapper">
        <div
          className="image-slider-list"
          ref={this.listElement}
          onTransitionEnd={this.handleTransformEnd}>
          {items.map((item, index) => {
            return (
              <div key={index} className={classnames('image-slider-list-item', item.id)}>
                <img
                  className={`image-slider-list-item_img`}
                  src={list[item.index]}
                  alt="slider"
                  draggable={false}
                  onMouseDown={this.handleMoveStart}
                  onMouseMove={this.handleMoving}
                  onMouseUp={this.handleMoveEnd}
                  onMouseLeave={this.handleMoveEnd}
                />
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
