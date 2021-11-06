/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { fetchMovies } from '@features/index';
import { IMovie } from '@features/types';

import MovieCard from '../MovieCard/MovieCard';

import './FilteredMoviesList.scss';

interface IFilteredMoviesListParams {
  filterFunc: () => boolean;
  allowDuplicates?: boolean;
}

const FilteredMoviesList = ({
  filterFunc,
  allowDuplicates,
}: IFilteredMoviesListParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    return () => {};
  }, []);

  const movies = useSelector((state: RootStateOrAny) => state.movies);

  // Filter out movies by using the filterFunc.
  // Duplicates are optionally removed by creating a new Array from a Set of the filtered movies.
  // (Sets can't contain duplicate entries)
  const filteredMovies = allowDuplicates
    ? movies.filter(filterFunc)
    : Array.from(new Set(movies.filter(filterFunc)));

  return (
    <div className="movies-list">
      {filteredMovies.map((movie: IMovie, index: number) => (
        <MovieCard key={`${movie._id}${index}`} movie={movie} />
      ))}
    </div>
  );
};

export default React.memo(FilteredMoviesList);