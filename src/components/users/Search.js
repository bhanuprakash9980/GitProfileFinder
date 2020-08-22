import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';
const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
          } else {
            githubContext.searchUsers(text);
            setText('');
          }
        }}
        className='form'
      >
        <input
          type='text'
          name='text'
          placeholder='Search Users ...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
        {githubContext.users.length > 0 && (
          <input
            type='button'
            value='Clear Users'
            className='btn btn-light btn-block'
            onClick={githubContext.clearUsers}
          />
        )}
      </form>
    </div>
  );
};

export default Search;
