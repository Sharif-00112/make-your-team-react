import React, { useState } from 'react';
import { useEffect } from 'react';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() =>{
        fetch('./players.JSON')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    // console.log(players);
    return (
        <div className='container'>
            <div className="players-list">
                <h2>Available Players</h2>
                {
                    players.map(player => <Player
                        key = {player.key}
                        player = {player}
                    ></Player>)
                }
            </div>
            <div className="added-players">
                <h2>Team Overview</h2>
                <hr />
                {
                    <Team></Team>
                }
            </div>
        </div>
    );
};

export default Players;