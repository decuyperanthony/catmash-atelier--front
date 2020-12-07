import axios from 'axios';
import store from '../store/index';
import { API_URL } from './constante';

// == actions
import { setRank } from '../store/actions';

const getRank = () => {
  axios.get(`${API_URL}/rank`)
    .then((res) => {
        store.dispatch(setRank(res.data));
    })
    .catch((err) => console.trace(err));

};

export default getRank;
