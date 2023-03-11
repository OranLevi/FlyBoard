import { useState, useEffect } from "react";
import axios from "axios";

import FlightBoardFilter from "../components/FlightBoard/FlightBoardFilter";
import FlightList from "../components/FlightBoard/FlightsList";

const FlightBoard = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/flights`);
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
            <FlightBoardFilter flightData={data} isLoading={isLoading} />
            <FlightList flightData={data} isLoading={isLoading} />
        </>
    );
}

export default FlightBoard;