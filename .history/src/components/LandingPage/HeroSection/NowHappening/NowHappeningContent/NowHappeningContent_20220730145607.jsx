import { useEffect } from "react";
import styles from "./NowHappeningContent.module.scss";
import { FilterContents } from "../../../../utilities/datetime";

const NowHappeningContent = ({ time, event, platform , description })=>{

    useEffect(() => {

        }
    )

    return(
        <div>
            <div className={styles["details"]}>
                <h4>{time}</h4>
                <h2>{event}</h2>
                <h3>{platform}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NowHappeningContent;