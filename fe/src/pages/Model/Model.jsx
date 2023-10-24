import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Model.module.scss';
import classNames from 'classnames/bind';
import { faCloudArrowUp, faFileExport, faRotateRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Model() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [resImg, setResImg] = useState('');
    const [submitImg, setSubmitImg] = useState(false);
    const [checkSelect, setCheckSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [base64Video, setBase64Video] = useState('');

    const handleFileSelect = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const base64String = event.target.result;
                setSelectedFile(file);
                setImageBase64(base64String);
            };
            if (resImg) {
                setResImg('');
                setSubmitImg(false);
            }
            reader.readAsDataURL(file);
        }
    };

    const startLoading = () => {
        if (imageBase64 || base64Video) {
            setSubmitImg(true);
            setTimeout(() => {
                setResImg('https://i.pinimg.com/564x/bf/6a/a9/bf6aa9d6e7a1acf3127b539cd32afd63.jpg');
                console.log(base64Video);
            }, 3000);
        } else {
            alert('Vui lòng nhâp file');
        }
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64String = e.target.result;
                setBase64Video(base64String);
            };
            if (resImg) {
                setResImg('');
                setSubmitImg(false);
            }
            reader.readAsDataURL(file);
            reader.readAsDataURL(file);
        }
    };

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        setResImg('');
        setSubmitImg(false);
    };
    useEffect(() => {
        if (selectedOption === 'video') {
            setCheckSelect(false);
        } else {
            setCheckSelect(true);
        }
    });
    return (
        <div className={cx('container')}>
            <div className={cx('detail_sample_item')}>
                <div className={cx('select_type')}>
                    <div className={cx('select_type_main')}>
                        <select value={selectedOption} onChange={handleSelectChange} className={cx('select_css')}>
                            <option value="">Chọn một tùy chọn</option>
                            <option value="image">Hình ảnh</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                </div>
                <div
                    className={cx('detail_sample_cancel')}
                    onClick={() => {
                        window.location.href = '/listmodel';
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                {checkSelect ? (
                    <div className={cx('detail_sample_item_container')}>
                        <div className={cx('detail_sample_item_main')}>
                            <div className={cx('left')}>
                                {imageBase64 ? (
                                    <img src={imageBase64} alt="Uploaded" />
                                ) : (
                                    <div className={cx('box_upload')}>
                                        <FontAwesomeIcon
                                            className={cx('icon_upload')}
                                            icon={faCloudArrowUp}
                                        ></FontAwesomeIcon>
                                    </div>
                                )}
                                <div className={cx('sample_img_name')}>
                                    <div className={cx('custom-file-input-container')}>
                                        <label for="fileInput" className={cx('custom-file-input-label')}>
                                            Chọn hình ảnh
                                        </label>
                                        <input
                                            type="file"
                                            onChange={handleFileSelect}
                                            id="fileInput"
                                            class={cx('custom-file-input')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('middle')}>
                                <div className={cx('middle_main')}>
                                    <div className={cx('middle_main_box')} onClick={startLoading}>
                                        <p>Detect</p>
                                        <FontAwesomeIcon icon={faFileExport} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('left')}>
                                {resImg ? (
                                    <img src={resImg} alt="Uploaded" />
                                ) : (
                                    <>
                                        {submitImg ? (
                                            <div className={cx('icon_route_container')}>
                                                <div className={cx('icon-container')}>
                                                    <FontAwesomeIcon icon={faRotateRight} />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className={cx('box_upload')}>
                                                    <FontAwesomeIcon
                                                        className={cx('icon_upload')}
                                                        icon={faCloudArrowUp}
                                                    ></FontAwesomeIcon>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}

                                <div className={cx('sample_img_name_up')}>
                                    <div className={cx('sample_result_main')}>
                                        <p>Kết quả</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cx('detail_sample_item_container')}>
                        <div className={cx('detail_sample_item_main')}>
                            <div className={cx('left')}>
                                {base64Video ? (
                                    <video controls width="400" src={base64Video} />
                                ) : (
                                    <div className={cx('box_upload')}>
                                        <FontAwesomeIcon
                                            className={cx('icon_upload')}
                                            icon={faCloudArrowUp}
                                        ></FontAwesomeIcon>
                                    </div>
                                )}

                                <div className={cx('sample_img_name')}>
                                    <div className={cx('custom-file-input-container')}>
                                        <label for="fileInput" className={cx('custom-file-input-label')}>
                                            Chọn video
                                        </label>

                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={handleFileInputChange}
                                            id="fileInput"
                                            class={cx('custom-file-input')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('middle')}>
                                <div className={cx('middle_main')}>
                                    <div className={cx('middle_main_box')} onClick={startLoading}>
                                        <p>Detect</p>
                                        <FontAwesomeIcon icon={faFileExport} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('left')}>
                                {resImg ? (
                                    <img src={resImg} alt="Uploaded" />
                                ) : (
                                    <>
                                        {submitImg ? (
                                            <div className={cx('icon_route_container')}>
                                                <div className={cx('icon-container')}>
                                                    <FontAwesomeIcon icon={faRotateRight} />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className={cx('box_upload')}>
                                                    <FontAwesomeIcon
                                                        className={cx('icon_upload')}
                                                        icon={faCloudArrowUp}
                                                    ></FontAwesomeIcon>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}

                                <div className={cx('sample_img_name_up')}>
                                    <div className={cx('sample_result_main')}>
                                        <p>Kết quả</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Model;
