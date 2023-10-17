import React from "react";
import Image from "next/image";
import uglyLogo from 'public/images/uglyLogo.svg'
import './Footer.css';


export default function Footer() {
    return (
        // <footer>
        <div className="footer-container flex h-auto items-center text-northBlue bg-northLightBlue">
            <div>
                <Image
                    src={uglyLogo}
                    alt="ugly logo"
                    className="h-16 w-20 text-white"
                />
            </div>
            <div className=" flex flex-col ml-32 mr-4">
                <h2 className="text-xs">CONTACT</h2>
               
                    612-246-0052
                 <span className="small-texts">    
                    5340 Bloomington Ave
                    Minneapolis MN, 55417
                </span>
            </div>
            <div className="ml-4">
                <h2 className="text-xs">CONNECT</h2>
            </div>
        </div>
        // </footer>

    )
}