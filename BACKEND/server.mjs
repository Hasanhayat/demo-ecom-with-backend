import express from "express";
import cors from "cors";

app.use(cors());

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());


let products = [
    {id: 1, name: "Product 1", price: 499,description: "Description for Product 1", image: "https://placehold.co/400"},
];

app.get("api/getProducts", (req, res) => {
    res.send(products);
});

app.post("/api/addProduct", (req, res) => { 
    const { name, price, description } = req.body;
    let image = req.body.image || "https://placehold.co/400"; 
    if (!name || !price || !description) {
        return res.status(400).send("required fields are missing");
    }
    const newProduct = {
        id: new Date().getTime(), // Unique ID based on timestamp
        name,
        price,
        description,
        image
    };
    products.push(newProduct);
    res.status(201).send("product added :",newProduct);
}
);

app.delete("/api/deleteProduct/:id", (req ,res)=>{
    let id = req.params.id;

    products = products.filter((product) => product.id !== parseInt(id));
    res.status(200).send("Product deleted successfully");

    // let isMatched = false;

    // for(let i=0; i < products.length; i++){
    //     if(products[i].id == productId){
    //         isMatched = true;
    //         products.splice(i , 1);
    //         break;
    //     }
    // }

    // if(isMatched){
    //     res.send("Product Deleted");
    // }else{
    //     res.send(`product id (${productId}) did not matched`)
    // }
    
})
app.put("api/updateProduct/:id", (req, res) => {
    
    const { name, price, description } = req.body;
    const id = parseInt(req.params.id);
    let image = req.body.image || "https://placehold.co/400"; 
    if (!name || !price || !description) {
        return res.status(400).send("required fields are missing");
    }
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
        return res.status(404).send("Product not found");
    }
    products[productIndex] = { id, name, price, description, image };
    res.status(200).send("Product updated successfully");
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
