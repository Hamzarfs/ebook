import { FaPhone, FaComment } from 'react-icons/fa';
import '../../TopHead.css';

const TopHead = ({ updatePopupTitle }) => {
    const title = "Get Free Consultancy";

    return (
        
            <div className="top-head container mt-3">
                <div className="row justify-content-end"> {/* Row alignment to the right */}
                    <div className="top-right col-md-12">
                        <ul
                            style={{
                                listStyleType: 'none',
                                textDecoration:'none',
                                padding: 0,      // Removed any extra padding
                                display: 'flex',  // Use flexbox for horizontal layout
                                justifyContent: 'flex-end',  // Align to the right
                                alignItems: 'center',  // Vertically center align the items
                                gap: '20px'  // Space between items (can be adjusted)
                            }}
                        >
                            <li>
                                <a
                                    className="toll_icon"
                                    href="tel:+17327979165"
                                    
                                    style={{
                                        textDecoration:'none',
                                        color: 'orange',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <FaPhone style={{ marginRight: '8px' }} />
                                    (732) 797-9165
                                </a>
                            </li>
                            <li>
                                <a
                                    href="+17327979165"
                               
                                    className="chat_icon chat"
                                    style={{
                                        textDecoration:'none',
                                        color: 'orange',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    
                                >
                                    <FaComment style={{ marginRight: '8px' }} />
                                    Live Chat with Expert
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     
    );
};

export default TopHead;
