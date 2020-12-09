import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../Loader';

// == server method
import getOneRandomMatch from '../../utils/getOneRandomMatch';
import getTotalVotes from '../../utils/getTotalVotes';
import addVoteAndCat from '../../utils/addVoteAndCat';

// == assets
import logo from '../../assets/img/catmashbig.png';
import './styles.scss';

const RandomMatch = () => {
    const { match, totalVotes } = useSelector((state) => state);
    React.useEffect(() => {
        getOneRandomMatch();
        getTotalVotes();
    }, []);

    const handleVote = (name, imagePath) => {
        const body = {
            name,
            image_path: imagePath
        };
        addVoteAndCat(body);
    }

    let matchJSX = (<Loader />);
    if (match.length > 0) {
        matchJSX = match.map((m) => {
            return(
                <div
                  style={{
                    backgroundImage: `url(${m.url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                  onClick={() => handleVote(m.id, m.url)}
                  key={m.id}
                  className="cat-container"
                 />
            )
        });
    }
    return(
        <div className="bloc-page">
          <div className="logo-container">
              <img className="logo" src={logo} alt="logo-catmatch"/>
          </div>
          <div
            className="catmatch-container"
          >
            {matchJSX}
          </div>
          <div className="link-container">
            <Link className="link" to="/rank">
                <div className="text-container">
                  Voir les plus beaux chats<br />
                  <span style={{fontSize: '0.8em'}}>{`${totalVotes} votes` || 'loading...'}</span>
                </div>
            </Link>
          </div>
        </div>
    )
};

export default RandomMatch;