import styles from './ListView.module.css'
import Button from '../Button/Button'

export default function ListView({ locations, callback }) {
  function handleClose() {
    callback(null)
  }

  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        <Button onClick={handleClose}>Close</Button>
        <h2>Locations</h2>
        <ul>
          {locations?.data?.map((location) => (
            <li key={location.id}>
              <h3>{location.name}</h3>
              <span>{location.sites_master.type_name}</span>
              <p>{location.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
