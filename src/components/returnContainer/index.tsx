import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Icon from "../icon";
import { Colors } from "@/styles/config/base";

interface ReturnContainerProps {
    title?: string
    className?: string
}
function ReturnContainer({
    title,
    className,
}: ReturnContainerProps) {

const matches = useMediaQuery('(min-width: 768px)');
const iconSize = matches ? 17 : 24;

return(
    <section className={`w-full h-6 flex flex-row justify-between lg:w-[17.5rem] lg:max-w-[31.25rem] ${className}`} >
        <Icon iconName='ArrowBackward' size={iconSize} color={Colors.black} className='flex justify-items-start'/>
        <div className="text-font_18 flex justify-items-center">
            {title}
        </div>
        <div className="lg:hidden"></div>
    </section>
);
}
export default ReturnContainer;