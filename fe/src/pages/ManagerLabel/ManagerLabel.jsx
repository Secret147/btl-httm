import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ManagerLabel.module.scss';
import classNames from 'classnames/bind';
import {
    faArrowLeft,
    faFileCirclePlus,
    faMagnifyingGlass,
    faPenToSquare,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ManagerLabel() {
    const [alert, setAlert] = useState(false);
    const [search, setSearch] = useState('');
    const handleDeleteLabel = () => {
        setAlert(true);
    };
    const handleTest = () => {
        setSearch('Nham mat');
    };
    return (
        <div className={cx('container')}>
            {alert ? (
                <div className={cx('alert_box')}>
                    <div className={cx('alert_box_main')}>
                        <div className={cx('alert_box_box')}>
                            <div className={cx('notification')}>
                                <p>Bạn có chắc chắn muốn xóa Nhãn này không?</p>
                            </div>
                            <div className={cx('alert_button')}>
                                <div className={cx('alert_button_box')}>
                                    <div className={cx('alert_button_accept')}>
                                        <p>Đồng ý</p>
                                    </div>
                                    <div
                                        className={cx('alert_button_cancel')}
                                        onClick={() => {
                                            setAlert(false);
                                        }}
                                    >
                                        <p>Hủy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('contain_box')}>
                    <div
                        className={cx('back')}
                        onClick={() => {
                            window.location.href = '/';
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className={cx('main')}>
                        <div className={cx('main_container')}>
                            <div className={cx('search')}>
                                {search ? (
                                    <div className={cx('search_box')}>
                                        <div className={cx('search_box_main')}>
                                            <div className={cx('search_box_item')}>
                                                <p>Khuôn mặt</p>
                                            </div>
                                            <div className={cx('search_box_item')}>
                                                <p>Nhắm mắt</p>
                                            </div>
                                            <div className={cx('search_box_item')}>
                                                <p>Mở mắt</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <div className={cx('search_main')}>
                                    <div className={cx('search_main_container')}>
                                        <div className={cx('search_input')}>
                                            <input className={cx('search_input_ip')} placeholder="Tìm kiếm"></input>
                                        </div>
                                        <div className={cx('search_icon')} onClick={handleTest}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('table_label')}>
                                <div className={cx('table_box')}>
                                    <div className={cx('item_table')}>
                                        <div className={cx('table_label')}>
                                            <div className={cx('item_main')}>
                                                <div
                                                    className={cx('item_left')}
                                                    onClick={() => {
                                                        window.location.href = '/detaillabel';
                                                    }}
                                                >
                                                    <div className={cx('item_left_main')}>
                                                        <p>Khuôn mặt</p>
                                                    </div>
                                                </div>
                                                <div className={cx('button_box')}>
                                                    <div className={cx('item_right')}>
                                                        <div className={cx('item_right_delete')}>
                                                            <div
                                                                className={cx('delete_button')}
                                                                onClick={handleDeleteLabel}
                                                            >
                                                                <div
                                                                    className={cx('delete_button_main', 'delete_color')}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Xóa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('item_right_edit')}>
                                                            <div className={cx('delete_button')}>
                                                                <div
                                                                    className={cx('delete_button_main', 'edit_color')}
                                                                    onClick={() => {
                                                                        window.location.href = '/editlabel';
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Sửa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('item_table')}>
                                        <div className={cx('table_label')}>
                                            <div className={cx('item_main')}>
                                                <div
                                                    className={cx('item_left')}
                                                    onClick={() => {
                                                        window.location.href = '/detaillabel';
                                                    }}
                                                >
                                                    <div className={cx('item_left_main')}>
                                                        <p>Khuôn mặt</p>
                                                    </div>
                                                </div>
                                                <div className={cx('button_box')}>
                                                    <div className={cx('item_right')}>
                                                        <div className={cx('item_right_delete')}>
                                                            <div className={cx('delete_button')}>
                                                                <div
                                                                    className={cx('delete_button_main', 'delete_color')}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Xóa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('item_right_edit')}>
                                                            <div className={cx('delete_button')}>
                                                                <div
                                                                    className={cx('delete_button_main', 'edit_color')}
                                                                    onClick={() => {
                                                                        window.location.href = '/editlabel';
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Sửa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('item_table')}>
                                        <div className={cx('table_label')}>
                                            <div className={cx('item_main')}>
                                                <div
                                                    className={cx('item_left')}
                                                    onClick={() => {
                                                        window.location.href = '/detaillabel';
                                                    }}
                                                >
                                                    <div className={cx('item_left_main')}>
                                                        <p>Khuôn mặt</p>
                                                    </div>
                                                </div>
                                                <div className={cx('button_box')}>
                                                    <div className={cx('item_right')}>
                                                        <div className={cx('item_right_delete')}>
                                                            <div className={cx('delete_button')}>
                                                                <div
                                                                    className={cx('delete_button_main', 'delete_color')}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Xóa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('item_right_edit')}>
                                                            <div className={cx('delete_button')}>
                                                                <div
                                                                    className={cx('delete_button_main', 'edit_color')}
                                                                    onClick={() => {
                                                                        window.location.href = '/editlabel';
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Sửa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('item_table')}>
                                        <div className={cx('table_label')}>
                                            <div className={cx('item_main')}>
                                                <div
                                                    className={cx('item_left')}
                                                    onClick={() => {
                                                        window.location.href = '/detaillabel';
                                                    }}
                                                >
                                                    <div className={cx('item_left_main')}>
                                                        <p>Khuôn mặt</p>
                                                    </div>
                                                </div>
                                                <div className={cx('button_box')}>
                                                    <div className={cx('item_right')}>
                                                        <div className={cx('item_right_delete')}>
                                                            <div className={cx('delete_button')}>
                                                                <div
                                                                    className={cx('delete_button_main', 'delete_color')}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Xóa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('item_right_edit')}>
                                                            <div className={cx('delete_button')}>
                                                                <div
                                                                    className={cx('delete_button_main', 'edit_color')}
                                                                    onClick={() => {
                                                                        window.location.href = '/editlabel';
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                                    <p className={cx('delete_button_main_p')}>
                                                                        Sửa nhãn
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx('item_add')}
                        onClick={() => {
                            window.location.href = '/addlabel';
                        }}
                    >
                        <div className={cx('add_button_main')}>
                            <FontAwesomeIcon icon={faFileCirclePlus} />
                            <p className={cx('add_button_main_p')}>Thêm nhãn</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ManagerLabel;
