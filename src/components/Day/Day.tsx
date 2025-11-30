import React from 'react';
import styles from './Day.module.css';

interface DayProps {
  number: number;
  isSelected: boolean;
  onClick: (day: number) => void;
}

export const Day: React.FC<DayProps> = ({ number, isSelected, onClick }) => {
  const currentDay = new Date().getDate();
  const isCurrentDay = number === currentDay;

  function handleClick() {
    if (number >
       currentDay) return;
    onClick(number);
  }
  
  return (
    <div 
      className={`${styles.day} ${isCurrentDay ? styles.current : ''} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
    >
      {number}
    </div>
  );
};
