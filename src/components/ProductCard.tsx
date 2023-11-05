import React from 'react';

interface ProductCardProps {
  productInfo: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ productInfo }) => {
  return (
    <div className='h-[238px] w-[141px] border border-[#EBF0FF] rounded-lg p-4 '>
      <img
        src={productInfo.image}
        alt='Mo ta'
        className='w-[109px] h-[109px] rounded-lg  '
      />
      <div className=' flex flex-col mt-2 gap-2 '>
        <h6 className='text-xs font-bold text-[#223263] w-[109px] h-[36px] '>
          {productInfo.name}
        </h6>
        <p className='text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] '>
          {`$${productInfo.price}`}
        </p>
        <div className='flex item-center'>
          <p className='font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]'>
            {`$${productInfo.originPrice}`}
          </p>
          <p className='font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]'>
            {`${productInfo.saleOff}% Off`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
