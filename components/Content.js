import styles from '../styles/Home.module.css';

const Content = () => {
    return ( <
        div className = { styles.content } >
        <
        section className = { styles.proyectos } >
        <
        h2 > Proyectos Universitarios < /h2> <
        ul >
        <
        li > Desarrollo de un sistema de inventarios para una tienda local usando Java y MySQL. < /li> <
        li > Aplicación web para la gestión de tareas basada en Node.js y MongoDB. < /li> <
        li > Creación de una API RESTful para un sistema de calificaciones con Laravel y Vue.js. < /li> <
        /ul> <
        /section>

        <
        section className = { styles.softSkills } >
        <
        h2 > Habilidades Blandas(Soft Skills) < /h2> <
        SkillBar label = "Trabajo en equipo"
        value = { 90 }
        /> <
        SkillBar label = "Resolución de problemas"
        value = { 85 }
        /> <
        SkillBar label = "Comunicación efectiva"
        value = { 80 }
        /> <
        /section>

        <
        section className = { styles.techSkills } >
        <
        h2 > Lenguajes de Programación < /h2> <
        SkillBar label = "Python"
        value = { 85 }
        /> <
        SkillBar label = "JavaScript"
        value = { 75 }
        /> <
        SkillBar label = "Java"
        value = { 70 }
        /> <
        SkillBar label = "SQL"
        value = { 90 }
        /> <
        /section>

        <
        section className = { styles.idiomas } >
        <
        h2 > Idiomas < /h2> <
        SkillBar label = "Español (Nativo)"
        value = { 100 }
        /> <
        SkillBar label = "Inglés (Avanzado)"
        value = { 85 }
        /> <
        /section>

        <
        section className = { styles.buttons } >
        <
        a href = "/cv.pdf"
        download className = { styles.button } > < i className = "fas fa-file-pdf" > < /i> Descargar CV en PDF</a >
        <
        a href = "https://www.youtube.com/watch?v=ejemplo_videocv"
        target = "_blank"
        className = { styles.button } > < i className = "fas fa-video" > < /i> Ver Videocurrículum</a >
        <
        /section> <
        /div>
    );
};

const SkillBar = ({ label, value }) => ( <
    div className = { styles.skill } >
    <
    label > { label } < /label> <
    div className = { styles.progressBar } >
    <
    div className = { styles.progress }
    style = {
        { width: `${value}%` } } > < /div> <
    /div> <
    /div>
);

export default Content;