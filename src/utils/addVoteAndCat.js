import axios from 'axios';

import { API_URL } from './constante';
import getOneRandomMatch from './getOneRandomMatch';



const addVote = (body) => {
  axios
      .post(`${API_URL}/vote`,
        body
      )
      .then((res) => {
        // getAllPosts(userId);
        getOneRandomMatch();
        console.log('res', res)
      })
      .catch((err) => console.trace(err));
};

export default addVote;
