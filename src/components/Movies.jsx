import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Pagination from './comman/Pagination';
import { paginate } from '../utils/paginate';
import GenreFilter from './Filter';
import MoviesTable from './table';
import { getGenres, getMovies } from "../utils/movieData"
import _ from 'lodash'

class Movies extends Component {
    state = {
        movies: getMovies(),
        displayOnly: [],
        genres: getGenres(),
        currentGenre: { title: "All Genre", id: 4 },
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: "title", order: "asc" }
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m.key !== movie.key)
        this.setState({ movies })
        const genre = this.state.currentGenre
        this.handleFilterGenre(genre)
    };
    handleLikes = (movie) => {
        const movies = this.state.movies
        const index = movies.indexOf(movie)
        movies[index].liked ^= true;
        this.setState({ movies })
    }
    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    }
    handleSort = path => {
        console.log("sort by ", path);
        this.setState({ sortColumn: path, order: "asc" })
    }

    handleFilterGenre = (genre) => {
        if (genre.id === this.state.genres[0].id) {
            this.setState({ displayOnly: this.state.movies })
        }
        else {
            const displayOnly = this.state.movies.filter(m => genre.id === m.genre.id)
            this.setState({ displayOnly })
        }
        this.setState({ currentGenre: genre })

    }
    componentDidMount() {
        this.setState({ displayOnly: this.state.movies })
    }
    render() {

        const count = this.state.displayOnly.length
        const { pageSize, currentPage, currentGenre, sortColumn } = this.state
        let genres = this.state.genres

        if (this.state.displayOnly.length === 0) return (<p>there is no movie to display</p>)

        const sortedMovie = _.orderBy(this.state.displayOnly, [sortColumn.path])
        const currentList = paginate(sortedMovie, currentPage, pageSize)

        return (
            <>
                <div className="ml-5 mt-5">
                    <div className="row">
                        <div className="col-2">
                            <GenreFilter
                                genres={genres}
                                currentGenre={currentGenre}
                                onFilterGenre={this.handleFilterGenre}
                            />
                        </div>
                        <div className="col-8">
                            <MoviesTable
                                movies={currentList}
                                onLiked={this.handleLikes}
                                onDelete={this.handleDelete}
                                raiseSort={this.handleSort}
                            />
                        </div>
                    </div>

                    <div className="row m-4">
                        <div className="col-3"></div>
                        <div className="col">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;