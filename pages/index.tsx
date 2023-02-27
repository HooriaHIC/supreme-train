import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import SEO from '../components/SEO/meta'
import ModelLoad from '../components/3dDemo/index'

const Home: NextPage = () => {
  return (      
    <div className={styles.container}>
        <SEO
          title={"Birthday Parrrrty"}
          description="Fun."
        />
        <div className={styles.row}>
          <ModelLoad />
        </div>
    </div>
  )
}

export default Home