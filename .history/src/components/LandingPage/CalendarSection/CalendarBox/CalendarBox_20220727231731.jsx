import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title, sched}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
        <div className={styles['content']}>
        {sched.map((perSched)=>{
          return (
            <div className={styles['line']}>
              <div></div>
              {perSched.time}
              {perSched.activity}
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default CalendarBox
