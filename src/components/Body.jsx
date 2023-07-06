
import styles from './Body.module.css';

import { SideBar } from './SideBar';
import { Vips } from './Vips';
import { Carro } from './Carro';
import { Moto } from './Moto';
import { Outros } from './Outros';
import { Mansoes } from './Mansoes';



export function Body() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.SideBar}>
                <SideBar />
            </div>

        </div>
    );
}