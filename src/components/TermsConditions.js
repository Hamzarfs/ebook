import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditionsSection = () => {
    return (
        <div className="container simple-section pb-5">
            <div className="row">
                <div className="col-lg-12  custom-content-v3 mb-4" style={{ textAlign: 'justify' }}>
                    <h1 className='align-items-center justify-content-center text-center'>Terms & Conditions</h1>
                    <p>By completing an order with AMZ Book Publishing (i.e., making payment), you acknowledge that you have read, understood, and agree to the terms and conditions outlined here. These terms form a legally binding agreement between the client and AMZ Book Publishing. By engaging our services, you consent to be bound by these terms, as specified below:</p>

                    <p className='m-0'><strong>Original Content Guarantee</strong></p>
                    <p>AMZ Book Publishing guarantees that all content delivered is original and free of plagiarism. To verify this, we provide a Copyscape report for each project. Please note that Copyscape does not scan text embedded in images, videos, or other non-readable media. If you require more comprehensive plagiarism checks beyond Copyscape, you may do so independently, as these are not included in our standard pricing. Rest assured that the content we deliver is original and exclusive.</p>

                    <p className='m-0'><strong>Full Ownership of Content</strong></p>
                    <p>Upon payment and delivery, all content created by AMZ Book Publishing becomes your exclusive property. We do not require acknowledgment or attribution for the work. Once delivered, you have full ownership and may publish or use the content as you see fit, entirely under your name or brand.</p>

                    <p className='m-0'><strong>Data Security</strong></p>
                    <p>We prioritize the protection of your personal information. Once an order is placed or personal data is submitted, we implement security measures, including SSL encryption, to safeguard your information. We do not retain sensitive data (e.g., credit card details, Social Security numbers, financial information) after the transaction is completed.</p>

                    <p className='m-0'><strong>Cookie Policy</strong></p>
                    <p>We use cookies to track advertisements and gather data on site traffic and interactions. This enables us to enhance user experience and improve our services. In some cases, we may partner with third-party service providers to assist with visitor analysis. These providers are strictly prohibited from using your information for any purpose other than customer behavior analysis.</p>

                    <p className='m-0'><strong>Image Usage Policy</strong></p>
                    <p>AMZ Book Publishing maintains compliance with copyright laws. We do not use copyrighted images without permission. Instead, we provide links to suggested images for your convenience. You may also use royalty-free images without concern. If copyrighted images are required, any associated costs will be borne by the client.</p>

                    <p className='m-0'><strong>Limitation of Liability</strong></p>
                    <p>Clients are advised to carefully review this clause. AMZ Book Publishing is not liable for any direct or indirect losses that may result from the use of our website or services/products purchased through it. This includes any potential damages related to viruses or material losses caused by accessing our website or using our products. We shall not be held responsible for any losses arising from the use or inability to use our services.</p>

                    <p className='m-0'><strong>Policy Updates</strong></p>
                    <p>Our terms and conditions may be updated periodically without prior notice. We recommend visiting this page regularly to stay informed of any changes.</p>

                    <p className='m-0'><strong>Refund Policy</strong></p>
                    <p>Please read and understand the following terms carefully to avoid any misunderstanding of the terms regarding the AMZ Book Publishing refund policy. If you still have any confusion regarding the refund policy, you can contact our customer services representative and discuss the policy. We advise you to be sure about the refund terms and conditions if you have any confusion in this regard. We offer refunds only in special cases and specified conditions, detailed as under:</p>

                    <ul>
                        <li><strong>Refunds for Purchases Above $15,000:</strong> If approved, all purchases above $15,000 will be refunded in equal monthly installments of $5,000.</li>
                    </ul>

                    <p className='m-0'><strong>Full Refund</strong></p>
                    <p>With AMZ Book Publishing you may avail of the option of a full refund. We value our clients and try all possible ways to assist them. If the work on your project has started and you somehow need to stop or claim a refund, you can discuss the status of your work with our support team member to assist you further. The support and assistance will help you provide the current work status and the option you may have in the given situation.</p>

                    <p className='m-0'><strong>Change of Mind</strong></p>
                    <p>If (for any reason) you change your mind and decide against continuing your project with us after placing your order, you can ask for a refund within the first hour of placing your order. A 60% processing fee will be charged in other cases.</p>

                    <p className='m-0'><strong>Incompetent Delivery</strong></p>
                    <p>Once the work is delivered, customers are only entitled to claim a refund once they have exhausted all the options detailed as under:</p>
                    <ul>
                        <li>If it does not comply with project requirements (as requested/documented by the customer). We are committed to providing our customers with 100% satisfaction and offer unlimited revisions to ensure that the delivery is up to the mark. We assign, re-assign, and re-write your work to ensure complete satisfaction.</li>
                        <li>Reserve FREE Pages for the future, but of the same value, and you can avail them at any time.</li>
                    </ul>
                    <p>If we’re still not able to deliver what you asked for, a refund will be processed with a mutual agreement on a set percentage (but only in the cases where the delivery is completely off the mark).</p>

                    <p className='m-0'><strong>Refund Time Frame</strong></p>
                    <p>Refunds must be claimed within 120 days of delivery. Refunds claimed after the set time frame will not be entertained. All the customers must note the deadline for claiming a refund at the time of placing an order.</p>

                    <p className='m-0'><strong>Cases Where Refund Will Not Be Issued</strong></p>
                    <ul>
                        <li>In case of late delivery due to some minor technical errors, such as grammatical, typing, word count, missing references etc., refunds will be processed with mutual agreement, and the company will only settle with a partial refund or discounts reserved for future purchases.</li>
                        <li>The company will not be responsible for any delay from the client’s end.</li>
                        <li>No refund will be issued on the basis of low writing.</li>
                        <li> For book marketing/publishing projects, no refund will be issued if the client is unable to provide access to either their bookstores (Amazon, Barnes & Noble etc.) or their social media channels which help our team to maximize reach, engagement, and sales.</li>
                    </ul>
                </div>

                <div className='col-12'>
                    <div className='text-center'>
                        <Link className='btn btn-primary' to="/" style={
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
        </div>
    );
};

export default TermsAndConditionsSection;
