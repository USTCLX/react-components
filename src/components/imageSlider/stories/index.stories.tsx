import React, { FC } from 'react';
import ImageSlider from '../index';
import IronMan1 from '../images/IronMan1.jpeg';
import IronMan2 from '../images/IronMan2.jpeg';
import IronMan3 from '../images/IronMan3.jpeg';
import IronMan4 from '../images/IronMan4.jpeg';

export const Wrapper: FC<{}> = () => {
  return (
    <div>
      <ImageSlider list={[IronMan1, IronMan2, IronMan3, IronMan4]} />
    </div>
  );
};

export default {
  title: 'ImageSlider',
};
