import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className="container mx-auto mt-16">
                <div className="grid place-items-center ">
                    <ul className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row">
                        <li className="flex-auto text-center">
                            <Link onClick={(e) => { e.preventDefault(); navigate("/flightsBoard/Arrivals"); }} className={`${location.pathname.includes("Arrivals") && "bg-sky-200"} my-2 block rounded px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight md:mr-4`}>
                                Arrivals
                            </Link>
                        </li>

                        <li className="flex-auto text-center">
                            <Link onClick={(e) => { e.preventDefault(); navigate("/flightsBoard/Departures"); }} className={`${location.pathname.includes("Departures") && "bg-sky-200"} my-2 block rounded px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight md:mr-4`} >
                                Departures
                            </Link>
                        </li>
                        <li className="flex-auto text-center">
                            <Link onClick={(e) => { e.preventDefault(); navigate("/travelWarnings"); }} className={`${location.pathname.includes("travelWarnings") && "bg-sky-200"} my-2 block rounded px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight md:mr-4`} >
                                Travel warnings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;