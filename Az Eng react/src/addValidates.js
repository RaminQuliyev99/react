import * as yup from 'yup';


const validations = yup.object().shape({
    title: yup.string().required('Zehmet olmasa doldurun'),
    price : yup.number().required('Zehmet olmasa doldurun'),
    about: yup.string().required('Zehmet olmasa doldurun'),
 
  });

 export default validations;