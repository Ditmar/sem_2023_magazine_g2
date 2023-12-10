import styles from './styles.module.scss';
import HomeIcon from "@/app/somerute/ARCHIVO 2.svg";
'use Client'
const NewArticulo = () => {
  return (
    <div className={styles.container}>
        
        <form className={styles.formu}>

            <h1 className={styles.title}>nuevo articulo</h1>
            <label className={styles.labels}>TITULO: </label>
            <input className={styles.inputs}type="text" name="titulo" id="titulo" />

            <label className={styles.labels}>AUTOR: </label>
            <input className={styles.inputs}type="text" name="autor" id="autor"/>

            <label className={styles.labels}>FECHA: </label>
            <input className={styles.inputs2}type="text" name="fecha" id="fecha"/>

            <label className={styles.labels1}>VOLUMEN: </label>
            <input className={styles.inputs2}type ="text" name="volumen" id="volumen"/>

            <div className={styles.sepa}>

                <div className={styles.sepas}>
                    <HomeIcon className={styles.sepaIcon}/>
                    <input  className={styles.inputs3} type="submit" name="enviar" value="Cargar Imagens"/>
                    <p className={styles.text}>Las imagenes tienen que ser de formato jpg, en un tamaño mayor de 5 MB.</p>
                </div>

                <div className={styles.sepas}>
                    <HomeIcon className={styles.sepaIcon}/>
                    <input  className={styles.inputs3}type="submit" name="enviar" value="Cargar Documento"/>
                    <p className={styles.text}>Se podra subir documento en formato pdf, docx. que el tamaño no sea mayor a 20 MB</p>
                </div>
            </div>
            <input className={styles.inputs1} type="submit" name="enviar" value="SUBIR ARTICULO"/>
            
        </form>
    </div>
  );
}

export default NewArticulo