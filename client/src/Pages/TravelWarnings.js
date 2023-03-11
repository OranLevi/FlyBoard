import { useState, useEffect } from "react";
import axios from "axios";

import TravelWarningsFilter from "../components/TravelWarnings/TravelWarningsFilter";
import TravelWarningsList from "../components/TravelWarnings/TravelWarningsList";

const TravelWarnings = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/travelWarnings`);
                setData(response.data.result.records);
                setIsLoading(false)
            } catch (error) {
                console.error(error);
                setIsLoading(false)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <TravelWarningsFilter travelWarningData={data} isLoading={isLoading} />
            <TravelWarningsList travelWarningData={data} isLoading={isLoading} />
        </>
    );
}

export default TravelWarnings;