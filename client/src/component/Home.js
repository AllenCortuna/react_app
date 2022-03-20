

import LinkTo from './Link'
import RoomManagement from './RoomManagement';
const Home = () => {
    return <div className="container">
        <h1 className="quick">Room Hunt Index Page</h1>
        
    <LinkTo path={'/RoomManagement'} label={'Room Management'}/>
        </div>
}

export default Home
