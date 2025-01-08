import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="bg-slate-200 py-5 shadow-xl">
            <div className="container flex justify-between items-center">
                <h1 className="text-[30px]">7oy 9dars</h1>
                <ul className="flex items-center gap-3 ">
                    <li className="headUl">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                        >
                            1-mashq
                        </NavLink>
                    </li>
                    <li className="headUl">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/masala2"
                        >
                            2-mashq
                        </NavLink>
                    </li>
                    <li className="headUl">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/masala3"
                        >
                            3-mashq
                        </NavLink>
                    </li>
                    <li className="headUl">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                            to="/"
                        >
                            4-mashq
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className="text-[30px] hover:underline transition-all"
                    to="https://tailwindcss.com/docs/guides/vite"
                >
                    Support
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
