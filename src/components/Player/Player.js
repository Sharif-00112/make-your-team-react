import React from 'react';
import './Player.css'

const Player = (props) => {
    const {name, age, country, details, img, goals, cost, previousClub} = props.player;
    console.log(props);

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt={name}/>
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">{details}</p>
                            <h5>Country: {country}</h5>
                            <h5>Previous Club: {previousClub}</h5>
                            <h5>Age: {age}</h5>
                            <h5>Total Goals: {goals}</h5>
                            <h4>Hiring Cost: {cost}</h4>
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-primary'>Add Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;