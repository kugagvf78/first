import { HeartOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
import { GrNotification } from 'react-icons/gr';
const { Search } = Input;
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '206px',
  color: '#fff',
  lineHeight: '206px',
  textAlign: 'center',
  background: '#364d79',
};

const HomePage = () => {
  const listImages = [
    {
      linkImage: 'https://images.unsplash.com/photo-1612021470627-ca1cb2d2ee92',
      description: 'Mô tả hình ảnh 1',
    },
    {
      linkImage: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1',
      description: 'Mô tả hình ảnh 1',
    },
    {
      linkImage: 'https://images.unsplash.com/photo-1612021470627-ca1cb2d2ee92',
      description: 'Mô tả hình ảnh 1',
    },
    {
      linkImage: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1',
      description: 'Mô tả hình ảnh 1',
    },
  ];

  const onSearch = (value: any) => {
    console.log('value', value);
  };

  return (
    <div className='mt-[60px]'>
      <div className='flex items-center gap-4 justify-between px-4'>
        <Search
          placeholder='input search text'
          allowClear
          onSearch={onSearch}
          style={{ width: 263 }}
        />
        <HeartOutlined style={{ fontSize: '24px', color: '#9098B1' }} />
        <GrNotification size={24} style={{ color: '#9098B1' }} />
      </div>
      <hr className='my-4' />
      <div className='px-4'>
        <Carousel>
          {listImages &&
            listImages.map((image: any, index: any) => (
              <div key={index}>
                <img
                  src={image.linkImage}
                  alt={image.description}
                  style={contentStyle}
                />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
