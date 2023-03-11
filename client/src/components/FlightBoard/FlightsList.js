import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../Error';
import Loading from '../Loading';
import NotFound from "../NotFound";

const FlightList = (props) => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const options = { hour: 'numeric', minute: 'numeric', hour12: false }

    const Arrivals = () => {

        const [numToShow, setNumToShow] = useState(10);

        const handleLoadMore = () => {
            setNumToShow(numToShow + 10);
        };

        const filteredData = props.flightData.filter((item) => {
            if (queryParams.has('Country')) {
                const country = queryParams.get('Country');
                return item.CHCINT === null && item.CHCKZN === null && item.CHLOCCT === country;
            } else if (queryParams.has('Airlines')) {
                const airlines = queryParams.get('Airlines');
                return item.CHCINT === null && item.CHCKZN === null && item.CHOPERD === airlines;
            } else if (queryParams.has('City')) {
                const city = queryParams.get('City');
                return item.CHCINT === null && item.CHCKZN === null && item.CHLOC1T === city;
            } else if (queryParams.has('Search')) {
                const search = queryParams.get('Search');
                const flightNumber = item.CHOPER + item.CHFLTN
                const flightNumberSpace = item.CHOPER + " " + item.CHFLTN
                return (
                    (item.CHCINT === null && item.CHCKZN === null && item.CHLOCCT.includes(search.toUpperCase())) ||
                    (item.CHCINT === null && item.CHCKZN === null && item.CHOPERD.includes(search.toUpperCase())) ||
                    (item.CHCINT === null && item.CHCKZN === null && item.CHOPERD.includes(search.toUpperCase())) ||
                    (item.CHCINT === null && item.CHCKZN === null && item.CHLOC1T.includes(search.toUpperCase())) ||
                    (item.CHCINT === null && item.CHCKZN === null && flightNumber.includes(search.toUpperCase())) ||
                    (item.CHCINT === null && item.CHCKZN === null && flightNumberSpace.includes(search.toUpperCase()))
                );
            } else {
                return item.CHCINT === null && item.CHCKZN === null;
            }
        });

        return (
            <>
                <table className="w-full text-center border-collapse border border-slate-400">
                    <thead>
                        <tr className="h-12">
                            <th className="border border-slate-300 ">Airline Company</th>
                            <th className="border border-slate-300 ">Flight Number</th>
                            <th className="border border-slate-300 ">Coming From</th>
                            <th className="border border-slate-300 ">City</th>
                            <th className="border border-slate-300 ">Scheduled time</th>
                            <th className="border border-slate-300 ">Estimated time</th>
                            <th className="border border-slate-300 ">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {filteredData
                            .slice(0, numToShow)
                            .map((item, index) => (
                                <tr className="h-12" key={index}>
                                    <td className="border border-none">{item.CHOPERD}</td>
                                    <td className="border border-none">{item.CHOPER} {item.CHFLTN}</td>
                                    <td className="border border-none">{item.CHLOCCT}</td>
                                    <td className="border border-none">{item.CHLOC1T}</td>
                                    <td className="border border-none">{new Date(item.CHPTOL).toLocaleDateString('en-US') + ' ' + new Date(item.CHPTOL).toLocaleTimeString('en-US', options)}</td>
                                    <td className="border border-none">{new Date(item.CHSTOL).toLocaleDateString('en-US') + ' ' + new Date(item.CHSTOL).toLocaleTimeString('en-US', options)}</td>
                                    <td className="border border-none">{item.CHRMINE}</td>
                                </tr>
                            ))}

                    </tbody>

                </table>

                {numToShow < filteredData.length &&
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4" onClick={handleLoadMore}>Load More</button>
                }
                {props.isLoading && <Loading />}
                {!props.isLoading && filteredData.length === 0 && !queryParams.get('Search') && <Error />}
                {!props.isLoading && filteredData.length === 0 && queryParams.get('Search') && <NotFound />}
            </>
        );
    }

    const Departures = () => {

        const [numToShow, setNumToShow] = useState(10);

        const handleLoadMore = () => {
            setNumToShow(numToShow + 10);
        };

        const filteredData = props.flightData.filter((item) => {
            if (queryParams.has('Country')) {
                const country = queryParams.get('Country');
                return item.CHCINT !== null && item.CHCKZN !== null && item.CHLOCCT === country;
            } else if (queryParams.has('Airlines')) {
                const airlines = queryParams.get('Airlines');
                return item.CHCINT !== null && item.CHCKZN !== null && item.CHOPERD === airlines;
            } else if (queryParams.has('City')) {
                const city = queryParams.get('City');
                return item.CHCINT !== null && item.CHCKZN !== null && item.CHLOC1T === city;
            } else if (queryParams.has('Search')) {
                const search = queryParams.get('Search');
                const flightNumber = item.CHOPER + item.CHFLTN
                const flightNumberSpace = item.CHOPER + " " + item.CHFLTN
                return (
                    (item.CHCINT !== null && item.CHCKZN !== null && item.CHLOCCT.includes(search.toUpperCase())) ||
                    (item.CHCINT !== null && item.CHCKZN !== null && item.CHOPERD.includes(search.toUpperCase())) ||
                    (item.CHCINT !== null && item.CHCKZN !== null && item.CHOPERD.includes(search.toUpperCase())) ||
                    (item.CHCINT !== null && item.CHCKZN !== null && item.CHLOC1T.includes(search.toUpperCase())) ||
                    (item.CHCINT !== null && item.CHCKZN !== null && flightNumber.includes(search.toUpperCase())) ||
                    (item.CHCINT !== null && item.CHCKZN !== null && flightNumberSpace.includes(search.toUpperCase()))
                )
            } else {
                return item.CHCINT !== null && item.CHCKZN !== null;
            }
        });

        return (
            <>
                <table className="w-full text-center border-collapse border border-slate-400">
                    <thead>
                        <tr className="h-12">
                            <th className="border border-slate-300 ">Airline Company</th>
                            <th className="border border-slate-300 ">Flight Number</th>
                            <th className="border border-slate-300 ">{location.pathname.includes("Departures") && "Departing To"}{location.pathname.includes("Arrivals") && "Coming From"}</th>
                            <th className="border border-slate-300 ">City</th>
                            <th className="border border-slate-300 ">Terminal</th>
                            <th className="border border-slate-300 ">Counter Area</th>
                            <th className="border border-slate-300 ">Scheduled time</th>
                            <th className="border border-slate-300 ">Estimated time</th>
                            <th className="border border-slate-300 ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData
                            .slice(0, numToShow)
                            .map((item, index) => (
                                <tr className="h-12" key={index}>
                                    <td className="border border-none">{item.CHOPERD}</td>
                                    <td className="border border-none">{item.CHOPER} {item.CHFLTN}</td>
                                    <td className="border border-none">{item.CHLOCCT}</td>
                                    <td className="border border-none">{item.CHLOC1T}</td>
                                    <td className="border border-none">{item.CHTERM}</td>
                                    <td className="border border-none">{item.CHCINT}</td>
                                    <td className="border border-none">{new Date(item.CHPTOL).toLocaleDateString('en-US') + ' ' + new Date(item.CHPTOL).toLocaleTimeString('en-US', options)}</td>
                                    <td className="border border-none">{new Date(item.CHSTOL).toLocaleDateString('en-US') + ' ' + new Date(item.CHSTOL).toLocaleTimeString('en-US', options)}</td>
                                    <td className="border border-none">{item.CHRMINE}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {numToShow < filteredData.length &&
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4" onClick={handleLoadMore}>Load More</button>
                }
                {props.isLoading && <Loading />}
                {!props.isLoading && filteredData.length === 0 && !queryParams.get('Search') && <Error />}
                {!props.isLoading && filteredData.length === 0 && queryParams.get('Search') && <NotFound />}
            </>

        );
    }

    return (
        <>
            <div className="grid place-items-center mt-5">
                <div className="box-border border-4 box-flight-board-list">
                    <div className="overflow-x-auto">
                        {location.pathname.includes("Arrivals") && <Arrivals />}
                        {location.pathname.includes("Departures") && <Departures />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlightList;