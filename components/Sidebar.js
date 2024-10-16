import styles from '../styles/Home.module.css';

const Sidebar = () => {
    return ( <
        div className = { styles.sidebar } >
        <
        div className = { styles.profileImage } >
        <
        img src = "/tu-foto.jpg"
        alt = "Foto de Marcos Vallejo Leyva" / >
        <
        /div> <
        h1 > Marcos Vallejo Leyva < /h1> <
        p className = { styles.info } > < i className = "fas fa-map-marker-alt" > < /i> CP 85350, Col. Oriente, Calle 7, Lote 4, Manzana 47</p >
        <
        p className = { styles.info } > < i className = "fas fa-phone-alt" > < /i> 6221724807</p >
        <
        p className = { styles.info } > < i className = "fas fa-envelope" > < /i> marcosvalle546@gmail.com</p >
        <
        p className = { styles.info } > < i className = "fas fa-birthday-cake" > < /i> 23 Octubre de 2004</p >
        <
        p className = { styles.info } > < i className = "fas fa-flag" > < /i> Mexicana</p >
        <
        a href = "https://www.linkedin.com/in/marcos-vallejo-0534ab323"
        target = "_blank"
        className = { styles.linkedinBtn } > < i className = "fab fa-linkedin" > < /i> LinkedIn</a >
        <
        /div>
    );
};

export default Sidebar;