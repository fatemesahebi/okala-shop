import {useEffect, useState} from "react";
import Head from 'next/head';
import CategoryPage from "../CategoryPage/CategoryPage";
import {
    getBrandProducts,
} from "../lib/axios/getData";
import HomePage from "../HomePage/homePage";

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getBrandProducts('رامک').
        then(data => setData(data.products)).
        catch(res => alert(res.status))
    }, [])
    return (<div>
        <Head>
            <title>فروشگاه اینترنتی اکالا</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <CategoryPage/>
        {/*<HomePage/>*/}
    </div>)

};

export default Home