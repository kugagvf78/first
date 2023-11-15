import React from "react";

interface TabBarCardProps {
  tabBarInfo: any;
}

const TabBarCard: React.FC <TabBarCardProps> = ({tabBarInfo}) => {
    return (
        <div className={`border w-[75px] h-[59px] border-[#FFF] flex flex-col items-center ${tabBarInfo.color} `}>
          <div className="flex items-center justify-center mt-4">
            <tabBarInfo.icon style={{ fontSize: "24px" }} />
          </div>
          <p className="text-[10px] font-bold mt-1">{tabBarInfo.name}</p>
        </div>

    );
};

export default TabBarCard;