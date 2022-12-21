import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Sobre from './sobre/sobre';
import Home from './home/home';
import Certificados from './certificados/certificados';
import './globalStyles.css';
import Skills from './skills/skills';


export default function App() {
    return (
        <>
            <Header />
            <Home />
            <Sobre />
            <Skills />
            <Certificados />
        </>
    )
} 