import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagues } from '../redux/leagues/leagues';
import './Categories.module.css';

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues);
  }, []);

  const leagues = useSelector((state) => state.leagues);
  console.log(leagues);

  const [league, setLeague] = useState();
  console.log(league);

  const displayLeague = (id) => {
    setLeague(() => [...leagues.filter((l) => l.league_id === id)]);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => displayLeague(39)}>Premier League</button>
        <button type="button" onClick={() => displayLeague(135)}>Serie A</button>
        <button type="button" onClick={() => displayLeague(140)}>La Liga</button>
        <button type="button" onClick={() => displayLeague(186)}>Ligue 1</button>
      </div>
    </div>
  );
}

export default Categories;
