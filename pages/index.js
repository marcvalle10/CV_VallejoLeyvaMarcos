import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import styles from '../styles/Home.module.css';

const Home = () => {
    return ( <
        div className = { styles.mainContainer } >
        <
        Sidebar / >
        <
        Content / >
        <
        /div>
    );
};

export default Home;