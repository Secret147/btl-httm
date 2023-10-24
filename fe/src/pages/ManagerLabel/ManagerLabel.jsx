import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ManagerLabel.module.scss';
import classNames from 'classnames/bind';
import {
    faArrowLeft,
    faFileCirclePlus,
    faMagnifyingGlass,
    faPenToSquare,
    faRotateRight,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Back from '../../components/BackButton/Back';
import axios from '../../service/axios';

const cx = classNames.bind(styles);

function ManagerLabel() {
    const [alert, setAlert] = useState(false);
    const [search, setSearch] = useState(false);
    const [labels, setLabels] = useState([]);
    const [deleteId, setDeleteId] = useState();
    const [labelSearch, setLabelSearch] = useState('');
    const [listSearch, setListSearch] = useState([]);
    const [checkDelete, setCheckDelete] = useState(false);

    const getAllLabel = async () => {
        try {
            const res = await axios.get('/label/alllabel');
            setLabels(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const getLabelSearch = async () => {
        const res = await axios.get(`/label/searchlabel?key=${labelSearch}`);
        setListSearch(res.data);
    };
    useEffect(() => {
        getAllLabel();
    }, []);
    useEffect(() => {
        if (labelSearch === '') {
            setSearch(false);
        } else {
            setSearch(true);
        }
        getLabelSearch();
    }, [labelSearch]);
    const deleteLabel = async () => {
        const res = await axios.delete(`/label/deletelabel/${deleteId}`);
        if (res.status === 200) {
            setDeleteId(null);
            setAlert(false);
            getAllLabel();
        } else {
            alert('Delete fail!');
        }
    };
    const handleDeleteLabel = (id) => {
        setAlert(true);
        setDeleteId(id);
    };

    const inputSearch = (e) => {
        setLabelSearch(e.target.value);
        console.log(labelSearch);
    };
    return (
        <div className={cx('container')}>
            <div className={alert ? cx('alert_box') : cx('alert_box', 'popup')}>
                <div className={cx('alert_box_main')}>
                    <div className={cx('alert_box_box')}>
                        <div className={cx('notification')}>
                            <p>Bạn có chắc chắn muốn xóa Nhãn này không?</p>
                        </div>
                        <div className={cx('alert_button')}>
                            <div className={cx('alert_button_box')}>
                                <div
                                    className={cx('alert_button_accept')}
                                    onClick={() => {
                                        deleteLabel();
                                    }}
                                >
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

            <div className={alert ? cx('contain_box', 'turnoff_popup_bg') : cx('contain_box')}>
                <div className={cx('main')}>
                    <div className={cx('main_container')}>
                        <div className={cx('search')}>
                            {search ? (
                                <div className={cx('search_box')}>
                                    <div className={cx('search_box_main')}>
                                        {listSearch &&
                                            listSearch.length > 0 &&
                                            listSearch.map((item) => {
                                                return (
                                                    <div
                                                        key={item.id}
                                                        className={cx('search_box_item')}
                                                        onClick={() => {
                                                            localStorage.setItem('detailid', item.id);
                                                            window.location.href = '/detaillabel';
                                                        }}
                                                    >
                                                        <p>{item.name}</p>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className={cx('search_main')}>
                                <div className={cx('search_main_container')}>
                                    <div className={cx('search_input')}>
                                        <input
                                            className={cx('search_input_ip')}
                                            placeholder="Tìm kiếm"
                                            name="search"
                                            onChange={inputSearch}
                                        ></input>
                                    </div>
                                    <div className={cx('search_icon')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('table_label')}>
                            {labels.length > 0 ? (
                                <div className={cx('table_box')}>
                                    {labels &&
                                        labels.length > 0 &&
                                        labels.map((label) => {
                                            return (
                                                <div className={cx('item_table')} key={label.id}>
                                                    <div className={cx('table_label')}>
                                                        <div className={cx('item_main')}>
                                                            <div
                                                                className={cx('item_left')}
                                                                onClick={() => {
                                                                    localStorage.setItem('detailid', label.id);
                                                                    window.location.href = '/detaillabel';
                                                                }}
                                                            >
                                                                <div className={cx('item_left_main')}>
                                                                    <p>{label.name}</p>
                                                                </div>
                                                            </div>
                                                            <div className={cx('button_box')}>
                                                                <div className={cx('item_right')}>
                                                                    <div className={cx('item_right_delete')}>
                                                                        <div
                                                                            className={cx('delete_button')}
                                                                            onClick={() => {
                                                                                handleDeleteLabel(label.id);
                                                                            }}
                                                                        >
                                                                            <div
                                                                                className={cx(
                                                                                    'delete_button_main',
                                                                                    'delete_color',
                                                                                )}
                                                                            >
                                                                                <FontAwesomeIcon icon={faTrashCan} />
                                                                                <p
                                                                                    className={cx(
                                                                                        'delete_button_main_p',
                                                                                    )}
                                                                                >
                                                                                    Xóa nhãn
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('item_right_edit')}>
                                                                        <div className={cx('delete_button')}>
                                                                            <div
                                                                                className={cx(
                                                                                    'delete_button_main',
                                                                                    'edit_color',
                                                                                )}
                                                                                onClick={() => {
                                                                                    window.location.href = '/editlabel';
                                                                                    localStorage.setItem(
                                                                                        'editid',
                                                                                        label.id,
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                                                <p
                                                                                    className={cx(
                                                                                        'delete_button_main_p',
                                                                                    )}
                                                                                >
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
                                            );
                                        })}
                                </div>
                            ) : (
                                <div className={cx('icon_route_container', 'type_rotate')}>
                                    <div className={cx('icon-container')}>
                                        <FontAwesomeIcon icon={faRotateRight} />
                                    </div>
                                </div>
                            )}
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
        </div>
    );
}

export default ManagerLabel;
