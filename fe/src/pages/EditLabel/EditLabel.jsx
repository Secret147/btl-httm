import { faArrowLeft, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import styles from './EditLabel.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Back from '../../components/BackButton/Back';
import { useEffect, useState } from 'react';
import axios from '../../service/axios';
const cx = classNames.bind(styles);

function EditLabel() {
    const [label, setLabel] = useState({
        id: localStorage.getItem('editid'),
        name: '',
        description: '',
    });

    const getLabel = async () => {
        const res = await axios.get(`/label/${localStorage.getItem('editid')}`);
        setLabel(res.data);
        console.log(res.data);
    };
    useEffect(() => {
        getLabel();
    }, []);
    const handleEdit = (e) => {
        const { name, value } = e.target;
        setLabel({ ...label, [name]: value });
    };
    const handleUpdate = () => {
        const res = axios.put('updatelabel', label);
        window.location.href = '/';
        localStorage.removeItem('editid');
    };
    return (
        <div className={cx('container')}>
            <Back></Back>
            <div className={cx('main')}>
                <div className={cx('main_container')}>
                    <div className={cx('form_edit')}>
                        <div className={cx('form_edit_container')}>
                            <div className={cx('form_edit_header')}>
                                <div className={cx('form_edit_header_main')}>
                                    <p>SỬA NHÃN</p>
                                </div>
                            </div>
                            <div className={cx('form_edit_main')}>
                                <div className={cx('form_edit_mainbox')}>
                                    <div className={cx('form_edit_input')}>
                                        <div className={cx('input_label')}>
                                            <p>Tên nhãn</p>
                                        </div>
                                        <input
                                            placeholder="Nhập tên nhãn"
                                            type="text"
                                            value={label.name}
                                            name="name"
                                            onChange={handleEdit}
                                        ></input>
                                    </div>
                                    <div className={cx('form_edit_input')}>
                                        <div className={cx('input_label')}>
                                            <p>Mô tả</p>
                                        </div>
                                        <input
                                            placeholder="Nhập mô tả"
                                            type="text"
                                            value={label.description}
                                            name="description"
                                            onChange={handleEdit}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx('add_button')}
                            onClick={() => {
                                handleUpdate();
                            }}
                        >
                            <div className={cx('item_add')}>
                                <div className={cx('add_button_main')}>
                                    <FontAwesomeIcon icon={faFileCirclePlus} />
                                    <p className={cx('add_button_main_p')}>Cập nhật</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditLabel;
