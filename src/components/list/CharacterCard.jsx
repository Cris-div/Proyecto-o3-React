
const CharacterCard = ({ character }) => {
    return (
        <>
        <div className="card m-2" style={{width: '12rem'}}>
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Species: {character.species} - {character.status}</p>
            </div>
        </div>
        </>
    );
};

export default CharacterCard;