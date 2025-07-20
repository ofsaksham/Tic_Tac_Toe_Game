import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [ playerName, setPlayerName] = useState(initialName);

    const [ isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);  when you are updating you current state based on a  previous state vale 
        // you should use this function like this  of the state updating function.
        setIsEditing((editing) => !editing);

        if ( isEditing ) {
            onChangeName(symbol, playerName);
        }
    }

    function handlechange(event) {
        setPlayerName(event.target.value);
     
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let btncaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handlechange}/>  //two way binding
        // btncaption = "Save";
    }

    

    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}