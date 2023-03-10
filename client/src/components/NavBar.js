const NavBar = () => {
    return (
        <>
            <div className="container mx-auto mt-16">
                <div className="grid place-items-center ">
                    <ul className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row" role="tablist" data-te-nav-ref>
                        <li className="flex-auto text-center">
                            <a href="/flightsBoard/Arrivals" className="my-2 block rounded bg-sky-200 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight md:mr-4" id="pills-home-tab01" data-te-toggle="pill" data-te-target="#pills-home01" data-te-nav-active role="tab" aria-controls="pills-home01" aria-selected="true">
                                Arrivals
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a href="/flightsBoard/Departures" className="my-2 block rounded bg-neutral-100 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 md:mr-4" id="pills-profile-tab01" >
                                Departures
                            </a>
                        </li>
                        <li className="flex-auto text-center">
                            <a href="/travelWarnings" className="my-2 block rounded bg-neutral-100 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 md:mr-4" id="pills-profile-tab01" >
                                Travel warnings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;