import {
  HeartOutlined,
  HomeOutlined,
  StarFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";
import { GrNotification } from "react-icons/gr";
import {
  PiShirtFoldedLight,
  PiDressThin,
  PiHandbag,
  PiBagBold,
} from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { Carousel } from "antd";
import ProductCard from "../components/ProductCard";
import RecommendedProductCard from "../components/RecommendedProductCard";
import TabBarCard from "../components/TabBarCard";
import CategoryProductCard from "../components/CategoryProductCard";
const { Search } = Input;
const contentStyle: React.CSSProperties = {
  height: "206px",
  color: "#fff",
  lineHeight: "206px",
  textAlign: "center",
  background: "#364d79",
};

const listImages = [
  {
    linkImage: "https://images.unsplash.com/photo-1612021470627-ca1cb2d2ee92",
    description: "Mô tả hình ảnh 1",
  },
  {
    linkImage: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1",
    description: "Mô tả hình ảnh 1",
  },
  {
    linkImage: "https://images.unsplash.com/photo-1612021470627-ca1cb2d2ee92",
    description: "Mô tả hình ảnh 1",
  },
  {
    linkImage: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1",
    description: "Mô tả hình ảnh 1",
  },
];

const flashSaleProducts = [
  {
    image: "https://bom.so/OUpZ1C",
    name: "FS - Nike Air Max 270 React...",
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  {
    image: "https://bom.so/StoIIq",
    name: "FS - QUILTED MAXI CROS...",
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

const megaSaleProducts = [
  {
    image: "https://bom.so/TPboxV",
    name: "MS - Nike Air Max 270 React...",
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  {
    image: "https://bom.so/RFh3WK",
    name: "MS - Nike Air Max 270 React...",
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  // {
  //   image: 'https://bom.so/LBPjjs',
  //   name: 'MS - Nike Air Max 270 React...',
  //   price: 299.43,
  //   originPrice: 534.33,
  //   saleOff: 24,
  // },
];

const recommendedProducts = [
  {
    image: "https://bom.so/UbKd28",
    name: "Nike Air Max 270 React ENG",
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  {
    image: "https://bom.so/TPboxV",
    name: "Nike Air Max 270 React ENG",
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  {
    image: "https://bom.so/m5qo9F",
    name: "Nike Air Max 270 React ENG",
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
  {
    image: "https://bom.so/m1P6z0",
    name: "Nike Air Max 270 React ENG",
    price: 299.43,
    originPrice: 534.33,
    saleOff: 24,
  },
];

const tabBars = [
  {
    icon: HomeOutlined,
    name: "Home",
    color: "text-[#40BFFF]",
  },
  {
    icon: SearchOutlined,
    name: "Explore",
    color:"text-[#9098B1]",
  },
  {
    icon: ShoppingCartOutlined,
    name: "Cart",
    color:"text-[#9098B1]",
  },
  {
    icon: TagOutlined,
    name: "Offer",
    color:"text-[#9098B1]",
  },
  {
    icon: UserOutlined,
    name: "Account",
    color:"text-[#9098B1]",
  },
];

const categoryProducts = [
  {
    icon: PiShirtFoldedLight,
    name: "Man Shirt",
  },
  {
    icon: PiDressThin,
    name: "Dress",
  },
  {
    icon: PiBagBold,
    name: "Man Work Equipment",
  },
  {
    icon: PiHandbag,
    name: "Woman Bag",
  },
]

const HomePage = () => {
  const onSearch = (value: any) => {
    console.log("value", value);
  };

  return (
    <div className="mt-[60px]">
      <div className="flex items-center gap-4 justify-between px-4">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 263 }}
        />
        <HeartOutlined style={{ fontSize: "24px", color: "#9098B1" }} />
        <GrNotification size={24} style={{ color: "#9098B1" }} />
      </div>

      <hr className="my-4" />

      <div className="px-4">
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
          <div className="flex item-center mt-12 justify-between">
            <h5 className="text-sm font-bold text-[#223263]">Category</h5>
            <p className=" text-sm font-bold text-[#40BFFF]">More Category</p>
          </div>

          <div className="flex item-center mt-3 gap-3">
          {categoryProducts &&
              categoryProducts.map((categoryProduct: any, index: any) => (
                <CategoryProductCard categoryInfo={categoryProduct} />
              ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex item-center justify-between">
            <h5 className="text-sm font-bold text-[#223263]">Flash Sale</h5>
            <p className=" text-sm font-bold text-[#40BFFF]">See More</p>
          </div>

          <div className="flex item-center gap-4 mt-3">
            {flashSaleProducts &&
              flashSaleProducts.map((flashSaleProduct: any, index: any) => (
                <ProductCard productInfo={flashSaleProduct} />
              ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex item-center justify-between">
            <h5 className="text-sm font-bold text-[#223263]">Mega Sale</h5>
            <p className=" text-sm font-bold text-[#40BFFF]">See More</p>
          </div>

          <div className="flex item-center gap-4 mt-3">
            {megaSaleProducts &&
              megaSaleProducts.map((megaSaleProduct: any, index: any) => (
                <ProductCard productInfo={megaSaleProduct} />
              ))}
          </div>
        </div>

        <div className="relative mt-[9px]">
          <img
            src="https://bom.so/UqsfLC"
            alt="Giay"
            className="h-[206px] w-full object-cover object-top brightness-50 rounded-lg"
          />
          <div className="absolute top-12 left-6 ">
            <h2 className="text-2xl font-bold text-[#FFF] ">
              Recomended
              <br />
              Product
            </h2>
            <p className=" font-normal text-xs text-[#FFF] mt-4">
              We recommend the best for you
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between gap-3">
          {recommendedProducts &&
            recommendedProducts.map((rProduct: any, index: any) => (
              <RecommendedProductCard rProductInfo={rProduct} />
            ))}
        </div>
      </div>

      <hr className="mt-[14px]" />

      <div className="flex item-center mb-[34px]">
        {tabBars && tabBars.map((tabBar:any, index:any)=>(
          <TabBarCard tabBarInfo={tabBar} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
