import React from 'react'
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import styles from './TwitterFeed.module.scss'
const TwitterFeed = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <h1  className={styles["header"]}>Header</h1>
      </div>
      <div>
      <TwitterTimelineEmbed
       sourceType="profile"
        screenName="CyrilOlanolan"
         options={{height: 700 ,width:700}}
         />
      </div>

    </div>
  )
}

export default TwitterFeed