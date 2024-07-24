import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Links from './components/Links'
import Profile from './components/Profile'
import styles from './home.module.css'
import ProfilePreview from '../../components/profilePreview/ProfilePreview'
import Phone from '../../assets/Phone'

export default function Home() {
    const {
        user
    } = useContext(AuthContext)

    const [page, setPage] = useState('links')

    const navigate = useNavigate()

    useEffect(() => {
        const sessionUser = sessionStorage.getItem('user')

        if (!sessionUser && !user) {
            navigate('')
        }
    }, [user, navigate])

    return (
        <>
            <div className={styles.div}>

            
            <Header
                page={page}
                setPage={setPage}
            />

                <main className={styles.main}>

                    <section className={styles.snapshot_wrapper}>

                        <div className={styles.snapshot}>

                            <Phone />

                            <ProfilePreview
                                bare
                            />

                        </div>

                    </section>
                    <div className={styles.right}>
                        
                    {page === 'links' ? <Links /> : <Profile />}
                    </div>
                </main>

                </div>
        </>
    )
}