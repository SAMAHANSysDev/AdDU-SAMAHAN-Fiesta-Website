import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      <div className={styles['content']}>
          {Calendar.events && Calendar.events.map((item) => {
             return(
              <div key={item.title}>
                {item.sched.map((perSched)=>{
                  return (
                    <>
                    
                    </>
                    )
                })}
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default CalendarBox