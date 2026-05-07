import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Teko } from "next/font/google"

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
})

function PrivacyPolicyContent() {
  return (
    <div className="text-zinc-300 space-y-6">
      <p className="text-zinc-400">Last Updated: July 2025</p>

      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white">1. Overview</h4>
        <p>
          That's My AI Guy LLC (“That's My AI Guy,” “we,” “us,” and “our”) respects your privacy and is committed to
          protecting it through compliance with this Privacy Policy (“Privacy Policy”). This Privacy Policy describes
          how we collect and use your Personal Information when you visit our website or otherwise use our Platform as
          described further in the Terms of Service, and that you may provide in electronic messages to That's My AI
          Guy.
        </p>
        <p>
          Please read this Privacy Policy to understand our policies and practices regarding your Personal Information
          and how we will handle it. If you do not agree with our policies and practices, do not use our Platform. By
          accessing or using the Platform, you agree and consent to this Privacy Policy.
        </p>
        <p>
          That's My AI Guy may change this Privacy Policy at any time, at its discretion. Your continued use of the
          Platform after we make changes is deemed to be acceptance of and consent to those changes, so please check the
          Privacy Policy periodically for updates.
        </p>
        <p>
          This Privacy Policy is subject to and governed by the That's My AI Guy Terms of Service. The Services are part
          of the Platform and are described further in the Terms of Service.
        </p>

        <h4 className="text-lg font-bold text-white">
          2. The Types of Information That That's My AI Guy Collects About You and How We Collect It
        </h4>
        <p>
          That's My AI Guy may collect two types of information from you when you visit the Platform: Personal
          Information and Non-Personal Information (collectively “Information”).
        </p>
        <p>
          “Personal Information” refers to data by which you may be personally identified, such as name, email address,
          employer, job title and department, and telephone number.
        </p>
        <p>“Non-Personal Information” means data that is about you, but does not identify you specifically.</p>
        <p>We collect Information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Directly from you when you provide it to us.</strong> When you create an account, make a purchase,
            or request information from That's My AI Guy, we will ask for things like your name, contact, billing, and
            communication information, and account ID or credentials in order to fulfill your request. If you set up an
            appointment with us through the Platform, attend a trade show or event, or otherwise contact us, you may
            also voluntarily provide similar information. If you submit any Personal Information about other people to
            us or to our service providers, you are responsible for making sure that you have the authority to do so and
            to allow us to use their Personal Information in accordance with this Privacy Policy (for example, by You
            asking for their consent).
          </li>
          <li>
            <strong>From third parties.</strong> We obtain information through partners, vendors, suppliers and other
            third parties. The parties from whom we obtain information are typically corporate enterprises and they may
            be located in any of the locations in which we do business. These enterprises largely fall into the
            following categories: Advertising and marketing companies, data set and information vendors, public database
            providers, social media platforms, partners, or providers of products or services. We take steps to confirm
            that information we receive from these third parties has been collected with your consent or that these
            parties are otherwise legally permitted to disclose your Personal Information to us.
          </li>
          <li>
            <strong>Automatically as you navigate through the Platform.</strong> We collect information about how you
            interact with the Platform through the use of cookies, pixel tags, and similar technologies.
          </li>
        </ul>

        <h4 className="text-lg font-bold text-white">3. How That's My AI Guy Uses Personal Information</h4>
        <p>
          We use Personal Information that we collect about you or that you provide to us for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>For Functionality and Development of the Platform and Services.</strong> We use information to
            provide, offer, and personalize the Platform and other Services provided to you. Some information, like your
            IP address, is used to communicate with your device to provide network connectivity, measure usage levels,
            diagnose server problems and provide security features. Other business purposes include data analysis,
            testing, improving or developing new products, services and technologies, and identifying trends. Some
            Platform features may leverage artificial intelligence tools. We do NOT retain Personal Information to
            develop, improve, or train generalized artificial intelligence or machine learning models. That's My AI
            Guy’s use and transfer to any other app of information received from Google APIs will adhere to Google API
            Services User Data Policy, including the Limited Use requirements.
          </li>
          <li>
            <strong>For Customer Support, Platform Updating and Reporting.</strong> We rely on information to analyze
            performance, improve and maintain the Platform, provide customer support, and verify eligibility for
            promotional offers.
          </li>
          <li>
            <strong>For Business Operations.</strong> We use information to operate our business; for example, to
            perform accounting, auditing, billing, reconciliation, and collection activities, as well as for crime or
            fraud monitoring and prevention, protecting our legal rights, and performing contractual obligations.
          </li>
          <li>
            <strong>To Communicate.</strong> We use contact information to send messages; to provide our Services; to
            respond to customer service requests; to provide alerts such as security updates or changes in our policies;
            and to send marketing or informational materials, in accordance with your communication preferences.
          </li>
          <li>
            <strong>For Advertising and Marketing.</strong> We may use Personal Information to provide personalized
            content and to study the effectiveness of advertising and marketing campaigns.
          </li>
        </ul>
        <p>
          <strong>LEGAL BASIS FOR OUR USE (APPLICABLE ONLY TO EEA AND UNITED KINGDOM VISITORS):</strong> If you are in
          the European Economic Area or the United Kingdom, our legal basis for collecting and using the Personal
          Information described above will depend on the Personal Information concerned and the specific context in
          which we collect it. However, we will collect Personal Information from you only where we have your consent,
          where we need it to perform a contract with you, where we have a legal obligation, or where the processing is
          in our legitimate interests and not overridden by your data protection interests.
        </p>
        <p>
          <strong>RETENTION OF YOUR PERSONAL INFORMATION:</strong> We will only retain your Personal Information for as
          long as reasonably necessary to fulfill the purposes we collected it for, including for satisfying any legal,
          regulatory, tax, accounting or reporting requirements.
        </p>

        <h4 className="text-lg font-bold text-white">4. How That's My AI Guy Protects Your Information</h4>
        <p>
          The Platform is designed to provide reasonable and appropriate administrative, technical and organizational
          security measures to protect your Personal Information. We require our suppliers and vendors to apply similar
          protections. No technology, data transmission or system can be guaranteed to be 100% secure. If you have
          reason to believe that your interaction with us is no longer secure, please immediately notify us.
        </p>

        <h4 className="text-lg font-bold text-white">5. When That's My AI Guy Shares Your Information</h4>
        <p>We may disclose Personal Information that we collect or you provide as described in this Privacy Policy:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>With Affiliates and Subsidiaries.</strong> For purposes limited to and consistent with this Privacy
            Policy.
          </li>
          <li>
            <strong>With Suppliers.</strong> Our authorized vendors and suppliers may require Personal Information to
            provide services we have contracted for, such as product delivery, website hosting, data analysis, IT
            services, auditing, or customer service.
          </li>
          <li>
            <strong>With Partners.</strong> We occasionally have relationships with third parties that are not suppliers
            or vendors but are working with us to offer certain opportunities such as marketing and similar promotions,
            to enable joint products or research studies, or to facilitate services on the Platform.
          </li>
          <li>
            <strong>For Advertising and Marketing.</strong> We share your information with our third-party company
            partners to prepare and deliver advertising and marketing content and to enable them to provide you with
            more personalized ads.
          </li>
          <li>
            <strong>For Connections to Social Networks and Third Party Services.</strong> Where you are using our
            Services and have chosen to connect your social networks profiles to our Services, or if you authorize a
            third party service to access your account, you are agreeing to provide information about you to the social
            networks and the third party services under their respective terms and privacy policies. For example, if you
            choose to connect your YouTube account to our Services, this connection uses YouTube’s API services, and the
            Google Privacy Policy will apply to you. If you have authorized us to access your information via the
            YouTube API services, you may revoke our access to your data via the Google security settings page.
          </li>
          <li>
            <strong>Sales, Mergers & Acquisitions.</strong> We may disclose Personal Information as part of a
            contemplated or actual corporate transaction such as a reorganization, merger, sale, or joint venture.
          </li>
          <li>
            <strong>With Your Consent.</strong> We may disclose your Personal Information to any other person or entity
            where you consent to the disclosure.
          </li>
        </ul>
        <p>
          We do NOT share your phone number or opt-in consent with third parties unless we’ve received your express
          written consent to do so. All categories exclude text messaging originator opt-in data and consent; this
          information will not be shared with any third parties, excluding aggregators and providers of the Text Message
          services. We also share non-personally identifiable information, such as anonymized or aggregated information,
          with suppliers for purposes such as analysis and identifying trends. That's My AI Guy does not sell any of
          your Personal Information for monetary compensation.
        </p>

        <h4 className="text-lg font-bold text-white">6. Information From Children</h4>
        <p>
          We do not knowingly collect, use, or disclose Information from children under 16. If we learn that we have
          collected the Personal Information of a child under 16, we will take steps to delete the information as soon
          as possible.
        </p>

        <h4 className="text-lg font-bold text-white">7. Links to Other Websites and Services</h4>
        <p>
          We are not responsible for the practices employed by websites or services linked to or from the Platform. This
          Privacy Policy does not address the policies and practices of third parties or other organizations that are
          not operating on our behalf.
        </p>

        <h4 className="text-lg font-bold text-white">8. Do Not Track</h4>
        <p>At this time, the Platform does not respond to Do Not Track signals.</p>

        <h4 className="text-lg font-bold text-white">9. Your Legal Rights</h4>
        <p>
          That's My AI Guy respects your rights in how your Personal Information is used and shared. Depending on where
          you live, you may have rights to request access or corrections to your personal data and make choices about
          the kinds of marketing materials you receive.
        </p>

        <h4 className="text-lg font-bold text-white">10. European Privacy Rights</h4>
        <p>
          If you are in Europe, you may have additional rights under the GDPR, the UK GDPR, or nFADP. You can object to
          processing of your Personal Information, ask us to restrict processing, or request portability. If we have
          collected your Personal Information with your consent, you can withdraw your consent at any time. If you
          believe we are using your Personal Information in a way that is inconsistent with this Privacy Policy, contact
          your local data protection authority.
        </p>

        <h4 className="text-lg font-bold text-white">11. International Compliance</h4>
        <p>
          That's My AI Guy is a global company with its headquarters in the United States. As such, we may transfer your
          Personal Information between the United States and our affiliates and business partners in other countries.
          Whenever we transfer Personal Information beyond the country of origin, we will do so in accordance with
          applicable laws. For Personal Information originating in the European Economic Area (EEA), the United Kingdom
          (UK), or Switzerland, That's My AI Guy participates in the EU-U.S. Data Privacy Framework (EU-U.S. DPF) and,
          as applicable, the UK extension to the EU-U.S. DPF, and/or the Swiss-U.S. Data Privacy Framework (Swiss-U.S.
          DPF).
        </p>

        <h4 className="text-lg font-bold text-white">12. Data Privacy Framework</h4>
        <p>
          That's My AI Guy LLC complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF), the UK Extension to the
          EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework (Swiss-U.S. DPF) as set forth by the U.S. Department of
          Commerce. If there is any conflict between the terms in this privacy policy and the Principles, the Principles
          shall govern. To learn more about the Data Privacy Framework (DPF) program, and to view our certification,
          please visit https://www.dataprivacyframework.gov/.
        </p>

        <h4 className="text-lg font-bold text-white">13. California Privacy Rights</h4>
        <p>
          This section is addressed to California residents only. Subject to certain exceptions, the CCPA grants to
          California residents the rights to: be notified about the collection, use, disclosure, sale or sharing of
          their Personal Information; request access to, deletion of, or correction of their Personal Information;
          request to opt out of the “sale” or “sharing” of Personal Information; limit the use or disclosure of
          Sensitive Personal Information; and to not be discriminated against for exercising such rights. That's My AI
          Guy does not sell your Personal Information. If you wish to exercise your right to opt-out of us using your
          Personal Information for cross-contextual targeted advertising purposes, you may do so by using the details in
          the “HOW TO CONTACT US” section.
        </p>

        <h4 className="text-lg font-bold text-white">14. Colorado Privacy Rights</h4>
        <p>
          This section is addressed to Colorado residents only. The CPA grants Colorado residents rights to: be
          notified; request access, deletion, or correction; and request to opt out of the use of Personal Information
          for targeted advertising, sale, or certain profiling. You can exercise these rights by using the details in
          the “HOW TO CONTACT US” section.
        </p>

        <h4 className="text-lg font-bold text-white">15. Connecticut Privacy Rights</h4>
        <p>
          This section is addressed to Connecticut residents only. You can exercise your rights under the CTDPA by using
          the details in the “HOW TO CONTACT US” section.
        </p>

        <h4 className="text-lg font-bold text-white">16. Utah Privacy Rights</h4>
        <p>
          This section is addressed to Utah residents only. You can exercise your rights under the UCPA by using the
          details in the “HOW TO CONTACT US” section.
        </p>

        <h4 className="text-lg font-bold text-white">17. Virginia Privacy Rights</h4>
        <p>
          This section is addressed to Virginia residents only. The VCDPA grants Virginia residents rights to: be
          notified; request access, deletion, or correction; and request to opt out of the use of Personal Information
          for targeted advertising, sale, or certain profiling. You can exercise these rights by using the details in
          the “HOW TO CONTACT US” section.
        </p>
      </div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <div className={`${teko.variable} font-sans`}>
      <Header />
      <main className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-teko text-5xl md:text-6xl text-white mb-8 border-b border-zinc-800 pb-4">
            Privacy Policy
          </h1>
          <PrivacyPolicyContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
