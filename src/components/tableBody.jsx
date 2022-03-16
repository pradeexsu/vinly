import React from 'react';
import Like from './comman/Like';

const TableBody = ({ movies, onDelete, onLiked }) => {
    return (
        <>
            <tbody>
                {movies.map(movie =>
                (<tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.year}</td>
                    <td>{movie.rate}</td>
                    <td
                        onClick={() => onLiked(movie)}>
                        <Like liked={movie.liked} /></td>
                    <td>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(movie)}
                        >Delete</button></td>
                </tr>)
                )}
            </tbody>
        </>
    );
}

export default TableBody;