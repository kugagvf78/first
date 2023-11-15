import React from "react";
import { StarFilled } from "@ant-design/icons";

interface RProductCardProps {
  rProductInfo: any;
}

const RecommendedProductCard: React.FC<RProductCardProps> = ({rProductInfo}) => {
  return (
    <div className="h-[282px] w-[165px] border border-[#EBF0FF] rounded-lg p-4 ">
      <img
        src={rProductInfo.image}
        alt="Mo ta"
        className="w-[133px] h-[133px] rounded-lg  "
      />
      <div className=" flex flex-col mt-2 ">
        <h6 className="text-xs font-bold text-[#223263] w-[133px] h-[36px] ">
          {rProductInfo.name}
        </h6>
        <div
          className="flex item-center w-[68px] h-[12px] mt-1 icon-frame "
          style={{ color: "#FFC833" }}
        >
          <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
          <StarFilled style={{ color: "#EBF0FF" }} />
        </div>
        <p className="text-xs font-bold text-[#40BFFF] w-[52px] h-[22px] mt-4 ">
          {`$${rProductInfo.price}`}
        </p>
        <div className="flex item-center mt-1">
          <p className="font-normal text-[10px] text-[#9098B1] line-through mr-[8px] w-[42px] h-[15px]">
            {`$${rProductInfo.originPrice}`}
          </p>
          <p className="font-bold text-[10px] text-[#FB7181] w-[59px] h-[15px]">
            {`$${rProductInfo.saleOff}% Off`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProductCard;
