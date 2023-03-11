import { useState } from "react";

const TravelWarningsList = (props) => {

    const options = { hour: 'numeric', minute: 'numeric', hour12: false }

    const [numToShow, setNumToShow] = useState(10);
    
    const handleLoadMore = () => {
        setNumToShow(numToShow + 10);
    };

    return (
        <>
            <div className="grid place-items-center mt-5">
                <div className="box-border border-4 box-flight-board-list">
                    <div className="overflow-x-auto">
                        <table className="w-full text-center border-collapse border border-slate-400">
                            <thead>
                                <tr className="h-12">
                                    <th className="border border-slate-300 ">Continent</th>
                                    <th className="border border-slate-300 ">Country</th>
                                    <th className="border border-slate-300 ">Recommendations</th>
                                    <th className="border border-slate-300 ">Date</th>
                                    <th className="border border-slate-300 ">Office</th>
                                </tr>
                            </thead>

                            <tbody>

                            {props.travelWarningData.slice(0, numToShow).map((item, index) => {
                                return <tr className="h-12" key={index}>
                                    <td className="border border-none">{item.continent}</td>
                                    <td className="border border-none">{item.country}</td>
                                    <td className="border border-none">{item.recommendations.replace(/(<([^>]+)>)/gi, "")}</td>
                                    <td className="border border-none">{item.date ? new Date(item.date).toLocaleDateString('he-IL') + ' ' + new Date(item.date).toLocaleTimeString('en-US', options) : "N/A"}</td>
                                    <td className="border border-none">{item.משרד}</td>
                                </tr>
                            })}
                             </tbody>
                        </table>
                        {numToShow < props.travelWarningData.length &&
                            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4" onClick={handleLoadMore}>Load More</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TravelWarningsList;