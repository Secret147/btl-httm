import './style.css'
import face from '../../images/000_1OC3DT_jpg.rf.7d83eba8fc52d85ab05399f142df2189.jpg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function MainSample() {
    const [typeSample, setTypeSample] = useState(null)
    const navi = useNavigate();

    useEffect(() => {
        console.log(sessionStorage.getItem('typeSample'))
        setTypeSample(sessionStorage.getItem('typeSample'))
    }, [])
    const handleSelectTypeSample = (e) => {
        setTypeSample(e.target.value)
        sessionStorage.setItem('typeSample', e.target.value)
    }
    const handleClickAdd = () => {
        console.log('a')
        if (typeSample === null) {
            alert('Please choose type sample!')
            return
        } else {
            navi('/add-sample')
        }
    }
    return (
        <div className="sample-manage-container">
            <div className="inf-sample">
                <div className="name-sample-management">Sample management</div>
                <div class="select-type-sample-container">
                    <select className='select-sample' value={typeSample}
                        onChange={(e) => handleSelectTypeSample(e)}>
                        <option disabled selected hidden className='option-item'>Type Sample</option>
                        <option value="1" className='option-item'>Face detect</option>
                        <option value="2" className='option-item'>Eyes state</option>
                    </select>
                </div>
            </div>
            <div className="sample-controller">
                <div className='btn-controller'>
                    <button className='btn-add btnEdit' onClick={handleClickAdd}>Add</button>
                    <button className='btn-add btnEdit'>Delete</button>
                    <button className='btn-add btnEdit'>Select</button>
                </div>

                <div className="search-sample">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <button type="submit" className='btnEdit btn-search-edit'>Tìm</button>
                </div>
            </div>
            <div className="sample-list-container">
                <div className="sample-list">
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>

                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>

                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>
                    <Link to={`/sample`}>
                        <div className='sample-image'>
                            <img src={face} alt='face'></img>
                            <p>face1</p>
                        </div>
                    </Link>


                </div>

            </div>

        </div>
    );
}

export default MainSample;