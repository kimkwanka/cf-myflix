/* eslint-disable react/no-array-index-key */
/* eslint no-restricted-globals: ["error"] */
import ErrorMessages from '@components/ErrorMessages/ErrorMessages';
import FilteredMoviesList from '@components/FilteredMoviesList/FilteredMoviesList';

import useProfileView from './useProfileView';

import './ProfileView.scss';

const ProfileView = () => {
  const {
    username,
    email,
    password,
    birthday,
    favoriteMovies,
    formatDate,
    handleSubmit,
    handleDelete,
    setEmail,
    setBirthday,
    setPassword,
    setUsername,
    userDataChanged,
    updateFormRef,
  } = useProfileView();

  return (
    <div className="profile-view">
      <h1>Profile</h1>
      <form className="profile-view__form" ref={updateFormRef}>
        <label htmlFor="formUsername">
          Username:
          <input
            id="formUsername"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={5}
            pattern="^[a-zA-Z0-9]+$"
          />
        </label>
        <label htmlFor="formPassword">
          Password:
          <input
            id="formPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="formEmail">
          Email:
          <input
            id="formEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="formBirthday">
          Birthday:
          <input
            id="formBirthday"
            type="date"
            value={formatDate(birthday)}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
        <div className="profile-view__button-wrapper">
          <button
            disabled={!userDataChanged}
            className="profile-view__update-button"
            type="submit"
            onClick={handleSubmit}
          >
            &#x21bb; Update Profile
          </button>
          <button
            className="profile-view__delete-button clear"
            type="submit"
            onClick={handleDelete}
          >
            &#10006; Delete Profile
          </button>
        </div>
        <ErrorMessages errorType="profileErrors" />
      </form>
      {favoriteMovies.length > 0 ? (
        <>
          <h2>Favorite Movies</h2>
          <FilteredMoviesList
            filterFunc={(movie) => favoriteMovies.includes(movie._id)}
          />
        </>
      ) : null}
    </div>
  );
};

export default ProfileView;
