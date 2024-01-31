import Product from "./Product";
import data from "../../data/data";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productSlice";
import ShowAllCategories from "../Filters/ShowAllCategories";

const AllProducts = () =>{
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>  
            <div> 
                <ShowAllCategories/>
            </div>      
            <div className="CardOfProducts">
            {data
            .filter(product =>{
                if (selectedCategory === "ALL") return true;
                return selectedCategory === product.category
            })
            .map(product => <Product key={product.id} product={product} />)}
        </div>
        </div>

    )
}
export default AllProducts;