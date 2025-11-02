
const FilterBar = () => {
    return (
    <>
    <div className="d-flex flex-wrap gap-2 mb-3">
        <input 
        type="text"
        placeholder="Nombre"
        className="form-control"
        value={filters.name || ''}
        onChange={(e) => setFilters({...filters, name: e.target.value})}
        />
        <input
        type="text"
        placeholder="Especie"
        className="form-control"
        value={filters.species || ''}
        onChange={(e) => setFilters({ ...filters, species: e.target.value })}
      />
      <input
        type="text"
        placeholder="Estado"
        className="form-control"
        value={filters.status || ''}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      />
      <button className="btn btn-secondary" onClick={resetFilters}>Limpiar</button>
    </div>
    </>
    );
};

export default FilterBar;