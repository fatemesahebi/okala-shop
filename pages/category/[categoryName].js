import {useRouter} from "next/router";
import {CategoryProducts, FooterContainer, Header} from "../../Components";


const Category = () => {
    const router = useRouter()
    const {categoryName} = router.query
    return (
        <div>
            <Header/>

            <FooterContainer/>
        </div>
    )
}

export default Category