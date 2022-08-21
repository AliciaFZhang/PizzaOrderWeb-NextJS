import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png"
  ];
  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" alt="" width="20" height="20"/>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map(((img, i)=>
          <Image src="/img/featured.png" key={i} alt="" layout='fill'/> ))}

        </div>
      </div>
      <Image src="/img/arrowr.png" alt="" width="20" height="20"/>
    </div>
  )
}
export default Featured;