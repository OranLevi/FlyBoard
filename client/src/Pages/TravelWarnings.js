import { useState, useEffect } from "react";
import axios from "axios";

import TravelWarningsFilter from "../components/TravelWarnings/TravelWarningsFilter";
import TravelWarningsList from "../components/TravelWarnings/TravelWarningsList";

const TravelWarnings = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/travelWarnings`);
                setData(response.data.result.records);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <TravelWarningsFilter travelWarningData={data} />
            <TravelWarningsList travelWarningData={data} />
        </>
    );
}

export default TravelWarnings;