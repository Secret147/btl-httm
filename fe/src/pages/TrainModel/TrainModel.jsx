import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TrainModel.module.scss';
import classNames from 'classnames/bind';
import { faCheck, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function TrainModel() {
    const [checkTrainning, setCheckTrainning] = useState(false);
    const [success, setSuccess] = useState(true);
    const [selectedValue, setSelectedValue] = useState(''); // Khởi tạo state để lưu giá trị được chọn

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value); // Lưu giá trị của radio button đã chọn vào state
    };
    const handleTrain = () => {
        setCheckTrainning(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
        console.log(selectedValue);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <div className={cx('main_box')}>
                    {checkTrainning ? (
                        <div className={cx('training_main')}>
                            <div className={cx('icon_route_container')}>
                                {success ? (
                                    <>
                                        <div className={cx('icon-container')}>
                                            <FontAwesomeIcon icon={faRotateRight} />
                                        </div>
                                        <p>Training...</p>
                                    </>
                                ) : (
                                    <>
                                        <div className={cx('icon-container_success')}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <p>Success</p>
                                        <div className={cx('success_button')}>
                                            <div
                                                className={cx('button_back')}
                                                onClick={() => {
                                                    window.location.href = '/listmodel';
                                                }}
                                            >
                                                <p>Tiếp tục</p>
                                            </div>

                                            <div
                                                className={cx('button_back')}
                                                onClick={() => {
                                                    window.location.href = '/trainmodel';
                                                }}
                                            >
                                                <p>Quay lại</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className={cx('train_model_main')}>
                            <div className={cx('train_model_header')}>
                                <p>TRAIN MODEL</p>
                            </div>
                            <div className={cx('train_model_body')}>
                                <div className={cx('train_model_box')}>
                                    <div className={cx('train_model_item')}>
                                        <label className={cx('radio_container')}>
                                            <input
                                                type="radio"
                                                name="train"
                                                value="eyes"
                                                onChange={handleRadioChange}
                                            />

                                            <span className={cx('checkmark')}></span>
                                        </label>
                                        <div className={cx('name_select')}>
                                            <p>EYES</p>
                                        </div>
                                    </div>
                                    <div className={cx('train_model_item')}>
                                        <label className={cx('radio_container')}>
                                            <input
                                                type="radio"
                                                name="train"
                                                value="faces"
                                                onChange={handleRadioChange}
                                            />

                                            <span className={cx('checkmark')}></span>
                                        </label>
                                        <div className={cx('name_select')}>
                                            <p>FACES</p>
                                        </div>
                                    </div>
                                    <div className={cx('train_model_item')}>
                                        <label className={cx('radio_container')}>
                                            <input
                                                type="radio"
                                                name="train"
                                                value="test"
                                                onChange={handleRadioChange}
                                            />

                                            <span className={cx('checkmark')}></span>
                                        </label>
                                        <div className={cx('name_select')}>
                                            <p>TEST</p>
                                        </div>
                                    </div>
                                    <div className={cx('train_model_footer')}>
                                        <div
                                            className={cx('train_model_footer_main')}
                                            onClick={() => {
                                                handleTrain();
                                            }}
                                        >
                                            <p>Train model</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default TrainModel;
