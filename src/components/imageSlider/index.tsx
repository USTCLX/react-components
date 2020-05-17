import React, { Component } from 'react';
import classnames from 'classnames';
import './index.scss';

interface Props {
  list: Array<string>;
}
interface State {
  items: Array<{
    id: 'current' | 'left' | 'right';
    src: string;
  }>;
}

export default class ImageSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { list } = props;

    this.state = {
      items: [
        { id: 'left', src: list[0] },
        { id: 'current', src: list[1] },
        { id: 'right', src: list[2] },
      ],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="image-slider">
        {items.map(item => {
          return (
            <div key={item.id} className={classnames('image-slider-item', item.id)}>
              <img src={item.src} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
