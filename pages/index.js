import Head from 'next/head'
import Image from 'next/image'
import JSONInput from '../components/JSONInput'
import styles from '../styles/Home.module.css'

import exampleJson from '../static-data/example-form.json'

const  Home = ({exampleJson}) =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ziphii Test</title>
        <meta name="description" content="Ziphii test - Also this is amazing, dynamic meta tags!" />
   
      </Head>
    <div>
    <h1 className={styles.title}>JSON Form Creator</h1>
    <JSONInput exampleJson={exampleJson}/>
    </div>
    </div>
  )
}



export const getStaticProps = async () => {
  return {
   props:  {exampleJson}
  }
}
export default Home; 