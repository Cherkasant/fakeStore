import Lottie from 'lottie-react';
import loader from '../../Assets/Loader/loader.json';

const Loader = () => {
  return <Lottie style={{ width: 150, height: 150 }} animationData={loader} loop={true} />;
};

export default Loader;
