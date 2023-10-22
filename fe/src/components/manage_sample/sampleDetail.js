import avt from '../../images/000_1OC3DT_jpg.rf.7d83eba8fc52d85ab05399f142df2189.jpg'
import './style.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api_get_sample_face_detect_by_id, api_update_sample_face_detect, api_get_labels, api_update_sample_eye_state, api_get_sample_eye_state_by_id } from '../../config/Api'
function SampleDetail() {
    const { id } = useParams()
    const [typeSample, setTypeSample] = useState('')
    const [sample, setSample] = useState({})
    const [labels, setLabels] = useState([])

    useEffect(() => {
        let type = sessionStorage.getItem('typeSample')
        setTypeSample(type)
        let api = ''
        if (type === '2') {
            api = api_get_sample_eye_state_by_id
            fetch(api_get_labels)
                .then(response => response.json())
                .then(data => {
                    setLabels(data)
                })
                .catch(err => console.log(err))
        } else if (type === '1') {
            api = api_get_sample_face_detect_by_id
        }
        if (api !== '') {
            fetch(api + id)
                .then(response => response.json())
                .then(data => {
                    setSample(data)
                })
                .catch(err => console.log(err))
        }



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const hanldeSubmit = () => {
        if (sample?.name !== undefined && sample?.size !== undefined && sample?.extension !== undefined
            && sample?.train !== undefined) {
            var api = ''
            if (typeSample === '1') {
                api = api_update_sample_face_detect
            } else if (typeSample === '2') {
                api = api_update_sample_eye_state
            }
            if (api !== '') {
                console.log(sample)
                fetch(api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sample)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data['status'] === true) {
                            alert('Update sample success!')
                        } else {
                            alert('Error when update sample!')
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
        } else {
            alert('Vui lòng điền đủ thông tin')
        }

    }
    return (
        <div className="sample-detail-container">
            <div className="sample-detail">
                <div className='sample-image-detail'>
                    <img src={avt} alt="img"></img>
                </div>
                <div className="sample-inf-container">
                    <div className="sample-inf">
                        <div className="sample-inf-child">
                            <lable>Name</lable>
                            <input type="text" placeholder="sample name"
                                value={sample.name}
                                onChange={(e) => setSample({ ...sample, name: e.target.value })}></input>
                        </div>
                        <div className="sample-inf-child">
                            <lable>Size</lable>
                            <input type="text" placeholder="size"
                                value={sample.size}
                                onChange={(e) => setSample({ ...sample, size: e.target.value })}></input>
                        </div>
                        <div className="sample-inf-child">
                            <lable>Extension</lable>
                            <input type="text" placeholder="sample name"
                                value={sample.extension}
                                onChange={(e) => setSample({ ...sample, extension: e.target.value })}></input>
                        </div>
                        {typeSample === "2" ? (
                            <div className="sample-inf-child sample-child-edit">
                                <lable>Label</lable>
                                <select className='select-sample'
                                    value={sample?.label?.id}
                                    onChange={(e) => setSample({ ...sample, label: { ...sample.label, id: e.target.value } })}>
                                    {
                                        labels.map((label) => (
                                            <option value={label.id} className='option-item' selected={label.id === 1}>{label.name}</option>
                                        ))
                                    }
                                </select>

                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className="sample-inf-child">
                            <lable>Is train</lable>
                            <select className='select-sample'
                                value={sample.train}
                                onChange={(e) => setSample({ ...sample, train: e.target.value })}>
                                <option value="true" className='option-item' selected>True</option>
                                <option value="false" className='option-item'>False</option>
                            </select>

                        </div>
                    </div>
                    {
                        typeSample === "1" ? (
                            <div className="boundingbox-container">
                                <h4>Bounding box list</h4>
                                <table class="table table-striped table-custom">
                                    <thead>
                                        <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">Top left x</th>
                                            <th scope="col">Top left y</th>
                                            <th scope="col">Width</th>
                                            <th scope="col">Height</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            sample?.boudingboxes?.map((boundingbox, index) => (
                                                <tr>
                                                    <th scope="row">{index}</th>
                                                    <td>{boundingbox.top_left_x}</td>
                                                    <td>{boundingbox.top_left_y}</td>
                                                    <td>{boundingbox.width}</td>
                                                    <td>{boundingbox.height}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }

                </div>
            </div>
            <div className="add-sample-controller">
                <button className="btnEdit" onClick={hanldeSubmit}>Save</button>
            </div>
        </div >
    );
}

export default SampleDetail