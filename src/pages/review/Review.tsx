import React, {useEffect, useState} from 'react';
import ImageProcessBar from "../../components/imageProcessBar/ImageProcessBar";
import {useOpenProcessModal} from "../../components/common/AppStore";
import ProcessModal from "../../components/modal/processModal/ProcessModal";


const Review = () => {
    const {isOpenProcess, openProcess, closeProcess} = useOpenProcessModal();
    useEffect(() => {
        openProcess();
        const interval = setInterval(() => {
            closeProcess()
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="review">
            <div className="review-content">
                <ImageProcessBar/>
            </div>
            {isOpenProcess && <ProcessModal/>}
        </div>
    );
};

export default Review;
