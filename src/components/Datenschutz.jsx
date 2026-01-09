import { Link } from 'react-scroll';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="home" smooth={true} duration={500} className="text-primary hover:text-accent transition-colors cursor-pointer">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Privacy <span className="text-primary">Policy</span>
        </h1>

        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Data Protection on a General Note</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                The operators of this website take the protection of your personal data very seriously. We treat your
                personal data as confidential and in accordance with the statutory data protection regulations and this
                privacy policy.
              </p>
              <p>
                When you use this website, various personal data are collected. Personal data is data that can be used
                to personally identify you. We make every effort to be transparent regarding the types of data we collect
                and how we use it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Data Collection on This Website</h2>
            <div className="text-gray-300 space-y-4">
              <h3 className="text-xl font-semibold text-white">Contact Form</h3>
              <p>
                If you submit inquiries to us via our contact form, the information provided in the form (including your
                contact details) will be stored by us for the purpose of processing the request and in case of follow-up
                questions. We will not share this data without your consent.
              </p>
              <p>
                The data processed through the contact form will not be transmitted to third parties without your
                express consent. A transfer to third parties only takes place if we are legally obliged to do so or if
                this is necessary for the enforcement of our claims.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Cookies</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Our website uses cookies. Cookies are small text files that are stored on your device and allow us to
                recognize your browser. Cookies do not cause any damage to your device and do not contain viruses.
              </p>
              <p>
                We use technically necessary cookies to ensure the proper functioning of our website. These cookies
                cannot be disabled.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Your Rights</h2>
            <div className="text-gray-300 space-y-4">
              <p>As a data subject, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to confirmation (Article 15 GDPR)</li>
                <li>Right to rectification (Article 16 GDPR)</li>
                <li>Right to erasure (Article 17 GDPR)</li>
                <li>Right to restrict processing (Article 18 GDPR)</li>
                <li>Right to data portability (Article 20 GDPR)</li>
                <li>Right to object (Article 21 GDPR)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Contact</h2>
            <div className="text-gray-300">
              <p>
                If you have any questions about this privacy policy or the processing of your personal data, please
                contact us at:{' '}
                <a href="mailto:kontakt@scalesite.de" className="text-primary hover:text-accent">
                  kontakt@scalesite.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Legal Basis</h2>
            <div className="text-gray-300">
              <p>
                The legal basis for data processing is Article 6(1)(a) GDPR (consent) or Article 6(1)(b) GDPR
                (performance of a contract).
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
