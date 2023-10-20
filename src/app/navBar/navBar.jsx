import styles from './navBar.module.css'
import Image from 'next/image'
import MyImage from './images/dropdown.png'


function NavBar() {
    return (
        <div>
            <div className={styles.navbar}>

                <div className={styles.logo}>
                    <div>EDYODA</div>
                    <p>Stories</p>
                </div>

                <div className={styles.explore}>
                    <span>Explore Categories</span>
                    <span>
                        <Image src={MyImage} alt='img' style={{height:'40px', width:'40px', paddingTop:"0"}}/>
                    </span>
                </div>

                <div className={styles.dialoge}>
                    <p>EdYoda is a learning and knowledge <br /> sharing platform for techies</p>
                </div>

                <div className={styles.homeButton}>
                    <button>Go To Main Website</button>
                </div>

            </div>
        </div>
    )
}

export default NavBar