import { useState } from "react";
import { useLocation } from 'react-router-dom';
import Error from "../Error";
import Loading from "../Loading";
import NotFound from "../NotFound";

const TravelWarningsList = (props) => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const options = { hour: 'numeric', minute: 'numeric', hour12: false }

    const [numToShow, setNumToShow] = useState(10);

    const handleLoadMore = () => {
        setNumToShow(numToShow + 10);
    };

    const filteredData = props.travelWarningData.filter((item) => {
        if (queryParams.has('Country')) {
            const country = queryParams.get('Country');
            return item.country === country;
        } else if (queryParams.has('Continent')) {
            const בontinent = queryParams.get('Continent');
            return item.continent === בontinent;
        } else if (queryParams.has('Office')) {
            const office = queryParams.get('Office');
            return item.משרד === office;
        } else if (queryParams.has('Search')) {
            const search = queryParams.get('Search');
            return (
                (item.משרד && item.משרד.includes(search)) ||
                (item.continent && item.continent.includes(search)) ||
                (item.country && item.country.includes(search)) ||
                (item.recommendations && item.recommendations.includes(search))
            );
        } else {
            return props.travelWarningData;
        }
    });

    return (
        <>
            <div className="grid place-items-center mt-5">
                <div className="box-border border-4 box-flight-board-list">
                    <div className="overflow-x-auto">
                        <table className="w-full text-center border-collapse border border-slate-400">
                            <thead>
                                <tr className="h-12">
                                    <th className="border border-slate-300 sm: hidden">Continent</th>
                                    <th className="border border-slate-300 ">Country</th>
                                    <th className="border border-slate-300 " style={{ width: "500px" }}>Recommendations</th>
                                    <th className="border border-slate-300 ">Date</th>
                                    <th className="border border-slate-300 ">Office</th>
                                </tr>
                            </thead>

                            <tbody>

                                {filteredData.slice(0, numToShow).map((item, index) => {
                                    return <tr className="h-12" key={index}>
                                        <td className="border border-none sm: hidden">{item.continent}</td>
                                        <td className="border border-none">{item.country}</td>
                                        <td className="border border-none">{item.recommendations.replace(/(<([^>]+)>)/gi, "")}</td>
                                        <td className="border border-none">{item.date ? new Date(item.date).toLocaleDateString('he-IL') + ' ' + new Date(item.date).toLocaleTimeString('en-US', options) : "N/A"}</td>
                                        <td className="border border-none">{item.משרד}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        {numToShow < filteredData.length &&
                            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4" onClick={handleLoadMore}>Load More</button>
                        }
                        {props.isLoading && <Loading />}
                        {!props.isLoading && filteredData.length === 0 && !queryParams.get('Search') && <Error />}
                        {!props.isLoading && filteredData.length === 0 && queryParams.get('Search') && <NotFound />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TravelWarningsList;