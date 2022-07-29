import styles from './CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json'

const CalendarBox = (title, content) => {
  return (
    <div className={styles['CalendarBox']}>
      <div className={styles['container']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['content']}>{calendar.content}</div>
              </div>
    </div>
  )
}

export default CalendarBox