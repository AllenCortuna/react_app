
import img  from './img/header.png';
import LinkTo from './Link'
const Home = () => {
    return <div className='container'>
        <div className="borderline">

        <img src={img} alt="" className='img'/>
        <h1 className="quick">Room Hunt Index Page</h1>
    <LinkTo path={'/RoomManagement'} label={'Room Management'}/>
        </div>
        </div>
}

export default Home
