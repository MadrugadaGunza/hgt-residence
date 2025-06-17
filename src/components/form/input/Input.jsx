import styles from './Input.module.css'

const Input = ({ label, id, name, type, placeholder, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default Input
