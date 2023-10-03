import React from "react";
import "./Hamburger.css"



export default function () {
    return (
        <>
            <div className="hamburger-container sm:hidden">
                <label className="hamburger-menu">
                    <input type="checkbox" />
                </label>
                <aside className="sidebar">
                    <nav>
                        <div>Gallery</div>
                        <div>Customer Guide</div>
                        <div>About</div>
                    </nav>
                </aside>
            </div>
        </>
    )
}