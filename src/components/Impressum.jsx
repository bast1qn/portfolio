import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="home" smooth={true} duration={500} className="text-primary hover:text-accent transition-colors cursor-pointer">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Legal <span className="text-primary">Notice</span>
        </h1>

        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Name:</strong> Bastian Giersch</p>
              <p className="flex items-center gap-2">
                <strong className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Address:
                </strong>
                Lutherstadt Wittenberg, Germany
              </p>
              <p className="flex items-center gap-2">
                <strong className="flex items-center gap-2">
                  <FaEnvelope /> Contact:
                </strong>
                <a href="mailto:kontakt@scalesite.de" className="text-primary hover:text-accent">
                  kontakt@scalesite.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Disclaimer</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Accountability for content</strong></p>
              <p>
                The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
                accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
                our own content on these web pages. In this matter, please note that we are not obliged to monitor the
                information transmitted or saved by third parties, or investigate circumstances pointing to illegal activities.
              </p>
              <p>
                Our obligations to remove or block the use of information under generally applicable laws remain unaffected
                by this as per §§ 8 to 10 of the Telemedia Act (TMG).
              </p>

              <p className="mt-4"><strong>Accountability for links</strong></p>
              <p>
                Responsibility for the content of external links (to web pages of third parties) lies solely with the operators
                of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement
                become known to us, we will remove the respective link immediately.
              </p>

              <p className="mt-4"><strong>Copyright</strong></p>
              <p>
                Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law,
                every form of utilizing, reproducing or processing works subject to copyright protection on our web pages
                requires the prior consent of the respective owner of the rights. Individual reproductions of a work are
                only allowed for private use. Materials and links downloaded by third parties are at their own risk.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Source</h2>
            <p className="text-gray-300">
              This template was created using information from the German Ministry of Justice and Consumer Protection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
