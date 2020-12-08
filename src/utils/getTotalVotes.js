import axios from 'axios';
import store from '../store/index';
import { API_URL } from './constante';

// == actions
import { setTotalVotes } from '../store/actions';

const getTotalVotes = () => {
  axios.get(`${API_URL}/totalvotes`)
    .then((res) => {
        store.dispatch(setTotalVotes(res.data[0].total_votes));
    })
    .catch((err) => console.trace(err));

};

export default getTotalVotes;
