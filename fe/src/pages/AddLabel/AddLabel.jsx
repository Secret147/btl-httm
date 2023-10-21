import { faArrowLeft, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import styles from './AddLabel.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Back from '../../components/BackButton/Back';
import axios from '../../service/axios';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function AddLabel() {
    // const getData = async () => {
    //     const data = await axios.get('/bill/all');
    //     console.log(data.data);
    // };
    const [label, setLabel] = useState({
        name: '',
        description: '',
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setLabel({ ...label, [name]: value });
    };
    const handleAdd = async () => {
        if (label.name === '') {
            alert('Vui long nhap ten nhan');
        } else {
            const res = await axios.post('/newlabel', label);
            if (res.status === 200) {
                alert(res.data);
                setLabel({
                    name: '',
                    description: '',
                });
                window.location.href = '/';
            } else {
                console.log(res.data);
            }
        }
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
                                    <p>THÊM NHÃN</p>
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
                                            onChange={handleInput}
                                            name="name"
                                            value={label.name}
                                        ></input>
                                    </div>
                                    <div className={cx('form_edit_input')}>
                                        <div className={cx('input_label')}>
                                            <p>Mô tả</p>
                                        </div>
                                        <input
                                            placeholder="Nhập mô tả"
                                            type="text"
                                            onChange={handleInput}
                                            name="description"
                                            value={label.description}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('add_button')} onClick={handleAdd}>
                            <div className={cx('item_add')}>
                                <div className={cx('add_button_main')}>
                                    <FontAwesomeIcon icon={faFileCirclePlus} />
                                    <p className={cx('add_button_main_p')}>Thêm nhãn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddLabel;
