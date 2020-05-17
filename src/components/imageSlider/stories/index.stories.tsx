import React, { FC } from 'react';
import ImageSlider from '../index';

export const Wrapper: FC<{}> = () => {
  return (
    <ImageSlider
      list={[
        'https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1589711699803&amp;di=421282ba1e8c6cc1eafa50e37156c940&amp;imgtype=0&amp;src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D2542292652%2C3126886761%26fm%3D193',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589714568178&di=cd3838096e6370945a4c74de298799ed&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3634459217%2C3434765490%26fm%3D193',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589714568178&di=e0b996faa710b0decb1ebc191e483a9e&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D3842172986%2C1245034115%26fm%3D193%26app%3D53%26size%3Dw828%26n%3D0%26g%3D0n%26f%3Djpeg%3Fsec%3D1592296488%26t%3D6dfdde6dbbf10f860d84327e62515b87',
      ]}
    />
  );
};

export default {
  title: 'ImageSlider',
};
