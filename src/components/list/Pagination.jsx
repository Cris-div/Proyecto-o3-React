const Pagination = ({info ,page ,setPage}) => {
    if(!info.pages) return null;

    const prev = () => setPage((p) => Math.max(p - 1, 1));
    const next = () => setPage((p) => Math.min(p + 1, info.pages));
    return(
        <>
        <div className="d-flex justify-content-center align-items-center my-3 gap-2">
            <button className="btn btn-primary" onClick={prev} disabled={page === 1}>Prev</button>
            <span>Page {page} de {info.pages}</span>
            <button className="btn btn-primary" onClick={next} disabled={page === info.pages}>Next</button>
        </div>
        </>
    );
};

export default Pagination;