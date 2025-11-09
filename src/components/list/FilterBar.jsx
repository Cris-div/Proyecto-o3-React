import { FaSearch, FaBroom } from "react-icons/fa";

const FilterBar = ({ filters, setFilters, resetFilters }) => {
  return (
    <div className="bg-light p-3 rounded shadow-sm mb-4">
      <div className="row g-2 align-items-center">
        {/* Campo: Nombre */}
        <div className="col-md-3 col-sm-6">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              className="form-control"
              value={filters.name || ""}
              onChange={(e) =>
                setFilters({ ...filters, name: e.target.value })
              }
            />
          </div>
        </div>

        {/* Campo: Especie */}
        <div className="col-md-3 col-sm-6">
          <input
            type="text"
            placeholder="Filtrar por especie..."
            className="form-control"
            value={filters.species || ""}
            onChange={(e) =>
              setFilters({ ...filters, species: e.target.value })
            }
          />
        </div>

        {/* Campo: Estado */}
        <div className="col-md-3 col-sm-6">
          <select
            className="form-select"
            value={filters.status || ""}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
          >
            <option value="">Todos los estados</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>

        {/* Botón Limpiar */}
        <div className="col-md-3 col-sm-6 d-flex justify-content-sm-end">
          <button
            className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={resetFilters}
          >
            <FaBroom /> Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
