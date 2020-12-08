import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import getOneRandomMatch from '../../utils/getOneRandomMatch';
import addVoteAndCat from '../../utils/addVoteAndCat';

import logo from '../../assets/img/catmashbig.png'
import './styles.scss';

const RandomMatch = () => {
    const { match } = useSelector((state) => state);
    React.useEffect(() => {
        getOneRandomMatch();
    }, []);

    const handleVote = (name, imagePath) => {
        const body = {
            name,
            image_path: imagePath
        };
        addVoteAndCat(body);
    }

    let matchJSX = (<div>Loading...</div>);
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
                  <span style={{fontSize: '0.8em'}}>12000 votes</span>
                </div>
            </Link>
          </div>
        </div>
    )
};

export default RandomMatch;