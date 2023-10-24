import React, { useEffect, useRef, useState } from 'react';
import './style.css';
function Cam() {
    const videoRef = useRef();
    const socketRef = useRef(null);
    const [isConnect, setIsConnect] = useState(false);
    const initSocket = () => {
        if (socketRef.current === null || !isConnect) {
            console.log('connecting...');
            // Tạo kết nối WebSocket
            socketRef.current = new WebSocket('ws://localhost:8000/video');

            socketRef.current.onopen = () => {
                console.log('Connected to server');
                setIsConnect(true);
            };
        }
    };
    useEffect(() => {
        initSocket();

        socketRef.current.onmessage = async (event) => {
            const base64Data = event.data;
            // console.log(base64Data)
            const dataURI = `data:image/jpeg;base64, ${base64Data}`;

            // Hiển thị hình ảnh trên video player
            videoRef.current.src = dataURI;
            // videoRef.current.onloadedmetadata = () => {
            //     videoRef.current.play();
            // };
        };

        socketRef.current.onclose = () => {
            setIsConnect(false);
            console.log('Disconnected from server');
        };

        return () => {
            socketRef.current.close();
            console.log('Disconnected from server');
            setIsConnect(false);
        };
    }, []);

    return (
        <div className="camara-controller-custom">
            {/* <video ref={videoRef} autoPlay controls /> */}
            <img
                ref={videoRef}
                alt="vd"
                style={{
                    width: '100%', // Video chiếm toàn bộ chiều rộng của div
                    height: '100%',
                    objectFit: 'cover',
                }}
            ></img>
        </div>
    );
}

export default Cam;
