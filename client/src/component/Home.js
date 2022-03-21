
import img  from './img/img.jpg';
import LinkTo from './Link'
const Home = () => {
    return <div>
        <img src={img} alt="" className='img'/>
        <h1 className="quick">Room Hunt Index Page</h1>
    <LinkTo path={'/RoomManagement'} label={'Room Management'}/>
        </div>
}

export default Home
