import Link from "next/link";
import styles from "./styles.module.scss";
import logo from '../../../public/imagenes/logo.jpg';
import ubicacion from '../../../public/imagenes/ubicacion.jpg';
import Vector from '../../../public/imagenes/Vector.jpg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imagenFooter}>
          <img src="imagenes/logo.jpg" className={styles.imagenFooter} alt="imagenFooter"></img>
      </div>
      <div className={styles.footertext}>
        <span className={styles.line}>|</span>
        <section className={styles.textR}>
          <h2 className={styles.text}>RECURSOS</h2>
          <h3 className={styles.list}>
            <li className={styles.articles}>
              <Link href="/articles">ARTICULOS</Link>
            </li>
            <li>
              <Link href="./volumes">VOLÚMENES</Link>
            </li>
          </h3> 
        </section>
        <span className={styles.line2}>|</span>
        <section className={styles.text1}>
          <h2 className={styles.text}>PAGINA</h2>
          <li className={styles.text2}> UNIPOL.EDU.BO</li>
        </section>
      </div>
        
      <div className={styles.text3}>
        <section className={styles.text4}>
          <p className={styles.text5}>UBICACIÓN</p>
          <img src="imagenes/ubicacion.jpg" className={styles.imagenFooter2} alt="imagenFooter2"></img>
          
        </section>
        <p className={styles.line3}>|</p>
        <section className={styles.text4}>
          <p className={styles.text5}>SÍGUENOS EN</p>
          <img src="imagenes/Vector.jpg" className={styles.imagenFooter2}  alt="imagenFooter2"></img>
        </section>
      </div>
    </footer>
  );
};

export default Footer;