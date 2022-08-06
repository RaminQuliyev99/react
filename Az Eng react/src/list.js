import React, { useEffect , useState} from 'react';
import { useQuery } from 'react-query';
import { productsGet } from './api';


const List = () => {

    const [products, setProducts] = useState('');
    useEffect(()=>{
        setProducts(data)
      })
  const { isLoading, error, data } = useQuery('datali',productsGet);

  if (isLoading) return (<div> Yuklenir...  </div>)
  if (error) return 'An error has occurred: ' + error.message
  

  return (
    <div>
      <div className="container">
        <h1 className='text-center pt-3 text-warning' > Mehsul Siyahisi </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Tile</th>
              <th scope="col">Img</th>
              <th scope='col'>Operations</th>
            </tr>
          </thead>
          <tbody>

            {
              products &&
              products.map((item) => {
                return (
                  <tr key={item.id} >
                    <th scope="row"></th>
                    <th> {item.id} </th>
                    <th> {item.title} </th> 
                  </tr>
                )

              })
            }


          </tbody>
        </table>
      </div>

      



</div>
  );
};

export default List;
