import React from "react";
import "./Paragraph.css"


export default function Paragraph () {


    return (
        <div className="flex items-center justify-center flex-col">
            <div className=" bg-white text-northBlue md:hidden p-3 w-[90vw]">
                <h1 className="md:hidden mt-1 paragraph-wrap">Floors above the rest</h1>
                <p className=" paragraph-wrap">Hardwood floor sanding and repair services based on sound knowledge, quality craftsmanship,
                    and a level of care that goes beyond expectations. Working and living in the Twin Cities
                    since 2003.
                </p>
            </div>
        </div>
    )
}