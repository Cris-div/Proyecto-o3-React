import { useState } from 'react';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/list/CharacterCard';
import Pagination from '../components/list/Pagination';
import FilterBar from '../components/list/FilterBar';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorAlert from '../components/common/ErrorAlert';

const ListPage = () => {
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(1);
    const { characters, loading, error, info } = useCharacters(filters, page);

    const resetFilters = () => {
        setFilters({});
        setPage(1);
    };
    return (
    <>
    <div className="container my-4">
        <h1 className="mb-3">Listado de Personajes</h1>
        <FilterBar filters={filters} setFilters={setFilters} resetFilters={resetFilters} />
        {loading && <LoadingSpinner />}
        {error && <ErrorAlert message={error} />}

        <div className="d-flex flex-wrap justify-content-start">
            {characters.map(c => <CharacterCard key={c.id} character={c} />)}
        </div>
        <Pagination info={info} page={page} setPage={setPage} />
    </div>
    </>
    );
};

export default ListPage;