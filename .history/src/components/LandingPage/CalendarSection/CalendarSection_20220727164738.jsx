import React from 'react'
import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../sampleData/calendarData.json'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
        {Calendar.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <NowHappeningContent
                        time={item.DateTime}
                        event={item.event}
                        platform={item.platform}
                        description={item.desc}
                      />
                    </React.Fragment>
                  );
                })}
        </div>
    </div>
  )
}

export default CalendarSection