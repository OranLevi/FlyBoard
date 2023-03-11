import { useState, useEffect } from "react";
import axios from "axios";

import FlightBoardFilter from "../components/FlightBoard/FlightBoardFilter";
import FlightList from "../components/FlightBoard/FlightsList";

const FlightBoard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3001/flights`);
                setData(response.data.result.records);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <FlightBoardFilter flightData={data} />
            <FlightList flightData={data} />
        </>
    );
}

export default FlightBoard;