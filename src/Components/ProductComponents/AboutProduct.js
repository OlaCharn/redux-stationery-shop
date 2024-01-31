import { useNavigate, useParams } from "react-router";
import data from "../../data/data";

const AboutProduct = () =>{
    const navigate = useNavigate();
    const {title} = useParams();

    return(
        <div>
            <button onClick={()=> navigate(-1)} >Go Back</button>

            {data.filter( (product) => product.title === title).map((item, index) => {
                return(
                    <div key={index} >

                        <img src={item.img} alt="old" width="400px" />
                        <h2> {item.name} </h2>
                        <p> {item.brand} </p>
                        <p> {item.format} </p>
                        <p> {item.price} </p>
                        <p> {item.description} </p>


                    </div>
                )
            })}
        </div>
    )
}
export default AboutProduct;