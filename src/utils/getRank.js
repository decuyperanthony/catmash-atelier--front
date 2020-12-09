import axios from 'axios';
import store from '../store/index';
import { API_URL } from './constante';

// == actions
import { setCatRankIng } from '../store/actions';

const getRank = () => {
  axios.get(`${API_URL}/rank?limit=10&offset=0`)
    .then((res) => {
        store.dispatch(setCatRankIng(res.data));
    })
    .catch((err) => console.trace(err));

};

export default getRank;
