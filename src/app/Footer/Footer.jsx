import React from "react";
import Image from "next/image";
import northLogo from 'public/images/NHF_logo_SVG.svg'
import facebookLogo from 'public/images/2023_Facebook_icon.svg.png'
import './Footer.css';


export default function Footer() {
    return (

        <div className="footer-container flex h-auto text-white bg-northBlue">
            <div className="flex flex-row p-4 w-full justify-between items-center ml-4">
                <Image
                    src={northLogo}
                    alt="north hardwood floors logo"
                    className="h-[20vh] max-h-[90px] w-auto p-1 header-logo cursor-pointer my-2"
                />
                <div className="space-maker"></div>


                <div className="footer-contact flex flex-col">
                    <h2 className="text-xs leading-6">CONTACT</h2>

                    <span className="small-texts text-xs">north@northhardwoodfloors</span>
                    <span className="small-texts text-xs leading-6">(612) 685-5200</span>


                    <span className="small-texts">
                        310 W 48th St
                        <br />
                        Minneapolis, MN 55419
                    </span>
                </div>

                <div className="mr-4">
                    <h2 className="text-xs text-center leading-6 mt-[2px]">CONNECT</h2>
                    <a href="https://www.facebook.com/NorthHardwoodFloors/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={facebookLogo}
                            alt='facebook logo'
                            className="h-8 w-8 mt-2 mb-8 mx-auto"
                        />
                    </a>
                </div>

            </div>
        </div>


    )
}