import axios from 'axios';
import store from '../store/index';
import { API_URL } from './constante';

// == actions
import { setTotalCats } from '../store/actions';

const getTotalCats = () => {
  axios.get(`${API_URL}/totalcats`)
    .then((res) => {
        store.dispatch(setTotalCats(res.data[0].total_cats));
    })
    .catch((err) => console.trace(err));

};

export default getTotalCats;
