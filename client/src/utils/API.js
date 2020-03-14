require('dotenv').config();
import axios from "axios";
const trefle = process.env.REACT_APP_TREFLE_KEY;

export default {
    getPlant: function(plant) {
        return axios.get(`https://trefle.io/some-url?token=${trefle}`)
            .then(res => {
                if (!res.data.results.length) {
                    return alert("Not a valid plant!");
                }

                const {  } = res.data;
                return axios.get(``);


            })
            .catch(err => {
                console.log(err);
            })
    }
}