import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Teko } from "next/font/google"

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
})

function TermsOfServiceContent() {
  return (
    <div className="text-zinc-300 space-y-6">
      <p className="text-zinc-400">Last Updated: July 2025</p>
      <p>
        These Terms of Service (“Terms”) apply to your access to and use of the websites, applications and other
        products and services (collectively, our “Services”) provided by That's My AI Guy LLC. (“That's My AI Guy”,
        “we”, or “us”). By clicking to indicate your acceptance of these Terms, or otherwise accessing or using the
        Services, you agree to these Terms. If you do not agree to these Terms, including the mandatory arbitration
        provision and class action waiver in Section 19, do not access or use our Services.
      </p>
      <p>
        In addition to these Terms, we may ask you to accept additional terms that apply to specific features, products
        or services. To the extent any additional terms conflict with these Terms, the additional terms govern with
        respect to your access to or use of the applicable feature, product or service.
      </p>
      <p>If you have any questions about these Terms or our Services, please contact us at legal@thatsmyaiguy.com.</p>

      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white">1. Eligibility and Authority</h4>
        <p>
          You must be at least 18 years of age or older to access or use our Services. If you are accessing or using our
          Services on behalf of another person or entity, you represent that you are authorized to accept these Terms on
          that person or entity’s behalf and that the person or entity agrees to be responsible to us if you or the
          other person or entity violates these Terms.
        </p>

        <h4 className="text-lg font-bold text-white">2. Accounts; Account Security; Electronic Communications</h4>
        <p>
          You may need to register for an account to access some or all of our Services. If you register for an account,
          you must provide accurate account information and promptly update this information if it changes. You also
          must maintain the security of your account, not share your account credentials, and promptly notify us if you
          discover or suspect that someone has accessed your account without your permission. By creating an account,
          you consent to receive electronic communications from us (e.g., via email or by posting notices on our
          Services).
        </p>

        <h4 className="text-lg font-bold text-white">3. Privacy</h4>
        <p>
          Please refer to our Privacy Policy for information about how we collect, use and disclose information about
          you.
        </p>

        <h4 className="text-lg font-bold text-white">4. Our Services; License</h4>
        <p>
          Our Services may allow you and other users to create, post, store and share marketing, communications, or
          other content (collectively, "User Content"). Except for the license you grant below, you retain all rights in
          and to your User Content, as between you and That's My AI Guy. You grant That's My AI Guy a nonexclusive,
          royalty-free, worldwide, fully-paid, and sub-licensable license to use, reproduce, adapt, publish, translate,
          distribute, and display your User Content to provide the Services. As a part of the Services, we may view,
          copy, and internally use User Content to help us train and improve the Services, including their functionality
          and effectiveness, as well as to assist us in detecting issues. When using the Services, you may import data,
          including personally identifiable information, regarding your contacts (“Contact Data”). We view and use
          Contact Data only to provide Services to you, at your direction.
        </p>

        <h4 className="text-lg font-bold text-white">5. Prohibited Conduct & Compliance with Laws</h4>
        <p>
          You will not violate any applicable law, contract, intellectual property or other third-party right or commit
          a tort, and you are solely responsible for your conduct while accessing or using our Services. You represent
          and warrant that your access to and use of the Services will comply with all applicable laws, rules and
          regulations, including but not limited to those that relate to privacy and data protection and to the sending
          of electronic communications. You are solely responsible for determining whether our Services are suitable for
          use in light of any laws and regulations that govern your entity, industry, or relationship with your own
          contacts.
        </p>

        <h4 className="text-lg font-bold text-white">6. Terms of Sale</h4>
        <p>
          Our services are offered on a project basis, which may include one-time setup fees and optional recurring
          maintenance fees. All fees will be detailed in a separate Statement of Work or agreement. WHEN YOU ENGAGE OUR
          SERVICES, YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT (A) THAT'S MY AI GUY (OR OUR THIRD PARTY PAYMENT PROCESSOR)
          IS AUTHORIZED TO CHARGE YOU FOR THE AGREED-UPON FEES, AND (B) FOR ANY RECURRING SERVICES, YOUR SUBSCRIPTION IS
          CONTINUOUS UNTIL YOU CANCEL IT OR WE SUSPEND OR STOP PROVIDING ACCESS TO THE SERVICES IN ACCORDANCE WITH THESE
          TERMS. You may cancel recurring services at any time by contacting us. All cancellation requests will take
          effect at the end of then-current billing period.
        </p>

        <h4 className="text-lg font-bold text-white">7. Limited License; Copyright and Trademark</h4>
        <p>
          Our Services and the text, graphics, images, photographs, videos, illustrations, trademarks, trade names,
          service marks, logos, slogans and other content contained therein (collectively, the “That's My AI Guy
          Content”) are owned by or licensed to That's My AI Guy and are protected under both United States and foreign
          laws. Except as explicitly stated in these Terms, That's My AI Guy and our licensors reserve all rights in and
          to our Services and the That's My AI Guy Content.
        </p>

        <h4 className="text-lg font-bold text-white">8. Third Party Content and Services</h4>
        <p>
          We may display content, advertisements and promotions from third parties through the Services (“Third Party
          Content”). We do not control, endorse or adopt any Third Party Content, and we make no representations or
          warranties of any kind regarding such Third Party Content. We may also provide you with access to certain
          services, features or functionality offered by a third party in connection with the Services. Use of any such
          services will be subject to separate terms of service between you and such third party.
        </p>

        <h4 className="text-lg font-bold text-white">9. Feedback</h4>
        <p>
          Any questions, comments, suggestions, ideas, original or creative materials or other information you submit
          about That's My AI Guy or our products or Services (collectively, “Feedback”), is non-confidential and will
          become the sole property of That's My AI Guy. We will own exclusive rights, including all intellectual
          property rights, in and to Feedback and will be entitled to the unrestricted use and dissemination of Feedback
          for any purpose, commercial or otherwise, without acknowledgment or compensation to you.
        </p>

        <h4 className="text-lg font-bold text-white">10. Publicity</h4>
        <p>
          You agree to be identified as a customer of That's My AI Guy and that we may refer to you by name, trade name,
          and trademark, and may describe your business in our marketing materials and on our website. You hereby grant
          That's My AI Guy a nonexclusive, royalty-free license to use your name and any of your trade names,
          trademarks, and logos for this purpose.
        </p>

        <h4 className="text-lg font-bold text-white">11. Copyright Complaints</h4>
        <p>
          We have a policy of limiting access to our Services and terminating the accounts of users who infringe the
          intellectual property rights of others. If you believe that anything on our Services infringes any copyright
          that you own or control, you may notify our Designated Agent at legal@thatsmyaiguy.com.
        </p>

        <h4 className="text-lg font-bold text-white">12. Indemnification</h4>
        <p>
          To the fullest extent permitted by applicable law, you will indemnify, defend, and hold harmless That's My AI
          Guy and its officers, directors, agents, partners and employees (collectively, the “That's My AI Guy Parties”)
          from and against any loss, liability, claim, demand, damages, expenses or costs arising out of or related to
          (a) your access to or use of our Services; (b) your User Content or Feedback; (c) your violation of these
          Terms; or (d) your violation of any rights of another.
        </p>

        <h4 className="text-lg font-bold text-white">13. Disclaimers</h4>
        <p>
          YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK. OUR SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
          WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>

        <h4 className="text-lg font-bold text-white">14. Limitation of Liability</h4>
        <p>
          THAT'S MY AI GUY AND THE OTHER THAT'S MY AI GUY PARTIES WILL NOT BE LIABLE TO YOU UNDER ANY THEORY OF
          LIABILITY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, PUNITIVE OR SPECIAL DAMAGES OR LOST PROFITS.
          THE TOTAL LIABILITY OF THAT'S MY AI GUY AND THE OTHER THAT'S MY AI GUY PARTIES FOR ANY CLAIM ARISING OUT OF OR
          RELATING TO THESE TERMS OR OUR SERVICES IS LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO ACCESS OR USE OUR
          SERVICES.
        </p>

        <h4 className="text-lg font-bold text-white">15. Release</h4>
        <p>
          To the fullest extent permitted by applicable law, you release That's My AI Guy and the other That's My AI Guy
          Parties from responsibility, liability, claims, demands, and/or damages of every kind and nature, known and
          unknown, arising out of or related to disputes between users and the acts or omissions of third parties.
        </p>

        <h4 className="text-lg font-bold text-white">16. Transfer and Processing Data</h4>
        <p>
          By accessing or using our Services, you consent to the processing, transfer and storage of information about
          you in and to the United States and other countries, where you may not have the same rights and protections as
          you do under local law.
        </p>

        <h4 className="text-lg font-bold text-white">
          17. Export Control, Sanctions Compliance and Anti-Corruption Compliance
        </h4>
        <p>
          The receipt and use of our Services may be subject to export control and economic sanctions laws of the United
          States and other applicable government authorities. You agree to abide by all such laws as they relate to your
          access and use of our Services. You will comply with all applicable United States and international
          anti-corruption and anti-bribery laws and regulations.
        </p>

        <h4 className="text-lg font-bold text-white">18. Commercial Items</h4>
        <p>
          If acquired by any agency of the U.S. Government, such agency acknowledges that the Services constitute
          "commercial computer software" or "commercial computer software documentation" and such agency's rights are
          limited to those specifically granted under these Terms.
        </p>

        <h4 className="text-lg font-bold text-white">19. Dispute Resolution; Binding Arbitration</h4>
        <p>
          Except for small claims disputes, you and That's My AI Guy waive your rights to a jury trial and to have any
          dispute arising out of or related to these Terms or our Services resolved in court. Instead, all disputes will
          be resolved through confidential binding arbitration held in the state of Delaware in accordance with the
          Streamlined Arbitration Rules and Procedures of JAMS. You and That's My AI Guy agree that any dispute is
          personal to you and That's My AI Guy and that any dispute will be resolved solely through individual
          arbitration and will not be brought as a class arbitration, class action or any other type of representative
          proceeding.
        </p>

        <h4 className="text-lg font-bold text-white">20. Governing Law and Venue</h4>
        <p>
          These Terms and your access to and use of our Services will be governed by and construed and enforced in
          accordance with the laws of the State of Delaware, without regard to conflict of law rules or principles. Any
          dispute between the parties that is not subject to arbitration or cannot be heard in small claims court will
          be resolved in the state or federal courts of Delaware.
        </p>

        <h4 className="text-lg font-bold text-white">21. Changes to these Terms</h4>
        <p>
          We may make changes to these Terms from time to time. If we make changes, we will post the amended Terms to
          our Services and update the “Last Updated” date above. Your continued access to and use of our Services after
          we provide notice will confirm your acceptance of the changes.
        </p>

        <h4 className="text-lg font-bold text-white">22. Termination</h4>
        <p>
          We reserve the right, without notice and in our sole discretion, to terminate your right to access or use our
          Services. We are not responsible for any loss or harm related to your inability to access or use our Services.
        </p>

        <h4 className="text-lg font-bold text-white">23. Severability</h4>
        <p>
          If any provision or part of a provision of these Terms is unlawful, void or unenforceable, that provision or
          part of the provision is deemed severable from these Terms and does not affect the validity and enforceability
          of any remaining provisions.
        </p>

        <h4 className="text-lg font-bold text-white">24. Miscellaneous</h4>
        <p>
          These Terms constitute the entire agreement between you and That's My AI Guy relating to your access to and
          use of our Services. The failure of That's My AI Guy to exercise or enforce any right or provision of these
          Terms will not operate as a waiver of such right or provision.
        </p>
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <div className={`${teko.variable} font-sans`}>
      <Header />
      <main className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-teko text-5xl md:text-6xl text-white mb-8 border-b border-zinc-800 pb-4">
            Terms of Service
          </h1>
          <TermsOfServiceContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
