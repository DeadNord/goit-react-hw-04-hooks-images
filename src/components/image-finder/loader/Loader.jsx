
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';



const LoaderCom = () => {
  return (
        <Loader
        className={s.loader}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={300000}
         
          />
  );
};


export default LoaderCom;
