import Filter from "./Filter"

const ShowAllCategories = () =>{
    return(
        <div>
            <h1>SHOP</h1>
            <div className="Filters" >

            { ["ALL","PAPER", "MARKERS"].map(category => <Filter key={category} category={category} /> ) }
            </div>
        </div>
    )
}
export default ShowAllCategories;