import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './addValidates';
import { productsAdd } from './api';


const Add = () => {


  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      about: '',
   
    },
    validationSchema,
    onSubmit: (values, {resetForm}) => {
      productsAdd(values);
      resetForm(values="");
    },
  });

  return (
    <div>
        <h1 className='text-center text-danger' >Add</h1>

      <div className="container">
        <div className="row pt-5">
          <h1 className='text-center pb-3 text-warning ' >Mehsul elave et</h1>
          <div className="col-6 offset-3">
            <form onSubmit={formik.handleSubmit}>
              <input
                className='form-control'
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                placeholder="Mehsul adi"
              />
              {formik.errors.title && formik.touched.title && (<span className='badge bg-danger' > {formik.errors.title} </span>)}
              <input
                className='form-control my-3'
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                placeholder="Mehsul qiymeti"
              />
              {formik.errors.price && formik.touched.price && (<span className='badge bg-danger' > {formik.errors.price} </span>)}
              <input
                className='form-control'
                id="about"
                name="about"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.about}
                placeholder="Mehsul haqqinda"
              />
              {formik.errors.about && formik.touched.about && (<span className='badge bg-danger' > {formik.errors.about} </span>)}
  

              <button className='btn btn-success mt-3 ' type="submit">Gonder</button>

            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Add;
