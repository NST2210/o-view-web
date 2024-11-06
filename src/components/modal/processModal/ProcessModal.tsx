import ReactModal from 'react-modal';
import React, { useEffect, useState } from 'react';
import { useOpenProcessModal } from '../../common/AppStore';

const ProcessModal = () => {

    const { isOpenProcess, closeProcess } = useOpenProcessModal();  const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 18 ? prev + 1 : 18));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <ReactModal
            isOpen={isOpenProcess}
            onRequestClose={closeProcess}
            overlayClassName="detail-nft-overlay"
            className="Modal"
            ariaHideApp={false}
        >
            <div className="modal-primary h-fit-content w-40 modal-process">
                <div className="modal-header d-flex align-items-center justify-content-center">
                    <span className="modal-title">PROCESS</span>
                </div>
                <div className="modal-header-divider-2"></div>
                <div className="d-flex justify-content-center m-t-60 color-text">
                    Please Short  X-Ray
                </div>
                <div className="d-flex justify-content-center m-t-30">
                    <div style={styles.progressContainer}>
                        {Array.from({ length: 18 }).map((_, index) => (
                          <div
                            key={index}
                            style={{
                                ...styles.square,
                                backgroundColor: index < progress ? '#13D0CA' : '#0D6B70'
                            }}
                          />
                        ))}
                    </div>
                </div>
                <div className="d-flex gap-20px w-100 justify-content-center">
                    <button type="submit" className="abort-button">ABORT</button>
                </div>
            </div>

        </ReactModal>
    );
};

const styles = {
    progressContainer: {
        display: 'flex',
        margin: '10px 0',
        justifyContent: 'center',
        backgroundColor: '#0D363D'
    },
    square: {
        width: '12px',
        height: '12px',
        transition: 'background-color 0.3s ease',
        margin: "4px 2px",
    },
};

export default ProcessModal;
