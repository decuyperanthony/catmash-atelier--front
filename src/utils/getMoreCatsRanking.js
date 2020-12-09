import axios from 'axios';
import store from '../store/index';
import { API_URL } from './constante';

// == actions
import { setMoreCat } from '../store/actions';

const getMoreCatsRanking = (offset) => {
  axios.get(`${API_URL}/rank?limit=10&offset=${offset}`)
    .then((res) => {
        store.dispatch(setMoreCat(res.data));
    })
    .catch((err) => console.trace(err));

};

export default getMoreCatsRanking;
