import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import ImageProcessBar from "../../components/imageProcessBar/ImageProcessBar";
import {useOpenProcessModal} from "../../components/common/AppStore";
import ProcessModal from "../../components/modal/processModal/ProcessModal";


const Review = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const isReview = currentPath == '/review';
    const {isOpenProcess, openProcess, closeProcess} = useOpenProcessModal();
    useEffect(() => {
        openProcess();
        const interval = setInterval(() => {
            closeProcess()
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="review">
            <div className="review-content">
                <ImageProcessBar isReview={isReview}/>
            </div>
            {isOpenProcess && <ProcessModal/>}
        </div>
    );
};

export default Review;
