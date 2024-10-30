import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {useOpenNewStory} from '../../common/AppStore.js';

type TransferItem = {
    selected?: any;
    setReload?: any;
    openWinningComplete?: any;
};

const TransferItem: React.FC<TransferItem> = ({selected, openWinningComplete}) => {
    const [recipient, setRecipient] = useState('');

    const handleInput = (event) => {
        setRecipient(event.target.value);
    };
    const handlePasteFromClipboard = () => {
        navigator.clipboard.readText().then((text) => {
            setRecipient(text);
        });
    };

    const {isOpenNewStudy, closeNewStudy} = useOpenNewStory();

    return (
        <ReactModal
            isOpen={isOpenNewStudy}
            onRequestClose={closeNewStudy}
            overlayClassName="detail-nft-overlay"
            className="Modal"
            ariaHideApp={false}
        >
            <div
                className="modal-primary w-540px w-xs-338px h-417px h-xs-310px ">
                <div className="close-button-modal" onClick={closeNewStudy}>
                    close
                </div>
                <div className="fs-24 fs-xs-16 fw-bold text-center">Transfer Item</div>
                <div className="line-history m-t-16 m-b-24 m-t-xs-12 m-b-xs-16"></div>
                <div className="">
                    <div className="fs-14 fs-xs-12 p-b-8 title-input-modal mode-color-8787d6">Item</div>
                    <div
                        className="detail-box-modal fs-xs-12 m-b-24 m-b-xs-16  mode-color-8787d6 cjk-font"
                    >
                        {selected?.nftName}
                    </div>
                    <div className="fs-14 fs-xs-12 p-b-8 title-input-modal mode-color-8787d6">Recipient wallet address
                    </div>
                    <div className="wrapper-input-otp p-0">
                        <input type="text" value={recipient} placeholder="Enter the wallet adress"
                               onChange={handleInput}/>
                        <button className="btn-paste-otp button" onClick={handlePasteFromClipboard}>
                            Paste
                        </button>
                    </div>
                    <div className="flex-start gap-4px p-t-8 p-b-24 p-b-xs-16 ">
                        warning
                        <div className="fs-14 fs-xs-10 fs-xs-10 color-secondary">
                            Items sent to the wrong address cannot be recovered.
                        </div>
                    </div>
                    <div
                        className="btn-detail-nft button m-0 h-50px h-xs-40px"
                        onClick={() => {
                            openWinningComplete({...selected, recipient: recipient, txid: '0xc7027cf05...eb3bb440b'});
                        }}
                    >
                        Send
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};
export default TransferItem;
