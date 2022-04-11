import styles from './home.module.css'
import Card from '../../components/card/card'
//import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
export default function Home(){
    return(
        <>
        <div className={styles.search}>
            <div className={styles.search__container}>
            
            <input>
            </input>
            <button>
                Search
            </button>
            </div>
        </div>



        <div className={styles.job_time}>
            <label for='time' >Full Time</label>
            <input id='time' type='checkbox'></input>
        </div>



        <div className={styles.location_search}>
            <label htmlfor='location-input'>
                Location
            </label>
            <input id="location-input" className={styles.location_input} placeholder='Search by location' type='text'>
            </input>


            <div className={styles.location_radio}>
            <label for='bengaluru'>Bengaluru</label>
            <input name='city' value='bengaluru' type='radio'></input>
            </div>
            <div className={styles.location_radio}>
            <label for='mumbai'>Mumbai</label>
            <input name='city' value='mumbai' type='radio'></input>
            </div>
            <div className={styles.location_radio}>
            <label for='chennai'>Chennai</label>
            <input name='city' value='chennai' type='radio'></input>
            </div>
            <div className={styles.location_radio}>
            <label for='delhi'>Delhi</label>
            <input name='city' value='delhi' type='radio'></input>
            </div>

        </div>

        <div className={styles.cardcontainer}>
            <Card></Card>
        </div>
        </>
    )
}