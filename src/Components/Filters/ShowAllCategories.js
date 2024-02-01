import Filter from "./Filter"

const ShowAllCategories = () =>{
    return(
        <div>
            <h1 className="Shop" >Robin's Stationery Shop</h1>
            <div className="Filters" >

            { ["ALL","PAPER", "MARKERS"].map(category => <Filter key={category} category={category} /> ) }
            </div>
        </div>
    )
}
export default ShowAllCategories;