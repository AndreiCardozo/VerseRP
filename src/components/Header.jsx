// Header.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';
import VerseLogo from '../assets/VerseLogo.png';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <header>
            <nav>
                <div className={styles.sidebarWrapper}>
                    <div className={styles.container}>
                        <ul>
                            <li>
                                <div className={styles.nav_links}>
                                    <a href="#" className={styles.hoverEffect}>INÍCIO</a>
                                    <a href="#" className={styles.hoverEffect}>DISCORD</a>
                                    <a href="#" className={styles.hoverEffect}>INSTAGRAM</a>
                                </div>
                                <div className={styles.nav_buttons}>
                                    <a href="#" className={`${styles.store_btn} ${styles.hoverEffect2}`}>LOJA</a>
                                    <a href="#" className={styles.hoverEffect}>
                                        <FontAwesomeIcon className={styles.cartIcon} icon={faCartShopping} />
                                        CARRINHO
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={styles.wrapper}>
                <div className={`${styles.fivem} ${styles.zoomOutEffect}`}>
                    <h1>CONECTAR-SE AO FIVEM</h1>
                    <p>Clique para jogar</p>
                </div>
                <div className={`${styles.logo} ${styles.zoomOutEffect}`}>
                    <img src={VerseLogo} alt="Logo do Verse" />
                </div>
                <div className={`${styles.discord} ${styles.zoomOutEffect}`}>
                    <h1>ENTRAR NO DISCORD</h1>
                    <p>Participe da nossa comunidade</p>
                </div>
            </div>
        </header>
    );
}
