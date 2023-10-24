import './style.css'
import Cam from '../camera/Cam';
function Home() {

    return (
        <div className="home-container">
            <div className="camera-container">
                <div className='edit-camera-container'>
                    <h3 className='name-title'>Camera</h3>
                    <div className='camera'>
                        <Cam></Cam>
                    </div>
                </div>

            </div>
            <div className="log-container">
                <div className='edit-camera-container edit-log'>
                    <h3 className='name-title title-log'>Log</h3>
                    <div className='log'>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;