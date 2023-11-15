import React from "react";

interface CategoryCardProps {
  categoryInfo: any;
}

const TabBarCard: React.FC <CategoryCardProps> = ({categoryInfo}) => {
    return (
        <div className="flex flex-col gap-2 w-[70px]">
              <div className="w-[70px] h-[70px] border border-[#EBF0FF] rounded-full flex items-center justify-center">
                <categoryInfo.icon size={24} style={{ color: "#40BFFF" }} />
              </div>
              <p className="text-[10px] text-center ">{categoryInfo.name}</p>
            </div>

    );
};

export default TabBarCard;