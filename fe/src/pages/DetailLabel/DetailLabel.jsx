import { faArrowLeft, faCancel, faRotateRight, faXmark } from '@fortawesome/free-solid-svg-icons';
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
    const [sample, setSample] = useState({
        name: '',
        extension: '',
        train: '',
        size: '',
        urlImage: '',
        description: '',
    });

    const [samples, setSamples] = useState([]);

    const getAllSamplebyLabelid = async () => {
        const res = await axios.get(`/sample/allsample/${localStorage.getItem('detailid')}`);
        setSamples(res.data);
    };
    const getLabel = async () => {
        const res = await axios.get(`/label/label/${localStorage.getItem('detailid')}`);
        setLabel(res.data);
    };
    const getSample = async (id) => {
        const res = await axios.get(`/sample/onesample/${id}`);
        setSample(res.data);
    };
    const handleDetail = (id) => {
        setDetail(true);
        getSample(id);
    };
    useEffect(() => {
        getLabel();
        getAllSamplebyLabelid();
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
                                {sample.urlImage ? (
                                    <img src={sample.urlImage}></img>
                                ) : (
                                    <div className={cx('icon_route_container', 'type_rotate')}>
                                        <div className={cx('icon-container')}>
                                            <FontAwesomeIcon icon={faRotateRight} />
                                        </div>
                                    </div>
                                )}
                                <div className={cx('sample_img_name')}></div>
                            </div>
                            <div className={cx('right')}>
                                <div className="sample_right">
                                    <div className={cx('sample_right_main')}>
                                        <div className={cx('sample_infor_item')}>
                                            <p>
                                                Tên mẫu: {sample.name}.{sample.extension}
                                            </p>
                                        </div>
                                        <div className={cx('sample_infor_item')}>
                                            <p>Định dạng: {sample.extension}</p>
                                        </div>
                                        <div className={cx('sample_infor_item')}>
                                            <p>Kích thước: {sample.size}</p>
                                        </div>
                                        <div className={cx('sample_infor_item')}>
                                            <p>Trạng thái: {sample.train !== 1 ? 'Đã train' : 'Chưa train'}</p>
                                        </div>
                                    </div>
                                    <div className={cx('sample_right_name')}></div>
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
                                                    <p>Danh sách ảnh có nhãn {label.name}</p>
                                                </div>
                                            </div>
                                            <div className={cx('sample_label_list')}>
                                                <div className={cx('sample_label_list_main')}>
                                                    <div className={cx('sample_label_table')}>
                                                        {samples.length > 0 ? (
                                                            <div className={cx('table_box')}>
                                                                {samples &&
                                                                    samples.length > 0 &&
                                                                    samples.map((sample) => {
                                                                        return (
                                                                            <div
                                                                                className={cx('sample_label_item')}
                                                                                onClick={() => {
                                                                                    handleDetail(sample.id);
                                                                                }}
                                                                                key={sample.id}
                                                                            >
                                                                                <div className={cx('item_left')}>
                                                                                    {sample.urlImage ? (
                                                                                        <img
                                                                                            src={sample.urlImage}
                                                                                        ></img>
                                                                                    ) : (
                                                                                        <div
                                                                                            className={cx(
                                                                                                'icon_route_container',
                                                                                            )}
                                                                                        >
                                                                                            <div
                                                                                                className={cx(
                                                                                                    'icon-container',
                                                                                                )}
                                                                                            >
                                                                                                <FontAwesomeIcon
                                                                                                    icon={faRotateRight}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                    <div className={cx('img_name')}>
                                                                                        <p>
                                                                                            {sample.name}.
                                                                                            {sample.extension}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className={cx('item_right')}>
                                                                                    <div
                                                                                        className={cx(
                                                                                            'item_right_main',
                                                                                        )}
                                                                                    >
                                                                                        <p>
                                                                                            {sample.train !== 1
                                                                                                ? 'Đã train'
                                                                                                : 'Chưa train'}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    })}
                                                            </div>
                                                        ) : (
                                                            <div className={cx('icon_route_container')}>
                                                                <div className={cx('icon-container')}>
                                                                    <FontAwesomeIcon icon={faRotateRight} />
                                                                </div>
                                                            </div>
                                                        )}
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
