import './style.css'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { api_delete_sample_eye_state, api_delete_sample_face_detect, api_get_sample_eye_states, api_get_sample_face_detects } from '../../config/Api';
function MainSample() {
    const [typeSample, setTypeSample] = useState(null)
    const [samples, setSamples] = useState([])
    const [checkbox, setCheckbox] = useState(false)
    const [listId, setListId] = useState([])
    const [filterSample, setFilterSample] = useState([])
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
        setFilterSample([])
    }, [])

    const handleSearch = (e) => {
        let key = e.target.value
        const sampleSearch = samples.filter((sample) =>
            sample.name.toLowerCase().includes(key.toLowerCase())
        )
        setFilterSample(sampleSearch)
    }
    const getSamples = (api) => {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                // console.log(data['data'])
                setSamples(data)
                setFilterSample(data)
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
            getSamples(api_get_sample_eye_states)
        } else {
            setSamples([])
        }
        // console.log(samples)
    }
    const handleClickAdd = () => {
        if (typeSample === null) {
            alert('Please choose type sample!')
            return
        } else {
            navi('/add-sample')
        }
    }
    const hanldClickSelect = () => {
        const btn = document.querySelector(".btn_del")
        if (checkbox === false) {
            btn.style.background = 'linear-gradient(to right, #0984e3, #489aec)'
        } else {
            btn.style.background = '#68bef0'
            setListId([])
        }
        setCheckbox(!checkbox)
    }
    const handleCheckbox = (e, sampleid) => {
        if (e.target.checked) {
            let list = [...listId]
            list.push({ id: sampleid })
            console.log(list)
            setListId(list)
        } else {
            let list = [...listId]
            const updatedList = list.filter(item => item.id !== sampleid);
            // console.log(updatedList)
            setListId(updatedList)
        }
    }
    const handleClickDel = () => {
        if (checkbox && listId.length !== 0) {
            let api = ''
            if (typeSample === '1') {
                api = api_delete_sample_face_detect
            } else if (typeSample === '2') {
                api = api_delete_sample_eye_state
            }
            let confirm = window.confirm('Are you sure want to delete this Samples?');
            if (confirm) {
                console.log(listId)
                fetch(api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(listId)
                })
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data)
                        if (data['status'] === true) {
                            const updateSample = samples.filter(item => !listId.some(idObj => idObj.id === item.id));
                            // console.log(updateSample);
                            setSamples(updateSample)
                            setListId([])
                            alert('Delete sample success!')
                        } else {
                            alert('Delete sample false!')
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    });
            }

        }
    }
    const handleMoveToSampleDetai = (sampleId) => {
        console.log('aaa')
        if (!checkbox) {
            navi(`/sample/${sampleId}`)
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
                    <button className='btnEdit btn_del' onClick={handleClickDel}>Delete</button>
                    <button className='btn-add btnEdit' onClick={hanldClickSelect}>Select</button>
                </div>

                <div className="search-sample">
                    <input type="text" placeholder="Tìm kiếm..." onChange={handleSearch} />
                    <button type="submit" className='btnEdit btn-search-edit'>Tìm</button>
                </div>
            </div>
            <div className="sample-list-container">
                <div className="sample-list">
                    {
                        filterSample?.map((sample) => (
                            // <Link to={`/sample/${sample.id}`}>
                            <div className='sample-image' onClick={() => handleMoveToSampleDetai(sample.id)}>
                                {checkbox ? (
                                    <label class="round-checkbox">
                                        <input type="checkbox" id="myCheckbox"
                                            onChange={(e) => handleCheckbox(e, sample.id)} />
                                        <span class="custom-checkbox"></span>
                                    </label>
                                ) : (
                                    <div></div>
                                )}


                                <img src={sample?.urlImage} alt='face'></img>
                                <p>{sample.name}</p>
                            </div>
                            // </Link>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default MainSample;