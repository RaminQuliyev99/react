import axios from "axios";

 export const productsAdd = async (payload) =>{
  await axios.post('gs://react-base-de165.appspot.com', payload);}



  export const productsGet = async ()=>{
    let {data} = await axios.get('gs://react-base-de165.appspot.com');
    let products = [ ];

    for(let key in data){
       data[key].id = key;
       products.push(data[key]);
    }

    return products;
}

