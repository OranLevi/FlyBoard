import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const FlightBoardFilter = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedAirlines, setSelectedAirlines] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [textSerach, setTextSerach] = useState('');

    useEffect(() => {
        if (location.pathname.includes("Arrivals")) {
            setSelectedCountry('');
            setSelectedAirlines('');
            setSelectedCity('');
            setTextSerach('');
        } else if (location.pathname.includes("Departures")) {
            setSelectedCountry('');
            setSelectedAirlines('');
            setSelectedCity('');
            setTextSerach('');
        }
    }, [location.pathname]);

    const handleCountryChange = (event) => {
        if (event.target.value === "default") {
            setSelectedCountry("");
        } else {
            const selectedValue = event.target.value;
            setSelectedCountry(selectedValue);
            navigate({
                search: selectedValue ? `?Country=${selectedValue}` : "",
            });
            setSelectedAirlines("")
            setSelectedCity("")
            setTextSerach('');
        }
    };

    const handleAirlinesChange = (event) => {
        if (event.target.value === "default") {
            setSelectedAirlines("");
        } else {
            const selectedValue = event.target.value;
            setSelectedAirlines(selectedValue);
            navigate({
                search: selectedValue ? `?Airlines=${selectedValue}` : "",
            });
            setSelectedCountry("")
            setSelectedCity("")
            setTextSerach('');
        }
    };

    const handleCityChange = (event) => {
        if (event.target.value === "default") {
            setSelectedCity("");
        } else {
            const selectedValue = event.target.value;
            setSelectedCity(selectedValue);
            navigate({
                search: selectedValue ? `?City=${selectedValue}` : "",
            });
            setSelectedCountry("")
            setSelectedAirlines("")
            setTextSerach('');
        }
    };

    const handleSearch = () => {
        navigate({
            search: textSerach ? `?Search=${textSerach}` : "",
        });
        setSelectedCountry("")
        setSelectedAirlines("")
        setSelectedCity("")
    };

    return (
        <>
            <div className="grid place-items-center">
                <div className="box-border border-4 box-flight-board-filter">
                    <div className="mt-5">
                        <div className="grid grid-cols-3 gap-4 mx-4 ">
                            <div className="relative">
                                <label className="pb-2 text-center block text-sm font-medium text-gray-900 dark:text-white">Select a country</label>
                                <select value={selectedCountry} onChange={handleCountryChange} disabled={props.isLoading}
                                    className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value={""}>Choose a country</option>
                                    {[...new Set(props.flightData.map(item => item.CHLOCCT))].sort().map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))}
                                </select>

                            </div>
                            <div className="relative">
                                <label className="pb-2 text-center block text-sm font-medium text-gray-900 dark:text-white">Select a airleins</label>

                                <select value={selectedAirlines} onChange={handleAirlinesChange} disabled={props.isLoading} className="bg-gray-50 border absolute bottom-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value={""}>Choose a Airlines</option>
                                    {[...new Set(props.flightData.map(item => item.CHOPERD))].sort().map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="relative">
                                <label className="pb-2 text-center block text-sm font-medium text-gray-900 dark:text-white">Select a city</label>
                                <select value={selectedCity} onChange={handleCityChange} disabled={props.isLoading} className="bg-gray-50 border absolute bottom-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value={""}>Choose a city</option>
                                    {[...new Set(props.flightData.map(item => item.CHLOC1T))].sort().map((item, index) => (
                                        <option key={index}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mx-4">
                        <label className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            </div>
                            <input type="search" value={textSerach} onChange={(event) => { setTextSerach(event.target.value) }} disabled={props.isLoading} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search flight" />
                            <button type="submit" onClick={handleSearch} disabled={props.isLoading} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlightBoardFilter;