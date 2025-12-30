import HeroBanner from "../components/HeroBanner/HeroBanner"
import CategorySection from "./Categories"
import Products from "./Products"

const Home = () => {
    return (
        <>
            <HeroBanner />
            <div>
<CategorySection/>
            </div>

            <div>
                <Products />
            </div>
        </>
    )
}
export default Home
