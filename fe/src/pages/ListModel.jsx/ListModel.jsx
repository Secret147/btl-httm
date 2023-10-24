import { useState } from 'react';
import styles from './ListModel.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function ListModel() {
    const [model, setModel] = useState({
        name: 'Model1',
    });
    const [checkPu, setCheckPu] = useState(false);
    const handleClickDetail = () => {
        setCheckPu(true);
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
            <div className={checkPu ? cx('popup_detailmodel') : cx('popup_detaimodel', 'turnoff_popup')}>
                <div className={cx('detail_model_main')}>
                    <div className="detail_model_main_box">
                        <div className={cx('detail_model_header')}>
                            <p>Chi tiết model: {model.name}</p>
                            <div
                                className={cx('popup_cancel')}
                                onClick={() => {
                                    setCheckPu(false);
                                }}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        </div>
                        <div className={cx('detail_model_body')}>
                            <div className={cx('model_main')}>
                                <div className={cx('detail_model_item')}>
                                    <p>Chỉ só 1: 0.89</p>
                                </div>
                                <div className={cx('detail_model_item')}>
                                    <p>Chỉ só 1: 0.89</p>
                                </div>
                                <div className={cx('detail_model_item')}>
                                    <p>Chỉ só 1: 0.89</p>
                                </div>
                                <div className={cx('detail_model_item')}>
                                    <p>Chỉ só 1: 0.89</p>
                                </div>
                                <div className={cx('detail_model_item')}>
                                    <p>Chỉ só 1: 0.89</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={checkPu ? cx('popup_detailmodel', 'turnoff_popup_bg') : cx('main')}>
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
                                                <div className={cx('sample_label_item')}>
                                                    <div className={cx('item_left')}>
                                                        <div className={cx('img_name')}>
                                                            <p>{model.name}</p>
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
                                                                    onClick={handleClickDetail}
                                                                >
                                                                    <p>Chi tiết</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
