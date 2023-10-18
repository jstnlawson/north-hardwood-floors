import React from "react";
import Image from "next/image";
import uglyLogo from 'public/images/uglyLogo.svg'
import './Footer.css';


export default function Footer() {
    return (
        // <footer>
        <div className="footer-container flex h-auto text-white bg-northBlue">
            {/* <div>
                <Image
                    src={uglyLogo}
                    alt="ugly logo"
                    className="w-34 ml-2 mr-2"
                />
            </div> */}
            <div className="flex flex-col p-2">
                <h2 className="text-xs leading-6">CONTACT</h2>
                    
                    <span className="small-texts text-xs">north@northhardfloors</span>
                    <span className="small-texts text-xs leading-6">612-246-0052</span>

                    
                 <span className="small-texts">    
                    5340 Bloomington Ave
                    <br />
                    Minneapolis MN, 55417
                </span>
            </div>
        </div>
        // </footer>

    )
}