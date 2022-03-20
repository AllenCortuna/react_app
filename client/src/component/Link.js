


import { Link } from 'react-router-dom';
const LinkTo  = ({path,label}) => {

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

    return <>

        <Link 
        to={path} 
        onClick={topFunction}
        className='link' >{label}</Link>

        </>
}

export default LinkTo
