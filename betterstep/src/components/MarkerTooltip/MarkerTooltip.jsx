import styles from './MarkerTooltip.module.css'
import Button from '../Button/Button'
import CameraCapture from '../Camera/CameraCapture'
// custom marker tooltip
export default function MarkerTooltip({ marker, callback }) {
  console.log(marker)
  // callback function for accepting or declining quest (passes state back to map component)
  function handleAccept() {
    callback(null)
  }

  function handleDecline() {
    callback(null)
  }
  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltip}>
        <h2>{marker.name}</h2>
        <span>{marker.sites_master.type_name}</span>
        <p>{marker.description}</p>
        <img
          src={marker.image}
          onError={(e) =>
            (e.target.src = 'https://via.placeholder.com/1000x200')
          }
          alt={marker.about}
          className={styles.img}
        />

        <div className="buttonbox">
          <Button onClick={handleAccept}>Accept</Button>
          <Button onClick={handleDecline}>Decline</Button>
        </div>
      </div>
    </div>
  )
}
