import './style.css'
import face from '../../images/000_1OC3DT_jpg.rf.7d83eba8fc52d85ab05399f142df2189.jpg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { api_get_sample_eye_states, api_get_sample_face_detects } from '../../config/Api';
function MainSample() {
    const [typeSample, setTypeSample] = useState(null)
    const [samples, setSamples] = useState([])
    const navi = useNavigate();

    useEffect(() => {
        let type = sessionStorage.getItem('typeSample')
        // console.log(sessionStorage.getItem('typeSample'))
        setTypeSample(type)
        if (type === '1') {
            getSamples(api_get_sample_face_detects)
        } else if (type === '2') {
            getSamples(api_get_sample_eye_states)
        }
    }, [])

    const getSamples = (api) => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                // console.log(data['data'])
                setSamples(data)
            })
            .catch(err => console.log(err))
    }
    const handleSelectTypeSample = (e) => {
        let select = e.target.value
        setTypeSample(select)
        sessionStorage.setItem('typeSample', select)
        if (select === '1') {
            getSamples(api_get_sample_face_detects)
        } else if (select === '2') {
            setSamples(api_get_sample_eye_states)
        } else {
            setSamples([])
        }
    }
    const handleClickAdd = () => {
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
                    {
                        samples.map((sample) => (
                            <Link to={`/sample/${sample.id}`}>
                                <div className='sample-image'>
                                    <img src={face} alt='face'></img>
                                    <p>{sample.name}</p>
                                </div>
                            </Link>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default MainSample;