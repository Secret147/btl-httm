import sample from '../../images/000_1OC3DT_jpg.rf.7d83eba8fc52d85ab05399f142df2189.jpg'
import './style.css'
import { useState, useEffect } from 'react'
function SampleDetail() {
    const [typeSample, setTypeSample] = useState('')

    useEffect(() => {
        // console.log(sessionStorage.getItem('typeSample'))
        setTypeSample(sessionStorage.getItem('typeSample'))
    }, [])
    return (
        <div className="sample-detail-container">
            <div className="sample-detail">
                <div className='sample-image-detail'>
                    <img src={sample} alt="img"></img>
                </div>
                <div className="sample-inf-container">
                    <div className="sample-inf">
                        <div className="sample-inf-child">
                            <lable>Name</lable>
                            <input type="text" placeholder="sample name"></input>
                        </div>
                        <div className="sample-inf-child">
                            <lable>Size</lable>
                            <input type="text" placeholder="size"></input>
                        </div>
                        <div className="sample-inf-child">
                            <lable>Extension</lable>
                            <input type="text" placeholder="sample name"></input>
                        </div>
                        {typeSample === "2" ? (
                            <div className="sample-inf-child sample-child-edit">
                                <lable>Label</lable>
                                <select className='select-sample'>
                                    <option value="1" className='option-item' selected>Nhắm mắt</option>
                                    <option value="2" className='option-item'>Mở mắt</option>
                                </select>

                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className="sample-inf-child">
                            <lable>Is train</lable>
                            <select className='select-sample'>
                                <option value="1" className='option-item' selected>True</option>
                                <option value="2" className='option-item'>False</option>
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
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>0.92852</td>
                                            <td>0.873825</td>
                                            <td>0.642244</td>
                                            <td>0.892244</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }

                </div>
            </div>
        </div >
    );
}

export default SampleDetail