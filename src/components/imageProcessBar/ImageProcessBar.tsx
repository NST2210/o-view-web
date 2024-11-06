import React, {useEffect, useState} from 'react';
import {ReactComponent as IcSearch} from '../../assets/svg/icSearch.svg';
import {ReactComponent as IcArrowDown} from '../../assets/svg/icDownArrow.svg';
import ToggleSwitch from "../toggleSwicth/ToggleSwicth";

const ImageProcessBar = ({selecttab}) => {

    const [tabSelected, setTabSelected] = useState(0);

    useEffect(() => {
        setTabSelected(0)
    }, [])

    return (
        <div className="image-process-bar">
            <div className="image-tab-container d-flex">
                <div onClick={() => {
                    setTabSelected(0)
                }}
                     className={`align-items-center d-flex justify-content-center text-center title-tab w-50 ${tabSelected == 0 ? 'title-tab__selected' : ''}`}>Thumbnail
                </div>
                <div onClick={() => {
                    setTabSelected(1)
                }}
                     className={`align-items-center d-flex justify-content-center text-center title-tab w-50 ${tabSelected == 1 ? 'title-tab__selected' : ''}`}>Image
                    Processing
                </div>
            </div>
            <div className="info-container">
                <div className="info-card">
                    <div className="info-card__avatar"></div>
                    <div className="info-card__info">
                        <div className="info-card__title">ER_2024092...</div>
                        <div className="info-card__id">20240924284781</div>
                        <div className="info-card__date">2024-09-24</div>
                    </div>
                </div>
            </div>
            <div className="content-container"></div>
            <div className="content-container"></div>


        </div>
    );
}

export default ImageProcessBar;
