import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicySection = () => {
    return (
        <div className="container simple-section pb-5">
            <div className="row ">
                <div className="col-lg-12 mt-5 custom-content-v3 mb-4 " style={{ textAlign: 'justify' }}>
                    <h1 className='align-items-center justify-content-center text-center'>Privacy Policy</h1>
                    <p style={{ textAlign: 'justify' }}>
                        At AMZ Book Publishing, we respect your privacy and are committed to safeguarding the personal information you provide when using our website. This policy outlines how we collect, use, and protect your information.
                    </p>
                    <p className='m-0'><strong>Information Collection</strong></p>
                    <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, or complete a form. The personal information we may ask you to provide includes your name, email address, mailing address, phone number, and credit card details. However, you are free to visit our site anonymously if you prefer.</p>
                    <p className='m-0'><strong>Use of Collected Information</strong></p>
                    <p>The information we collect may be used for the following purposes:</p>
                    <ul>
                        <li><strong>Personalizing your experience:</strong> We use your information to better understand your individual needs and tailor our services accordingly.</li>
                        <li><strong>Improving our website:</strong> Feedback and information from users help us enhance our website and offerings.</li>
                        <li><strong>Enhancing customer service:</strong> Your information allows us to respond more effectively to customer service requests and support needs.</li>
                        <li><strong>Processing transactions:</strong> We ensure that your information, whether public or private, will not be sold, exchanged, transferred, or provided to any other company for any reason, except as necessary to fulfill your order or provide the requested services.</li>
                        <li><strong>Sending periodic emails:</strong> We may use your email address to send you information, respond to inquiries, and address any requests or questions.</li>
                    </ul>
                    <p className='m-0'><strong>Information Protection</strong></p>
                    <p>We implement a range of security measures to protect your personal information during the ordering, submission, and access processes. Our secure servers utilize Secure Socket Layer (SSL) technology to encrypt sensitive data, such as credit card information, which is then securely processed by our payment gateway providers. Only authorized personnel with special access rights can view this information, and they are required to maintain confidentiality. After a transaction, we do not store any private information (e.g., credit card numbers, Social Security numbers, or financial details) on our servers.</p>
                    <p className='m-0'><strong>Cookies</strong></p>
                    <p>Yes, we use cookies. Cookies are small files transferred to your computer’s hard drive via your web browser (if allowed) that help websites recognize your browser and capture specific information. We use cookies to track advertisements and compile aggregate data about site traffic and user interactions to improve our site and tools. We may also engage third-party service providers to assist in analyzing visitor behavior, but these providers are only permitted to use the collected information to help us improve our business.</p>
                    <p className='m-0'><strong>Information Disclosure</strong></p>
                    <p>We do not sell, trade, or transfer your personally identifiable information to external parties. This excludes trusted third parties who assist us in operating our website, conducting business, or providing services to you, as long as they agree to keep your information confidential. We may also disclose information if it is necessary to comply with legal requirements, enforce our policies, or protect the rights, property, or safety of ourselves or others. Non-personally identifiable visitor information may be shared for marketing, advertising, or other purposes.</p>
                    <p className='m-0'><strong>Third-Party Links</strong></p>
                    <p>Occasionally, we may offer third-party products or services on our website. These third-party sites have independent privacy policies, and we are not responsible for their content or activities. However, we welcome feedback regarding these sites to help maintain the integrity of our platform.</p>
                    <p className='m-0'><strong>Online Privacy Policy Scope</strong></p>
                    <p>This privacy policy applies solely to information collected through our website and does not cover information collected offline.</p>
                </div>

                <div className='col-12'>
                    <div className='text-center'>
                        <Link className='btn btn-primary' to="https://amzbookpublishing.net/" style={
                            {
                                backgroundColor: 'rgb(252, 151, 0)',
                                color: 'white',
                                borderRadius: '30px',
                                boxShadow: 'rgba(252, 151, 0, 0.5) 0px 4px 6px',
                                border: 'none',
                                padding: '10px 30px',
                                fontSize: '20px',
                            }
                        }>Back to Homepage</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PrivacyPolicySection;
