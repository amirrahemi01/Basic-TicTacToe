import React from 'react'
import Back from '../Components/Back'
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {

    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    }

    return (
        <div className="term-and-privacy-container">
            <Back onBackClick={goBack} gameTitle="" setting={true} x="yes" />
            <h1 id="privacy-policy">Privacy Policy</h1>
            <p><strong>Effective date:</strong> Octobr 28, 2023</p>
            <h2 id="introduction">Introduction</h2>
            <p>Welcome to [Your Website/App] (“we,” “our,” or “us”). At [Your
                Website/App], we are committed to protecting your privacy and ensuring
                the security of your personal information. This Privacy Policy explains
                how we collect, use, share, and protect your personal data when you
                visit our website or use our services.</p>
            <p>Please take a moment to read this Privacy Policy carefully. By
                accessing our website or using our services, you consent to the
                practices described in this policy.</p>
            <h2 id="information-we-collect">Information We Collect</h2>
            <h3 id="personal-information">Personal Information</h3>
            <p>We may collect the following personal information when you use our
                services:</p>
            <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Payment information</li>
            </ul>
            <h3 id="non-personal-information">Non-Personal Information</h3>
            <p>We may also collect non-personal information, such as:</p>
            <ul>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Cookies</li>
            </ul>
            <h2 id="how-we-use-your-information">How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
                <li>To provide and maintain our services.</li>
                <li>To improve, personalize, and expand our services.</li>
                <li>To respond to your requests, comments, or questions.</li>
                <li>To send you updates, newsletters, and marketing communications.</li>
            </ul>
            <h2 id="data-sharing">Data Sharing</h2>
            <p>We may share your personal information with third parties only in the
                following circumstances:</p>
            <ul>
                <li>With your consent.</li>
                <li>To comply with legal obligations.</li>
                <li>To protect our rights, privacy, safety, or property.</li>
                <li>In connection with a business transfer or merger.</li>
            </ul>
            <h2 id="your-rights">Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access, correct, or delete your personal information.</li>
                <li>Withdraw your consent for processing your data.</li>
                <li>Lodge a complaint with a data protection authority.</li>
            </ul>
            <h2 id="security">Security</h2>
            <p>We take appropriate measures to protect your data, but no method of
                transmission over the internet is completely secure.</p>
            <h2 id="changes-to-this-privacy-policy">Changes to this Privacy
                Policy</h2>
            <p>We may update this Privacy Policy from time to time. You can check
                the “Effective date” at the top of the policy to see when it was last
                updated.</p>
            <h2 id="contact-us">Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy,
                please contact us at [Your Contact Information].</p>
            <hr />
            <p>This is a basic template, and you should adapt it to your specific
                circumstances and legal requirements. Ensure that your privacy policy
                complies with applicable laws and regulations, such as GDPR. It’s
                crucial to seek legal advice to ensure your policy is comprehensive and
                tailored to your business.</p>
            <p>Please refer to the following resources for further information on
                creating privacy policies and GDPR compliance:</p>

        </div>
    )
}
