import axios from 'axios';

import { API_URL } from './constante';
import getOneRandomMatch from './getOneRandomMatch';
import getTotalVotes from './getTotalVotes';



const addVote = (body) => {
  axios
      .post(`${API_URL}/vote`,
        body
      )
      .then(() => {
        getOneRandomMatch();
        getTotalVotes();
      })
      .catch((err) => console.trace(err));
};

export default addVote;
