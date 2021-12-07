import axios from "axios";

export default class ProductService{
    static async getProducts(categoryId,categoryName){
        try{

            const category = JSON.stringify({Id:categoryId,Name:categoryName});
            console.log(category)
            const response=await axios.post('http://localhost:5000/api/products/byCat',{Id:categoryId,Name:categoryName});

            const products = response.data;
            return products;

        }
        catch (e){
            console.log(e);
        }
    }
    static async getServices(){
        try{
            const response=await axios.get('http://localhost:5000/api/products/all');

            const products = response.data;

        }
        catch (e){
            console.log(e);
        }
    }
}