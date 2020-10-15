import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons'

const ActionItems = ({active, resetActive, yPoint, handleClick, resetCount, deleteGraph}) => {
  
  let displayVal = yPoint;
  if (active) {
    displayVal = 0;
  } else {
    displayVal = 1;
  }
  return  (
    <div className="actionItems">
      { active && <FontAwesomeIcon className={`btn icon ${resetActive && "resetActive"}`} onClick={deleteGraph} icon={faUndo} size="xs" />}
      <button type="button" className={`btn btn--primary ${active && "active--primary"}`} onClick={handleClick}>{active ? yPoint === 0 ? "01" : yPoint > 9 ? yPoint : "0" + yPoint : "Start"}</button>
      <button type="button" className={`${active ? "active" : 'inactive'}`} onClick={resetCount}>Reset</button>
    </div>
  )
}

export default ActionItems;
