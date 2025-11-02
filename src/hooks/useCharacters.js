import { useState,useEffect, use } from "react";
import { getCharacters } from "../services/characterService";

const useCharacters = (filters , page ) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState({});
    useEffect(() => {
        const fetcData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getCharacters({ ...filters, page });
                setCharacters(data.results);
                setInfo(data.info);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetcData();
    }, [filters, page]);
    return { characters, loading, error, info };
};

export default useCharacters;