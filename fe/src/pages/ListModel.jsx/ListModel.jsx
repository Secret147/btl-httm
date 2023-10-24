import React, { useEffect, useState } from 'react';
import styles from './ListModel.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from '../../service/axios2';

const cx = classNames.bind(styles);

function ListModel() {
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const getModels = async () => {
        try {
            const res = await axios.get('/all-model');
            setModels(res.data);
            console.log(res.data);
        } catch (error) {
            console.error('Error fetching models:', error);
        }
    };

    useEffect(() => {
        getModels();
    }, []);

    const handleShowDetail = (model) => {
        setSelectedModel(model);
        setPopupVisible(true);
    };

    const handleCloseDetail = () => {
        setPopupVisible(false);
    };
    const handlePopup = (name, pre, rec, date) => {
        localStorage.setItem('nameModel', name);
        localStorage.setItem('preModel', pre);
        localStorage.setItem('recModel', rec);
        localStorage.setItem('dateModel', date);
        const f1 = (2 * pre * rec) / (pre + rec);
        localStorage.setItem('f1Model', f1);
    };
    const handleCancel = () => {
        localStorage.removeItem('nameModel');
        localStorage.removeItem('preModel');
        localStorage.removeItem('recModel');
        localStorage.removeItem('dateModel');
        localStorage.removeItem('f1Model');
    };
    return (
        <div className="container">
            <div
                className={cx('item_add')}
                onClick={() => {
                    window.location.href = '/trainmodel';
                }}
            >
                <div className={cx('add_button_main')}>
                    <FontAwesomeIcon icon={faFileCirclePlus} />
                    <p className={cx('add_button_main_p')}>Train model</p>
                </div>
            </div>

            <div className={isPopupVisible ? cx('popup_detailmodel') : cx('popup_detaimodel', 'turnoff_popup')}>
                {selectedModel && (
                    <div className={cx('detail_model_main')}>
                        <div className="detail_model_main_box">
                            <div className={cx('detail_model_header')}>
                                <p>Chi tiết model: {localStorage.getItem('nameModel')}</p>
                                <div
                                    className={cx('popup_cancel')}
                                    onClick={() => {
                                        handleCloseDetail();
                                        handleCancel();
                                    }}
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                            </div>
                            <div className={cx('detail_model_body')}>
                                <div className={cx('model_main')}>
                                    <div className={cx('detail_model_item')}>
                                        <p>Pre: {localStorage.getItem('preModel')}</p>
                                    </div>
                                    <div className={cx('detail_model_item')}>
                                        <p>Rec: {localStorage.getItem('recModel')}</p>
                                    </div>
                                    <div className={cx('detail_model_item')}>
                                        <p>F1 Score: {localStorage.getItem('f1Model')}</p>
                                    </div>
                                    <div className={cx('detail_model_item')}>
                                        <p>Ngày tạo: {localStorage.getItem('dateModel')}</p>
                                    </div>
                                    {/* Thêm các chỉ số khác tại đây */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={isPopupVisible ? cx('popup_detailmodel', 'turnoff_popup_bg') : cx('main')}>
                <div className={cx('main_box')}>
                    <div className={cx('detail_sample_label')}>
                        <div className={cx('sample_label_main')}>
                            <div className="sample_label_main_body">
                                <div className={cx('sample_label_header')}>
                                    <div className={cx('sample_label_header_main')}>
                                        <p>Danh sách Model</p>
                                    </div>
                                </div>
                                <div className={cx('sample_label_list')}>
                                    <div className={cx('sample_label_list_main')}>
                                        <div className={cx('sample_label_table')}>
                                            <div className={cx('table_box')}>
                                                {models.map((model) => (
                                                    <div className={cx('sample_label_item')} key={model.id}>
                                                        <div className={cx('item_left')}>
                                                            <div className={cx('img_name')}>
                                                                <p>{model[0][4]}</p>
                                                            </div>
                                                        </div>
                                                        <div className={cx('item_right')}>
                                                            <div className={cx('item_right_main')}>
                                                                <div className={cx('button_model')}>
                                                                    <div
                                                                        className={cx('usemodel')}
                                                                        onClick={() => {
                                                                            window.location.href = '/model';
                                                                        }}
                                                                    >
                                                                        <p>Sử dụng</p>
                                                                    </div>
                                                                    <div
                                                                        className={cx('detail_model')}
                                                                        onClick={() => {
                                                                            handlePopup(
                                                                                model[0][4],
                                                                                model[0][2],
                                                                                model[0][3],
                                                                                model[0][1],
                                                                            );

                                                                            handleShowDetail(model);
                                                                        }}
                                                                    >
                                                                        <p>Chi tiết</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('sample_label_body')}>
                                    <div className={cx('sample_label_body_main')}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListModel;
