import { faArrowLeft, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import styles from './AddLabel.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function AddLabel() {
    return (
        <div className={cx('container')}>
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
                                        <input placeholder="Nhập tên nhãn" type="text"></input>
                                    </div>
                                    <div className={cx('form_edit_input')}>
                                        <div className={cx('input_label')}>
                                            <p>Mô tả</p>
                                        </div>
                                        <input placeholder="Nhập mô tả" type="text"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('add_button')}>
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
