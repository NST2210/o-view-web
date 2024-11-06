import React, {useEffect, useState} from 'react';
import circbtn01 from '../../assets/img/acquisition/circBtn_01_default.png';
import circbtn01hover from '../../assets/img/acquisition/circBtn_01_over.png';
import circbtn02 from '../../assets/img/acquisition/circBtn_02_default.png';
import circbtn02hover from '../../assets/img/acquisition/circBtn_02_over.png';
import circbtn03 from '../../assets/img/acquisition/circBtn_03_default.png';
import circbtn03hover from '../../assets/img/acquisition/circBtn_03_over.png';
import circbtn04 from '../../assets/img/acquisition/circBtn_04_default.png';
import circbtn04hover from '../../assets/img/acquisition/circBtn_04_over.png';
import circbtn05 from '../../assets/img/acquisition/circBtn_05_default.png';
import circbtn05hover from '../../assets/img/acquisition/circBtn_05_over.png';
import circbtn06 from '../../assets/img/acquisition/circBtn_06_default.png';
import circbtn06hover from '../../assets/img/acquisition/circBtn_06_over.png';
import {useOpenProcedureModal} from "../common/AppStore";
import ProcedureModal from "../modal/procedureModal/ProcedureModal";

const ImageProcessBar = ({isReview}) => {

    const [tabSelected, setTabSelected] = useState(0);
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    const {isOpenProcedure, openProcedure} = useOpenProcedureModal();

    const handleMouseEnter = (btnId: string) => {
        setHoveredButton(btnId);
    };
    const handleMouseLeave = () => {
        setHoveredButton(null);
    };
    const handleClick = (btnId: string) => {
        if (btnId == selectedButton) {
            setSelectedButton('');
        } else {
            setSelectedButton(btnId);
        }
    };
    const getImageSrc = (btnId: string, defaultSrc: string, hoverSrc: string, selectSrc: string) => {
        if (selectedButton === btnId) {
            return selectSrc;
        }
        if (hoveredButton === btnId) {
            return hoverSrc;
        }
        return defaultSrc;
    };

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
            {tabSelected == 0 && <>
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
                <div className="content-container min-h-500px"></div>
            </>}
            {tabSelected == 1 && <>
                <div className="content-container min-h-200px border-top-none"></div>
                <div className="content-container min-h-200px border-top-none"></div>
            </>}
            <div className="content-container h-100 border-top-none">
                <div className=" d-grid grid-col-3 h-100 w-100 m-b-30">
                    <img id="btnCrop" className="quick-btn"
                         src={getImageSrc('btnCrop', circbtn01, circbtn01hover, circbtn01hover)}
                         onMouseEnter={() => handleMouseEnter('btnCrop')} onMouseLeave={handleMouseLeave}
                         onClick={() => handleClick('btnCrop')}
                         title="Crop"
                    />

                    <img id="btnAddBodypart" className="quick-btn"
                         src={getImageSrc('btnAddBodypart', circbtn02, circbtn02hover, circbtn02hover)}
                         onMouseEnter={() => handleMouseEnter('btnAddBodypart')} onMouseLeave={handleMouseLeave}
                         onClick={() => {
                             openProcedure();
                         }}/>

                    <img id="btnSuspend" className="quick-btn"
                         src={getImageSrc('btnSuspend', circbtn03, circbtn03hover, circbtn03hover)}
                         onMouseEnter={() => handleMouseEnter('btnSuspend')} onMouseLeave={handleMouseLeave}
                         onClick={() => handleClick('btnSuspend')}/>

                    <img id="btnRetake" className="quick-btn"
                         src={getImageSrc('btnRetake', circbtn04, circbtn04hover, circbtn04hover)}
                         onMouseEnter={() => handleMouseEnter('btnRetake')} onMouseLeave={handleMouseLeave}
                         onClick={() => handleClick('btnRetake')}/>

                    <img id="btnReject" className="quick-btn"
                         src={getImageSrc('btnReject', circbtn05, circbtn05hover, circbtn05hover)}
                         onMouseEnter={() => handleMouseEnter('btnReject')} onMouseLeave={handleMouseLeave}
                         onClick={() => handleClick('btnReject')}/>

                    <img id="btnAccept" className="quick-btn"
                         src={getImageSrc('btnAccept', circbtn06, circbtn06hover, circbtn06hover)}
                         onMouseEnter={() => handleMouseEnter('btnAccept')} onMouseLeave={handleMouseLeave}
                         onClick={() => handleClick('btnAccept')}/>
                </div>
            </div>
            {isOpenProcedure && <ProcedureModal/>}
        </div>
    );
}

export default ImageProcessBar;
