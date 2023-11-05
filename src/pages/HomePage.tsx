import {
  HeartOutlined,
  HomeOutlined,
  StarFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
import { GrNotification } from 'react-icons/gr';
import {
  PiShirtFoldedLight,
  PiDressThin,
  PiHandbag,
  PiBagBold,
} from 'react-icons/pi';
import { TbShoe } from 'react-icons/tb';
import { Carousel } from 'antd';
import ProductCard from '../components/ProductCard';

const { Search } = Input;
const contentStyle: React.CSSProperties = {
  height: '206px',
  color: '#fff',
  lineHeight: '206px',
  textAlign: 'center',
  background: '#364d79',
};

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

const flashSaleProducts = [
  {
    image: 'https://bom.so/OUpZ1C',
    name: 'FS - Nike Air Max 270 React...',
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  {
    image: 'https://bom.so/StoIIq',
    name: 'FS - QUILTED MAXI CROS...',
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  // {
  //   image: 'https://bom.so/m1P6z0',
  //   name: 'FS - Nike Air Max 270 React...',
  //   price: 299.43,
  //   originPrice: 534.33,
  //   saleOff: 24,
  // },
];

const megaSaleProducts = [{}];

const HomePage = () => {
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
        <div>
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

        <div>
          <div className='flex item-center mt-12 justify-between'>
            <h5 className='text-sm font-bold text-[#223263]'>Category</h5>
            <p className=' text-sm font-bold text-[#40BFFF]'>More Category</p>
          </div>

          <div className='flex item-center mt-3 gap-3'>
            <div className='flex flex-col gap-2 w-[70px]'>
              <div className='w-[70px] h-[70px] border border-[#EBF0FF] rounded-full flex items-center justify-center'>
                <PiShirtFoldedLight size={24} style={{ color: '#40BFFF' }} />
              </div>
              <p className='text-[10px] text-center '>Man Shirt</p>
            </div>
            <div className='flex flex-col gap-2 items-center w-[70px]'>
              <div className='w-[70px] h-[70px] border border-[#EBF0FF] rounded-full flex items-center justify-center'>
                <PiDressThin size={24} style={{ color: '#40BFFF' }} />
              </div>
              <p className='text-[10px] text-center'>Dress</p>
            </div>
            <div className='flex flex-col gap-2 w-[70px]'>
              <div className='w-[70px] h-[70px] border border-[#EBF0FF] rounded-full flex items-center justify-center'>
                <PiBagBold size={24} style={{ color: '#40BFFF' }} />
              </div>
              <p className='text-[10px] text-center'>Man Work Equipment</p>
            </div>
            <div className='flex flex-col gap-2  w-[70px]'>
              <div className='w-[70px] h-[70px] border border-[#EBF0FF] rounded-full flex items-center justify-center'>
                <PiHandbag size={24} style={{ color: '#40BFFF' }} />
              </div>
              <p className='text-[10px] text-center'>Woman Bag</p>
            </div>
            {/* <div className="w-[70px] h-[70px] border border-[#EBF0FF] rounded-full flex items-center justify-center">
              <TbShoe size={24} style={{ color: "#40BFFF" }} />
            </div> */}
          </div>
        </div>

        <div className='mt-6'>
          <div className='flex item-center justify-between'>
            <h5 className='text-sm font-bold text-[#223263]'>Flash Sale</h5>
            <p className=' text-sm font-bold text-[#40BFFF]'>See More</p>
          </div>

          <div className='flex item-center gap-4 mt-3'>
            {flashSaleProducts &&
              flashSaleProducts.map((flashSaleProduct: any, index: any) => (
                <ProductCard productInfo={flashSaleProduct} />
              ))}
          </div>
        </div>

        <div className='mt-6'>
          <div className='flex item-center justify-between'>
            <h5 className='text-sm font-bold text-[#223263]'>Mega Sale</h5>
            <p className=' text-sm font-bold text-[#40BFFF]'>See More</p>
          </div>

          <div className='flex item-center gap-4 mt-3'>
            <div className='h-[238px] w-[141px] border border-[#EBF0FF] rounded-lg p-4 '>
              <img
                src='https://bom.so/TPboxV'
                alt='Mo ta'
                className='w-[109px] h-[109px] rounded-lg  '
              />
              <div className=' flex flex-col mt-2 gap-2 '>
                <h6 className='text-xs font-bold text-[#223263] w-[109px] h-[36px] '>
                  MS - Nike Air Max 270 React...
                </h6>
                <p className='text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] '>
                  $299,43
                </p>
                <div className='flex item-center'>
                  <p className='font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]'>
                    $534,33{' '}
                  </p>
                  <p className='font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]'>
                    24% Off{' '}
                  </p>
                </div>
              </div>
            </div>

            <div className='h-[238px] w-[141px] border border-[#EBF0FF] rounded-lg p-4 '>
              <img
                src='https://bom.so/RFh3WK'
                alt='Mo ta'
                className='w-[109px] h-[109px] rounded-lg  '
              />
              <div className=' flex flex-col mt-2 gap-2 '>
                <h6 className='text-xs font-bold text-[#223263] w-[109px] h-[36px] '>
                  MS - Nike Air Max 270 React...
                </h6>
                <p className='text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] '>
                  $299,43
                </p>
                <div className='flex item-center'>
                  <p className='font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]'>
                    $534,33{' '}
                  </p>
                  <p className='font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]'>
                    24% Off{' '}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="h-[238px] w-[141px] border border-[#EBF0FF] rounded-lg p-4 ">
                <img src="https://bom.so/LBPjjs" alt="Mo ta" className="w-[109px] h-[109px] rounded-lg  "/>
                <div className=" flex flex-col mt-2 gap-2 ">
                  <h6 className="text-xs font-bold text-[#223263] w-[109px] h-[36px] ">MS - Nike Air Max 270 React...</h6>
                  <p className="text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] ">$299,43</p>
                  <div className="flex item-center">
                    <p className="font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]">$534,33 </p>
                    <p className="font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]">24% Off </p>
                  </div>
                </div>
              </div> */}
          </div>
        </div>

        <div className='relative mt-[9px]'>
          <img
            src='https://bom.so/UqsfLC'
            alt='Giay'
            className='h-[206px] w-full object-cover object-top brightness-50 rounded-lg'
          />
          <div className='absolute top-12 left-6 '>
            <h2 className='text-2xl font-bold text-[#FFF] '>
              Recomended
              <br />
              Product
            </h2>
            <p className=' font-normal text-xs text-[#FFF] mt-4'>
              We recommend the best for you
            </p>
          </div>
        </div>

        <div className='mt-4 '>
          <div className='flex item-center justify-between'>
            <div className='h-[282px] w-[165px] border border-[#EBF0FF] rounded-lg p-4 '>
              <img
                src='https://bom.so/UbKd28'
                alt='Mo ta'
                className='w-[133px] h-[133px] rounded-lg  '
              />
              <div className=' flex flex-col mt-2 '>
                <h6 className='text-xs font-bold text-[#223263] w-[133px] h-[36px] '>
                  Nike Air Max 270 React ENG
                </h6>
                <div
                  className='flex item-center w-[68px] h-[12px] mt-1 icon-frame '
                  style={{ color: '#FFC833' }}
                >
                  <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
                  <StarFilled style={{ color: '#EBF0FF' }} />
                </div>
                <p className='text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] mt-4 '>
                  $299,43
                </p>
                <div className='flex item-center mt-1'>
                  <p className='font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]'>
                    $534,33{' '}
                  </p>
                  <p className='font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]'>
                    24% Off{' '}
                  </p>
                </div>
              </div>
            </div>

            <div className='h-[282px] w-[165px] border border-[#EBF0FF] rounded-lg p-4 '>
              <img
                src='https://bom.so/TPboxV'
                alt='Mo ta'
                className='w-[133px] h-[133px] rounded-lg  '
              />
              <div className=' flex flex-col mt-2 '>
                <h6 className='text-xs font-bold text-[#223263] w-[133px] h-[36px] '>
                  Nike Air Max 270 React ENG
                </h6>
                <div
                  className='flex item-center w-[68px] h-[12px] mt-1 icon-frame '
                  style={{ color: '#FFC833' }}
                >
                  <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
                  <StarFilled style={{ color: '#EBF0FF' }} />
                </div>
                <p className='text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] mt-4 '>
                  $299,43
                </p>
                <div className='flex item-center mt-1'>
                  <p className='font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]'>
                    $534,33{' '}
                  </p>
                  <p className='font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]'>
                    24% Off{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex item-center justify-between mt-3'>
            <div className='h-[282px] w-[165px] border border-[#EBF0FF] rounded-lg p-4 '>
              <img
                src='https://bom.so/m5qo9F'
                alt='Mo ta'
                className='w-[133px] h-[133px] rounded-lg  '
              />
              <div className=' flex flex-col mt-2 '>
                <h6 className='text-xs font-bold text-[#223263] w-[133px] h-[36px] '>
                  Nike Air Max 270 React ENG
                </h6>
                <div
                  className='flex item-center w-[68px] h-[12px] mt-1 icon-frame '
                  style={{ color: '#FFC833' }}
                >
                  <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
                  <StarFilled style={{ color: '#EBF0FF' }} />
                </div>
                <p className='text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] mt-4 '>
                  $299,43
                </p>
                <div className='flex item-center mt-1'>
                  <p className='font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]'>
                    $534,33{' '}
                  </p>
                  <p className='font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]'>
                    24% Off{' '}
                  </p>
                </div>
              </div>
            </div>

            <div className='h-[282px] w-[165px] border border-[#EBF0FF] rounded-lg p-4 '>
              <img
                src='https://bom.so/m1P6z0'
                alt='Mo ta'
                className='w-[133px] h-[133px] rounded-lg  '
              />
              <div className=' flex flex-col mt-2 '>
                <h6 className='text-xs font-bold text-[#223263] w-[133px] h-[36px] '>
                  Nike Air Max 270 React ENG
                </h6>
                <div
                  className='flex item-center w-[68px] h-[12px] mt-1 icon-frame '
                  style={{ color: '#FFC833' }}
                >
                  <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
                  <StarFilled style={{ color: '#EBF0FF' }} />
                </div>
                <p className='text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] mt-4 '>
                  $299,43
                </p>
                <div className='flex item-center mt-1'>
                  <p className='font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]'>
                    $534,33{' '}
                  </p>
                  <p className='font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]'>
                    24% Off{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='mt-[14px]' />

      <div className='flex item-center mb-[34px]'>
        <div className='border w-[75px] h-[59px] border-[#FFF] flex flex-col items-center text-[#40BFFF] '>
          <div className='flex items-center justify-center mt-4'>
            <HomeOutlined style={{ fontSize: '24px' }} className=' ' />
          </div>
          <p className='text-[10px] font-bold mt-1'>Home</p>
        </div>

        <div className='border w-[75px] h-[59px] border-[#FFF] flex flex-col items-center text-[#9098B1] '>
          <div className='flex items-center justify-center mt-4'>
            <SearchOutlined style={{ fontSize: '24px' }} className=' ' />
          </div>
          <p className='text-[10px] font-bold mt-1'>Explore</p>
        </div>

        <div className='border w-[75px] h-[59px] border-[#FFF] flex flex-col items-center text-[#9098B1] '>
          <div className='flex items-center justify-center mt-4'>
            <ShoppingCartOutlined style={{ fontSize: '24px' }} className=' ' />
          </div>
          <p className='text-[10px] font-bold mt-1'>Cart</p>
        </div>

        <div className='border w-[75px] h-[59px] border-[#FFF] flex flex-col items-center text-[#9098B1] '>
          <div className='flex items-center justify-center mt-4'>
            <TagOutlined style={{ fontSize: '24px' }} className=' ' />
          </div>
          <p className='text-[10px] font-bold mt-1'>Offer</p>
        </div>

        <div className='border w-[75px] h-[59px] border-[#FFF] flex flex-col items-center text-[#9098B1] '>
          <div className='flex items-center justify-center mt-4'>
            <UserOutlined style={{ fontSize: '24px' }} className=' ' />
          </div>
          <p className='text-[10px] font-bold mt-1'>Account</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
