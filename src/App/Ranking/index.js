import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import getRank from '../../utils/getRank';
import './styles.scss';

const Ranking = () => {
    const { rank } = useSelector((state) => state);
    React.useEffect(() => {
        getRank();
    }, []);
    let rankJSX = (<div>Loading...</div>);
    if (rank.length > 0) {
        rankJSX = rank.map((r) => {
            return(
                <div key={r.id}>
                    <div>
                        {/* {r.cat.name} */}
                         : {r.countvote}
                         <img style={{height: '10em', width: 'auto'}} alt="cat" src={r.image_path}/>
                    </div>
                </div>
            )
        });
    }
    return(
        <>
          <Link to="/">match</Link>
          <div>{rankJSX}</div>
        </>
    )
};

export default Ranking;