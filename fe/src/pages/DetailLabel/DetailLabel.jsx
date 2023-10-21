import { faArrowLeft, faCancel, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './DetailLabel.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Back from '../../components/BackButton/Back';
import axios from '../../service/axios';
const cx = classNames.bind(styles);

function DatailLabel() {
    const [detail, setDetail] = useState(false);
    const [label, setLabel] = useState({
        name: '',
        description: '',
    });
    const getLabel = async () => {
        const res = await axios.get(`/label/${localStorage.getItem('detailid')}`);
        setLabel(res.data);
    };
    useEffect(() => {
        getLabel();
    }, []);

    return (
        <div className={cx('container')}>
            {detail ? (
                <div className={cx('detail_sample_item')}>
                    <div
                        className={cx('detail_sample_cancel')}
                        onClick={() => {
                            window.location.href = 'detaillabel';
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx('detail_sample_item_container')}>
                        <div className={cx('detail_sample_item_main')}>
                            <div className={cx('left')}>
                                <img src="https://i.pinimg.com/originals/ce/0c/21/ce0c2131a67c5d8f9f99a68a1ebfe744.jpg"></img>
                                <div className={cx('sample_img_name')}>
                                    <p>hinh1.jpg</p>
                                </div>
                            </div>
                            <div className={cx('right')}>
                                <div className="sample_right">
                                    <div className={cx('sample_right_main')}>
                                        <p>0.04854 0.248888 0.002485 0.011125</p>
                                    </div>
                                    <div className={cx('sample_right_name')}>
                                        <p>label1.txt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Back></Back>
                    <div className={cx('main')}>
                        <div className={cx('detail_container')}>
                            <div className={cx('detail_main')}>
                                <div className={cx('detail_label')}>
                                    <div className={cx('detail_label_infor')}>
                                        <div className={cx('label_name')}>
                                            <div className={cx('label_name_main')}>
                                                <p>Tên nhãn: {label.name}</p>
                                            </div>
                                        </div>
                                        <div className={cx('label_des')}>
                                            <div className={cx('label_des_main')}>
                                                <p>Mô tả: {label.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('detail_sample_label')}>
                                    <div className={cx('sample_label_main')}>
                                        <div className="sample_label_main_body">
                                            <div className={cx('sample_label_header')}>
                                                <div className={cx('sample_label_header_main')}>
                                                    <p>Danh sách ảnh có nhãn là {label.name}</p>
                                                </div>
                                            </div>
                                            <div className={cx('sample_label_list')}>
                                                <div className={cx('sample_label_list_main')}>
                                                    <div className={cx('sample_label_table')}>
                                                        <div className={cx('table_box')}>
                                                            <div
                                                                className={cx('sample_label_item')}
                                                                onClick={() => {
                                                                    setDetail(true);
                                                                }}
                                                            >
                                                                <div className={cx('item_left')}>
                                                                    <img src="https://i.pinimg.com/originals/ce/0c/21/ce0c2131a67c5d8f9f99a68a1ebfe744.jpg"></img>
                                                                    <div className={cx('img_name')}>
                                                                        <p>hinh1.jpg</p>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item_right')}>
                                                                    <div className={cx('item_right_main')}>
                                                                        <p>hinh1.txt</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={cx('sample_label_item')}>
                                                                <div className={cx('item_left')}>
                                                                    <img src="https://i.pinimg.com/originals/ce/0c/21/ce0c2131a67c5d8f9f99a68a1ebfe744.jpg"></img>
                                                                    <div className={cx('img_name')}>
                                                                        <p>hinh1.jpg</p>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item_right')}>
                                                                    <div className={cx('item_right_main')}>
                                                                        <p>hinh1.txt</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={cx('sample_label_item')}>
                                                                <div className={cx('item_left')}>
                                                                    <img src="https://i.pinimg.com/originals/ce/0c/21/ce0c2131a67c5d8f9f99a68a1ebfe744.jpg"></img>
                                                                    <div className={cx('img_name')}>
                                                                        <p>hinh1.jpg</p>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item_right')}>
                                                                    <div className={cx('item_right_main')}>
                                                                        <p>hinh1.txt</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={cx('sample_label_item')}>
                                                                <div className={cx('item_left')}>
                                                                    <img src="https://i.pinimg.com/originals/ce/0c/21/ce0c2131a67c5d8f9f99a68a1ebfe744.jpg"></img>
                                                                    <div className={cx('img_name')}>
                                                                        <p>hinh1.jpg</p>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item_right')}>
                                                                    <div className={cx('item_right_main')}>
                                                                        <p>hinh1.txt</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={cx('sample_label_item')}>
                                                                <div className={cx('item_left')}>
                                                                    <img src="https://i.pinimg.com/originals/ce/0c/21/ce0c2131a67c5d8f9f99a68a1ebfe744.jpg"></img>
                                                                    <div className={cx('img_name')}>
                                                                        <p>hinh1.jpg</p>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('item_right')}>
                                                                    <div className={cx('item_right_main')}>
                                                                        <p>hinh1.txt</p>
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
                </>
            )}
        </div>
    );
}
export default DatailLabel;
