import Axios from "../Axios/api";
const Categorie_API="/categories"


const fetchCategories=async()=> {
return await Axios.get(Categorie_API);
}

const Categorieservice={fetchCategories}
export default Categorieservice ;