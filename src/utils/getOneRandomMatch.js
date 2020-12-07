import axios from 'axios';
import store from '../store/index';
import { API_URL } from './constante';

// == actions
import { setMatch } from '../store/actions';

const getOneRandomMatch = () => {
  axios.get(`${API_URL}/match`)
    .then((res) => {
        store.dispatch(setMatch(res.data));
    })
    .catch((err) => console.trace(err));

};

export default getOneRandomMatch;
