import React from "react";
import "./Paragraph.css"


export default function Paragraph () {


    return (
        <div className="flex items-center justify-center flex-col">
            <div className=" bg-white text-northBlue md:hidden p-5 w-[100vw]">
                <h1 className="md:hidden mt-1 paragraph-wrap">Floors above <br className="sm:hidden"/>the rest</h1>
                <p className=" paragraph-wrap mt-[14px]">Hardwood floor sanding and repair services based on sound knowledge, quality craftsmanship,
                    and a level of care that goes beyond expectations. Living and working in Minneapolis and Saint Paul
                    since 2003.
                </p>
            </div>
        </div>
    )
}