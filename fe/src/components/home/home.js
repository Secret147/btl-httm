import './style.css'
import { useEffect, useState, useRef } from 'react';
function Home() {
    const videoRef = useRef();
    const socketRef = useRef(null);
    const [isConnect, setIsConnect] = useState(false)
    const [log, setLog] = useState([])
    const logContainerRef = useRef(null);
    const initSocket = () => {
        if (socketRef.current === null || !isConnect) {
            console.log('connecting...')
            // Tạo kết nối WebSocket
            socketRef.current = new WebSocket("ws://localhost:8000/video");

            socketRef.current.onopen = () => {
                console.log("Connected to server");
                setIsConnect(true)
            };
        }

    }
    useEffect(() => {

        initSocket()

        socketRef.current.onmessage = async (event) => {
            socketRef.current.send('open')
            const data = JSON.parse(event.data)
            const base64Data = data['src'];
            // console.log(base64Data)
            const dataURI = `data:image/jpeg;base64, ${base64Data}`;

            // Hiển thị hình ảnh trên video player
            videoRef.current.src = dataURI;
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            let mess = formattedTime + ' ' + data['mess']
            setLog((prevLog) => [...prevLog, mess]);
            // Cuộn xuống cuối danh sách sau mỗi lần có nội dung mới
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;

        };

        socketRef.current.onclose = () => {
            setIsConnect(false)
            console.log("Disconnected 1 from server");
            // initSocket()
        };

        return () => {
            socketRef.current.onopen = () => {
                socketRef.current.send("close")
            }
            socketRef.current.close();
            setTimeout(() => {
                socketRef.current = null; // Đảm bảo kết nối đã được ngắt trước khi gán null
            }, 100);
            console.log("Disconnected from server");
            setIsConnect(false)
        };

    }, []);


    return (
        <div className="home-container">
            <div className="camera-container">
                <div className='edit-camera-container'>
                    <h3 className='name-title'>Camera</h3>
                    <div className='camera'>
                        <div className='camara-controller-custom'>
                            {/* <video ref={videoRef} autoPlay controls /> */}
                            <img ref={videoRef} alt="vd" style={{
                                width: '100%', // Video chiếm toàn bộ chiều rộng của div
                                height: '100%',
                                objectFit: 'cover'
                            }}></img>
                        </div>
                    </div>
                </div>

            </div>
            <div className="log-container">
                <div className='edit-camera-container edit-log'>
                    <h3 className='name-title title-log'>Log</h3>
                    <div className='log' ref={logContainerRef}>
                        {log.map((mess, index) => (
                            <p key={index}>{mess}</p>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;