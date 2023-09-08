import { useState } from "react"

export default function Team(){
   
   const teamStylse = {
    border: '2px solid green',
    borderRadius: '15px',
    margin: '10px'
   }

   const [team, setTeam] = useState(11);

   const handleAdd =()=>{
    const newTeam = team + 1;
    setTeam(newTeam);
   }
   const handleRemove =() =>{
    if(team > 11){
        const newTeam = team -1;
        setTeam(newTeam);
    }
   }
    return (
        
          <div style={teamStylse}>
             <h3>Players : {team}</h3>
             <button onClick={handleAdd}>Add Players</button>
             <button onClick={handleRemove}>Remove Playsers</button>
          </div>
    )
}