import React, { useState } from 'react'
import Image from "next/image";
import rightChevron from "@/public/images/HeroSectionImages/Right Chevron.svg";


export default function CollapseComponent(props: { name: string}) {
    const [collapsed, setCollapsed] = useState(true);
  return (
    <div>
        <div className="flex justify-between py-3 pr-3 pl-6 hover:bg-gray-100 duration-300" onClick={() => setCollapsed(!collapsed)}>
            <h2>{props.name}</h2>
            <Image src={rightChevron} alt="rightChevron"  className={` ${ collapsed ? "rotate-0" : "rotate-90" } `} />
        </div>
        <div className={`flex justify-between bg-gray-100 pr-3 pl-6 hover:bg-gray-100 duration-300 ${ collapsed ? 'py-0' : 'py-3'}`}>
            {!collapsed && <div>
                <p>option 1</p>
                <p>option 2</p>
                <p>option 3</p>
                </div>}
        </div>
    </div>
  )
}
