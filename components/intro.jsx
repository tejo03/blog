import styles from "../styles/intro.module.css"
import Image from "next/image";
import Circle from "./circle";
const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="skyblue" top="-50vh" left="-50vh"></Circle>
            <Circle backgroundColor="skyblue" top="0vh" right="-50vh"></Circle>
            <Circle backgroundColor="skyblue" top="75vh" right="75vh"></Circle>
            <div className={styles.area}>
                <h1 className={styles.title}>The One Where I started a</h1>
                <h1 className={styles.blog}>BLOG</h1>
                <p className={styles.caption}>Want to know more about me...</p>
                <button className={styles.button}>discover</button>
            </div>
            <div className={styles.area}>
            <Image src="/images/hello.jpg" width="200%" height="100%" layout="fill" ></Image>
            </div>
        </div>
    )
}
export default Intro;