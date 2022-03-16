import React from 'react';

const GenreFilter = (props) => {
    const { genres, currentGenre, onFilterGenre } = props
    return (
        <div className="list-group">
            {
                genres.map(g => (
                    <a href="#"
                        onClick={() => onFilterGenre(g)}
                        key={g.id}
                        className={"list-group-item list-group-item-action "
                            + (currentGenre.id === g.id ? "active" : "")}
                    >{g.name}</a>)
                )
            }
        </div>);
}

export default GenreFilter;