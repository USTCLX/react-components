import React, { FC } from 'react';
import ImageSlider from '../index';

export const Wrapper: FC<{}> = () => {
  return (
    <ImageSlider
      list={[
        'http://img5.mtime.cn/pi/2019/03/29/095741.81998477_1000X1000.jpg',
        'http://img5.mtime.cn/pi/2019/03/29/095722.99339034_1000X1000.jpg',
        'http://img5.mtime.cn/pi/2019/03/29/095742.52160670_1000X1000.jpg',
      ]}
    />
  );
};

export default {
  title: 'ImageSlider',
};
