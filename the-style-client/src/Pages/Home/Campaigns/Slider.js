import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://i.ibb.co.com/Dzg05GP/4bb228120705693-60b70f428bd19.jpg',
    },
    {
      original: 'https://i.ibb.co.com/gWZ2K1r/9c2de3120705693-60b70f428a4a2.png',
    },
    {
      original: 'https://i.ibb.co.com/cFcdY4r/7339cf120767719-60b8196528453-1.png',
    },
    {
      original: 'https://i.ibb.co.com/yBZpW6L/c09f18120767719-60b8196526a56.png',
    },
    {
      original: 'https://i.ibb.co.com/6XM0SCs/e9db14120767719-60b8196525841.png',
    },
    {
      original: 'https://i.ibb.co.com/Npjb2Ls/f6bbfa120767719-60b8196525cf4.png',
    },
  ];

const Slider = () => {
    return (
        <div className='mx-2'>
            <ImageGallery  className='' showThumbnails={false}
                showFullscreenButton={false} showBullets={true}
                slideInterval={3000} showPlayButton={false} showNav={false} autoPlay={true} items={images}></ImageGallery>
        </div>
    );
};

export default Slider;