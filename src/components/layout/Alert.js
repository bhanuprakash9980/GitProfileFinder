import React, { useContext } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import AlertContext from '../../context/alert/alertContext';

export const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <AiOutlineInfoCircle />
        {alert.message}
      </div>
    )
  );
};
