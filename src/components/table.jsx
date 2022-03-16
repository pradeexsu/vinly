import React from 'react';
import TableBody from './tableBody';
import TableHeader from "./tableHeader";

const MoviesTable = (props) => {
    const { movies, onLiked, onDelete, raiseSort } = props
    const columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "year", label: "Year" },
        { path: "rate", label: "Rate" },
        { key: "likes" },
        { key: "delete" },
    ]
    return (
        <>
            <table className="table">
                <TableHeader
                    raiseSort={raiseSort}
                    columns={columns}
                />
                <TableBody
                    movies={movies}
                    onDelete={onDelete}
                    onLiked={onLiked}
                />
            </table>
        </>
    );
}

export default MoviesTable;