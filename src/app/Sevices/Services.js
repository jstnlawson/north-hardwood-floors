import React from "react";
import Image from "next/image";
import sandingLogo from "public/images/sandingLogo.svg";
import repairLogo from "public/images/repairLogo.svg";
import buffLogo from "public/images/buffLogo.svg";
import "./Services.css"




export default function () {
    return (
        <div className="services-container">
            <div className="large-services-container">
                <h1 className="">Services</h1>
                <div className="large-grid-container">
                    <div className="sanding-container">
                        <div className="services-logo-containers" >
                            <Image
                                src={sandingLogo}
                                alt="sanding logo"

                            />
                        </div>
                        <h2 className="">FLOOR SANDING & REFINISHING</h2>
                        <p>Sanding off the old finish and applting new-to reveal beautiful, smooth floors.
                            Stain can also be applied at this stage to give your floors the color you want.
                        </p>
                    </div>
                    <div className="repairs-container">
                        <div className="services-logo-containers" >
                            <Image
                                src={repairLogo}
                                alt="repair logo"
                                
                            />
                        </div>
                        <h2 className="">REPAIRS</h2>
                        <p>If you have pet stains, broken boards, or water damage-some boards may need replacing.
                            This is done in combination with a refinish to make the repair look seamless.</p>
                    </div>
                    <div className="buff-container">
                        <div className="services-logo-containers" >
                            <Image
                                src={buffLogo}
                                alt="buff logo"
                                
                            />
                        </div>
                        <h2>BUFF & COAT</h2>
                        <p>Seeing light wear patterns on your floors? Or need a little shine in your life? A
                            quick buff and a new layer of finish will shine it right up!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}