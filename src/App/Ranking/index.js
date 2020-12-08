import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import getRank from '../../utils/getRank';

import logo from '../../assets/img/catmashbig.png'
import './styles.scss';

const Ranking = () => {
    const { rank } = useSelector((state) => state);
    React.useEffect(() => {
        getRank();
    }, []);

    let rankJSX = (<div>Loading...</div>);
    if (rank.length > 0) {
        rankJSX = rank.map((r, index) => {
            let borderColorCatImage;
            if (index === 0) borderColorCatImage = 'gold';
            if (index === 1) borderColorCatImage = 'silver';
            if (index === 2) borderColorCatImage = '#614e1a';
            let voteWord = "vote";
            if (r.countvote > 1) voteWord += 's';
            return(
              <div key={r.id} style={{marginBottom: '1em'}}>
                  <div
                    style={{
                      backgroundImage: `url(${r.image_path})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      borderColor: borderColorCatImage
                    }}
                    className="cat-rank-div-img"
                    />
                    <span className="vote-typo">
                      {r.countvote} {' '} {voteWord}
                    </span>
              </div>
            )
        });
    }

    return(
        <div className="bloc-page">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo-catmatch"/>
          </div>
          <div className="cats-container-rank">{rankJSX}</div>
          <div className="link-container">
            <Link className="link" to="/">
              <div className="text-container">
                Retour à Catmash
              </div>
            </Link>
          </div>
        </div>
    )
};

export default Ranking;