const TravelWarningsList = () => {
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
                                    <th className="border border-slate-300 ">Office</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-12">
                                    <td className="border border-none">Indiana</td>
                                    <td className="border border-none">Indianapolis</td>
                                    <td className="border border-none">Indianapolis</td>
                                    <td className="border border-none">Indianapolis</td>
                                </tr>
                                <tr className="h-12">
                                    <td className="border border-none">Ohio</td>
                                    <td className="border border-none">Columbus</td>
                                    <td className="border border-none">Ohio</td>
                                    <td className="border border-none">Columbus</td>
                                </tr>
                                <tr className="h-12">
                                    <td className="border border-none">Michigan</td>
                                    <td className="border border-none">Detroit</td>
                                    <td className="border border-none">Michigan</td>
                                    <td className="border border-none">Detroit</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TravelWarningsList;