import React from 'react'
import Back from '../Components/Back'
import { useNavigate } from 'react-router-dom';

export default function TermOfService() {
    
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    }
    
    return (
        <div className="term-and-privacy-container">
            <Back onBackClick={goBack} gameTitle="" setting={true} x="yes" />
            <h1>Terms of Service</h1>

            <p><strong>Effective date:</strong> Octobr 28, 2023</p>

            <h2>Acceptance of Terms</h2>

            <p>Welcome to [Your Website/App] ("we," "our," or "us"). By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

            <h2>Use of Our Services</h2>

            <p>You agree to use our services only for lawful purposes and in a manner consistent with these Terms of Service. You shall not:</p>

            <ul>
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe upon the rights of others.</li>
                <li>Engage in any activity that interferes with or disrupts our services.</li>
            </ul>

            <h2>Privacy Policy</h2>

            <p>Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.</p>

            <h2>Intellectual Property</h2>

            <p>All content and materials available on our website are protected by intellectual property laws. You may not copy, distribute, or create derivative works without our explicit permission.</p>

            <h2>Limitation of Liability</h2>

            <p>We make no warranties or representations about the accuracy or completeness of the content on our website. Your use of our services is at your own risk. We shall not be liable for any damages arising out of your use of our services.</p>

            <h2>Termination</h2>

            <p>We reserve the right to terminate or suspend your access to our services at our discretion, with or without cause.</p>

            <h2>Changes to these Terms</h2>

            <p>We may update these Terms of Service from time to time. The most current version will be posted on our website, and the "Effective date" will indicate when it was last updated.</p>

            <h2>Contact Us</h2>

            <p>If you have any questions or concerns about these Terms of Service, please contact us at [Your Contact Information].</p>

        </div>
    )
}
