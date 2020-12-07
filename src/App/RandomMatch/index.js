import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import getOneRandomMatch from '../../utils/getOneRandomMatch';
import addVoteAndCat from '../../utils/addVoteAndCat';

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
                <div onClick={() => handleVote(m.id, m.url)} key={m.id} className="cat-container">
                    <img style={{height: '20em', width: 'auto'}} src={m.url} alt="cat"/>
                </div>
            )
        });
    }
    return(
        <>
          <div>{matchJSX}</div>
          <Link to="/rank">classement</Link>
        </>
    )
};

export default RandomMatch;