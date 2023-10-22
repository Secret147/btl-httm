
import { api_add_sample_eye_state, api_add_sample_face_detect, api_get_labels } from '../../config/Api';
import upload from '../../images/upload.jpg'
import uploadTxt from '../../images/Screenshot 2023-10-21 154919.png'
import { getListBoundingBox } from '../funtion/Funtion';
import './style.css'
import { useState, useEffect } from 'react';
function AddSample() {
    const [typeSample, setTypeSample] = useState('')
    const [sample, setSample] = useState({})
    const [labels, setLabels] = useState([])

    // const onDrop = useCallback(acceptedFiles => {
    //     // acceptedFiles là một mảng chứa các đối tượng tệp đã được tải lên

    //     acceptedFiles.forEach(file => {
    //         console.log(file)
    //         const { name, size } = file;
    //         const extension = name.split('.').pop();

    //         console.log(`Tên tệp: ${name}`);
    //         console.log(`Kích thước: ${size} bytes`);
    //         console.log(`Đuôi mở rộng: ${extension}`);
    //     });
    // }, []);
    // const { getRootProps, getInputProps } = useDropzone({ onDrop });

    useEffect(() => {
        let type = sessionStorage.getItem('typeSample')
        setTypeSample(type)
        if (type === '2') {
            fetch(api_get_labels)
                .then(response => response.json())
                .then(data => {
                    setLabels(data)
                })
                .catch(err => console.log(err))
        }
    }, [])

    const hanldeSubmit = () => {
        if (sample?.name !== undefined && sample?.size !== undefined && sample?.extension !== undefined
            && sample?.train !== undefined) {
            var api = ''
            if (typeSample === '1') {
                api = api_add_sample_face_detect
            } else if (typeSample === '2') {
                api = api_add_sample_eye_state
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
                            alert('Add sample success!')
                        } else {
                            alert('Sample has existed')
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
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        console.log('a')
        var image = document.querySelector(".input-upload");
        if (file) {
            console.log(file)
            const reader = new FileReader();
            reader.onload = () => {
                const url = reader.result;
                const img = new Image();
                img.src = url;
                img.onload = () => {
                    const width = img.width;
                    const height = img.height;
                    const size = `${width}x${height}`
                    const fileExtension = file.name.split('.').pop().toLowerCase();
                    setSample({ ...sample, name: file.name.split('.')[0], size: size, extension: fileExtension, urlImage: url });
                    image.style.opacity = 0;
                };
            };
            reader.readAsDataURL(file);
        }
    };
    const handleCellValueChange = (rowIndex, field, value) => {
        // Sao chép danh sách boundingBoxes và cập nhật giá trị của ô chỉnh sửa
        const updatedBoundingBoxes = [...sample?.boudingboxes]
        updatedBoundingBoxes[rowIndex] = {
            ...updatedBoundingBoxes[rowIndex],
            [field]: value
        }
        console.log(updatedBoundingBoxes)
        setSample({ ...sample, boudingboxes: updatedBoundingBoxes })
    };

    const hanldAddLine = () => {
        if (sample.boudingboxes) {
            const updatedBoundingBoxes = [...sample?.boudingboxes]
            updatedBoundingBoxes.push({})
            setSample({ ...sample, boudingboxes: updatedBoundingBoxes })
        } else {
            const updatedBoundingBoxes = []
            updatedBoundingBoxes.push({})
            setSample({ ...sample, boudingboxes: updatedBoundingBoxes })
        }

    };
    const handleClickRefresh = () => {
        if (typeSample === '2') {
            setSample({ ...sample, name: '', size: '', extension: '', urlImage: undefined });
        } else if (typeSample === '1') {
            setSample({ ...sample, name: '', size: '', extension: '', urlImage: undefined, boudingboxes: undefined });
        }

    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Kiểm tra xem tệp có phải là tệp văn bản .txt
            if (file.type === 'text/plain') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Đọc nội dung của tệp và làm gì đó với nó (ví dụ: hiển thị nội dung)
                    const fileContent = e.target.result;
                    const objectItem = getListBoundingBox(fileContent)
                    setSample({ ...sample, boudingboxes: objectItem })
                };
                reader.readAsText(file);
            } else {
                alert('Vui lòng chọn một tệp văn bản .txt');
            }
        }
    }
    return (
        <div className="main-sample-container">
            <h3>Add sample</h3>
            <div className="add-sample-container custom-add-sample-ctn">
                <div className='post-image'>
                    <input
                        type="file"
                        accept="image/*"
                        className="input-upload"
                        onChange={handleImageUpload}
                    // {...getInputProps()}
                    />
                    <img src={sample?.urlImage !== undefined ? sample?.urlImage : upload} alt='upload' className='img-upload'></img>
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
                                    <option disabled selected hidden>Choose</option>
                                    {
                                        labels.map((label) => (
                                            <option value={label.id} className='option-item'>{label.name}</option>
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
                                <option disabled selected hidden>Choose</option>
                                <option value="true" className='option-item'>True</option>
                                <option value="false" className='option-item'>False</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            {
                typeSample === '1' ? (
                    <div className="add-sample-container">
                        <div className='post-image'>
                            <input
                                type="file"
                                accept=".txt"
                                className="input-upload"
                                onChange={handleFileChange}
                            />
                            <img src={uploadTxt} alt='upload' className='img-upload'
                                style={{ display: sample?.boudingboxes === undefined ? 'block' : 'none' }}></img>
                        </div>

                        <div className="sample-inf-container">
                            <div className="sample-inf">
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
                                                    <th scope="row">{index + 1}</th>
                                                    <td contentEditable
                                                        onInput={(e) =>
                                                            handleCellValueChange(index, 'top_left_x', e.target.textContent)
                                                        }>{boundingbox.top_left_x}</td>
                                                    <td contentEditable
                                                        onInput={(e) =>
                                                            handleCellValueChange(index, 'top_left_y', e.target.textContent)
                                                        }>{boundingbox.top_left_y}</td>
                                                    <td contentEditable
                                                        onInput={(e) =>
                                                            handleCellValueChange(index, 'width', e.target.textContent)
                                                        }>{boundingbox.width}</td>
                                                    <td contentEditable
                                                        onInput={(e) =>
                                                            handleCellValueChange(index, 'height', e.target.textContent)
                                                        }>{boundingbox.height}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <button className="btnEdit" onClick={hanldAddLine}>Add new line</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }

            <div className="add-sample-controller">
                <button className="btnEdit" onClick={handleClickRefresh}>Refresh</button>
                <button className="btnEdit" onClick={hanldeSubmit}>Save</button>
            </div>
        </div>
    );
}

export default AddSample