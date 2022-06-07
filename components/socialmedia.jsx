import styles from "../styles/socialmedia.module.css"
import Circle from "./circle";
const Socialmedia = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="skyblue" bottom="30vh" right="-30vh"></Circle>
            <Circle backgroundColor="skyblue" top="30vh" left="-30vh"></Circle>
        </div>
    )
}
export default Socialmedia;