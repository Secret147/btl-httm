import React, { useRef, useEffect } from 'react';
import './style.css'
import Peer from "simple-peer"
function CameraComponent() {
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const socketRef = useRef(null);
    const peerRef = useRef(null);

    // Tạo một MediaRecorder để ghi lại video từ stream
    const stopCamera = () => {
        streamRef.current.getTracks().forEach(function (track) {
            track.stop();
        });
        if (socketRef.current) {
            socketRef.current.close();
        }
    }
    // useEffect(() => {
    //     const openCamera = async () => {
    //         try {
    //             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    //             streamRef.current = stream;
    //             videoRef.current.srcObject = stream;
    //         } catch (error) {
    //             console.error('Error accessing camera:', error);
    //         }
    //     };

    //     // window.addEventListener('beforeunload', handlePageExit);


    //     openCamera(); // Mở camera khi component được render
    //     return () => {
    //         stopCamera()
    //     };
    // }, []); // Chạy một lần khi component được render

    useEffect(() => {
        const openCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                streamRef.current = stream
                peerRef.current = new Peer({ initiator: true, stream: stream });

                peerRef.current.on("signal", (data) => {
                    console.log(data)
                    // Gửi tín hiệu WebRTC qua WebSocket
                    const ws = new WebSocket("ws:127.0.0.1:8000/webrtc"); // Thay đổi địa chỉ máy chủ của bạn
                    ws.onopen = () => {
                        ws.send(JSON.stringify(data));
                    };
                });

            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        openCamera(); // Mở camera khi component được render

        return () => {
            stopCamera();
        };
    }, []);

    return (
        <div className='camara-controller-custom'>
            <video ref={videoRef} autoPlay style={{
                width: '100%', // Video chiếm toàn bộ chiều rộng của div
                height: '100%',
                objectFit: 'cover' // Tự động tính chiều cao dựa trên tỷ lệ khung hình của video
            }} />
        </div>
    );
}

export default CameraComponent;
