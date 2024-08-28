import { IoMdClose } from "react-icons/io";
import {
  VscDebugBreakpointLog,
  VscDebugBreakpointLogUnverified,
} from "react-icons/vsc";
import "./styles.scss";
import { FaRegHandPointRight } from "react-icons/fa";

export const TermsConditions = ({ setShowTerms }) => {
  return (
    <>
      <div className="main_con">
        <div className="termsConditions_wrapper">
          <h3>Terms and Conditions</h3>

          <span className="close_btn" onClick={() => setShowTerms(false)}>
            <IoMdClose />
          </span>

          <div className="section_con">
            {/* introduction */}
            <section>
              <h4>1. Introduction</h4>

              <div className="txt">
                <p>
                  Our aim is to keep this Agreement as readable as possible, but
                  in some cases for legal reasons, some of the language is
                  required "legalese".
                </p>
              </div>
            </section>

            {/* Your acceptance of this agreement */}
            <section>
              <h4>2. Your acceptance of this agreement</h4>

              <div className="txt">
                <p>
                  These terms of service are entered into by and between You and
                  Olivia Data Solutions Limited ("Company," "we," "our," or
                  "us"). The following terms and conditions, together with any
                  documents they expressly incorporate by reference
                  (collectively "Terms of Service"), govern your access to and
                  use of including any content, functionality, and services
                  offered on or through (the "Website").
                </p>

                <p>
                  Please read the Terms of Service carefully before you start to
                  use the Olivia App/ Website.
                </p>

                <p>
                  By using the Olivia App/ Website [or by clicking to accept or
                  agree to the Terms of Service when this option is made
                  available to you], you accept and agree to be bound and abide
                  by these Terms of Service and our Privacy Policy, found at
                  /privacy-policy, incorporated herein by reference. If you do
                  not want to agree to these Terms of Service, you must not
                  access or use the Olivia App/ Website.
                </p>

                <p>
                  You must be at least 18 years old to use this Olivia App/
                  Website. However, children of all ages may use the Website if
                  enabled by a parent or legal guardian. If you are under 18,
                  you represent that you have your parent or guardian's
                  permission to use the Olivia App/ Website. Please have them
                  read these Terms of Service with you.
                </p>

                <p>
                  If you are a parent or legal guardian of a user under the age
                  of 18, by allowing your child to use the Olivia App/ Website,
                  you are subject to the terms of these Terms of Service and
                  responsible for your child's activity on the Olivia App/
                  Website.
                </p>
              </div>
            </section>

            {/* BY ACCESSING AND USING THIS WEBSITE */}
            <section className="sec2">
              <h5>BY ACCESSING AND USING THIS WEBSITE</h5>
              <div className="txt">
                <ul>
                  <li>
                    {" "}
                    <span>
                      <FaRegHandPointRight />
                    </span>
                    YOU ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS
                    OF SERVICE;
                  </li>

                  <li>
                    <span>
                      {" "}
                      <FaRegHandPointRight />
                    </span>
                    YOU REPRESENT AND WARRANT THAT YOU ARE THE LEGAL AGE OF
                    MAJORITY UNDER APPLICABLE LAW TO FORM A BINDING CONTRACT
                    WITH US; AND,
                  </li>

                  <li>
                    <span>
                      {" "}
                      <FaRegHandPointRight />
                    </span>
                    YOU AGREE IF YOU ACCESS THE OLIVIA APP/ WEBSITE FROM A
                    JURISDICTION WHERE IT IS NOT PERMITTED, YOU DO SO AT YOUR
                    OWN RISK.
                  </li>
                </ul>
              </div>
            </section>

            {/* Updates to terms of service */}
            <section>
              <h4>3. Updates to terms of service</h4>

              <div className="txt">
                <p>
                  We may revise and update these Terms of Service from time to
                  time at our sole discretion to fit internal regulations and
                  the laws of Nigeria. All changes are effective immediately
                  when we post them and apply to all access to and use of the
                  Olivia App/ Website thereafter.
                </p>

                <p>
                  Continuing to use the Olivia App/ Website following the
                  posting of revised Terms of Service means that you accept and
                  agree to the changes. You are expected to check this page each
                  time you access this Olivia App/ Website so you are aware of
                  any changes, as they are binding on you.
                </p>
              </div>
            </section>

            {/*Your responsibilites  */}
            <section>
              <h4>4. Your responsibilites</h4>

              <div className="txt">
                <p>
                  You are required to ensure that all persons who access the
                  Olivia App/ Website are aware of this Agreement and comply
                  with it. It is a condition of your use of the Olivia App/
                  Website that all the information you provide are correct,
                  current, accurate and complete.
                </p>
                <p>
                  YOU ARE SOLELY AND ENTIRELY RESPONSIBLE FOR YOUR USE OF THE
                  WEBSITE AND YOUR COMPUTER, INTERNET AND DATA SECURITY.
                </p>
              </div>
            </section>

            {/* prohibited activities */}
            <section>
              <h4>5. prohibited activities</h4>

              <div className="txt">
                <p>
                  You may use the Olivia App/ Website only for lawful purposes
                  and in accordance with these Terms of Service. You agree not
                  to use the Olivia App/ Website:
                </p>

                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    In any way that violates any applicable federal, state,
                    local or international law or regulation (including, without
                    limitation, any laws regarding the exports of data software
                    to and from Nigeria or other countries).
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    For the purpose of exploiting, harming, or attempting to
                    exploit or harm minors in any way by exposing them to
                    inappropriate content, asking for personally identifiable
                    information or otherwise.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    To send, knowingly receive, upload, download, use, or re-use
                    any material that does not comply with the Submission
                    Standards set out in these Terms of Service.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    To transmit, or procure the sending of, any advertising or
                    promotional material, including any "junk mail," "chain
                    letter," "spam," or any other similar solicitation.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    To impersonate or attempt to impersonate the Company, a
                    Company employee, another user, or any other persona or
                    entity (including, without limitation, by using email
                    addresses associated with any of the foregoing).
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    To engage in any other conduct that restricts or inhibits
                    anyone's use or enjoyment of the website, or which as
                    determined by us, may harm the Company or users of the
                    website, or expose them to liability.
                  </li>
                </ul>

                <p>Additionally, you agree not to:</p>

                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Use the Olivia App/ Website in any manner that could
                    disable, overburden, damage, or impair the site or interfere
                    with any other party's use of the Olivia App/ Website,
                    including their ability to engage in real-time activities
                    through the Website.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Use any robot, spider, or other automatic device, process,
                    or means to access the Olivia App/ Website for any purpose,
                    including monitoring or copying any of the material of the
                    Company.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Use any manual process to monitor or copy any of the
                    material on the Olivia App/ Website, or for any other
                    purpose not expressly authorized in these Terms of Service,
                    without our prior written consent.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Use any device, software, or routine that interferes with
                    the proper working of the Olivia App/ Website.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt any parts of the Website, the server on
                    which the Olivia App/ Website is stored, or any server,
                    computer, or database connected to the Website.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Attack the Olivia App/ Website via a denial-of-service
                    attack or a distributed denial-of-service attack.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Otherwise attempting to interfere with the proper working of
                    the Olivia App/ Website.
                  </li>
                </ul>
              </div>
            </section>

            {/* Intellectual property rights */}
            <section>
              <h4>6. Intellectual property rights</h4>

              <div className="txt">
                <p>
                  The Olivia App/ Website and its entire contents, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video, and audio, and the
                  design, selection, and arrangement thereof) are owned by the
                  Company, its licensors, or other providers of such material
                  and are protected by the laws of Nigeria and international
                  copyright, trademark, patent, trade secret, and other
                  intellectual property or proprietary rights laws.
                </p>

                <p>
                  These Terms of Service permit you to use the Olivia App/
                  Website for your personal, non-commercial use only. You must
                  not reproduce, distribute, modify, create derivative works of,
                  publicly display, publicly perform, republish, download,
                  store, or transmit any of the material on our App/ Website,
                  except as follows:
                </p>

                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Your computer may temporarily store copies of such material
                    in RAM incidental to your accessing and viewing those
                    materials.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    You may store files that are automatically cached by your
                    Web browser for display enhancement purposes.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    You may print or download one copy of a reasonable number of
                    pages of the App/Website for your own personal,
                    non-commercial use and not for further reproduction,
                    publication or distribution.
                  </li>
                </ul>

                <p>You must not:</p>

                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Modify copies of any materials from this site.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Delete or alter any of the copyright, trademark, or other
                    proprietary rights notices from copies of materials from
                    this site.
                  </li>
                </ul>

                <p>
                  You must not access or use for any commercial purposes any
                  part of the app or website or any services or materials
                  available through the Website.
                </p>

                <p>
                  If you print, copy, modify, download, or otherwise use or
                  provide any other person with access to any part of the Olivia
                  App/ Website in breach of the Terms of Service, your right to
                  use the App and Website will stop immediately and you must, at
                  our option, return or destroy any copies of the materials you
                  have made. No right, title, or interest in or to the Olivia
                  App/ Website or any of its content is transferred to you, and
                  all rights not expressly granted are reserved by the Company.
                  Any use of the Olivia App/ Website not expressly permitted by
                  these Terms of Service is a breach of these Terms of Service
                  and may violate copyright, trademark, and other laws.
                </p>
              </div>
            </section>

            {/* Our rights */}
            <section>
              <h4>7. Our rights</h4>
              <div className="txt">
                <p>We have the right, without provision of notice to:</p>

                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Take appropriate legal action, including, without
                    limitation, referral to or cooperation with law enforcement
                    or regulatory authorities, or notifying the harmed party of
                    any illegal or unauthorized use of the Olivia App/ Website;
                    and
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Terminate or suspend your access to all or part of the
                    Olivia App/ Website for any or no reason, including, without
                    limitation, any violation of these Terms of Service.
                  </li>
                </ul>

                <p>
                  YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS PARENT,
                  SUBSIDIARIES, AFFILIATES, AND THEIR RESPECTIVE DIRECTORS,
                  OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS,
                  LICENSORS, LICENSEES, SUPPLIERS, AND SUCCESSORS FROM ANY AND
                  ALL CLAIMS RESULTING FROM ANY ACTION TAKEN BY THE COMPANY AND
                  ANY OF THE FOREGOING PARTIES RELATING TO ANY, INVESTIGATIONS
                  BY EITHER THE COMPANY OR BY LAW ENFORCEMENT AUTHORITIES.
                </p>
              </div>
            </section>

            {/* Third-Party links and content  */}
            <section>
              <h4>8. Third-Party links and content</h4>

              <div className="txt">
                <p>
                  For your convenience, this Olivia App/ Website may provide
                  links or pointers to third-party sites or third-party content.
                  We make no representations about any other app or websites or
                  third-party content that may be accessed from our app or
                  website. If you choose to access any such sites, you do so at
                  your own risk. We have no control over the third-party content
                  or any such third-party sites and accept no responsibility for
                  such sites or for any loss or damage that may arise from your
                  use of them. You are subject to any terms and conditions of
                  such third-party sites.
                </p>
              </div>
            </section>

            {/* online orders */}
            <section>
              <h4>9. online orders</h4>
              <div className="txt">
                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>{" "}
                    All orders, purchases or transactions for the sales of
                    goods, digital products, or information made using the
                    Olivia App/ Website are subject to the following additional
                    terms and conditions of sale:
                  </li>

                  {/* inside start */}
                  <ul>
                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      You may not order or obtain goods, digital products or
                      information from this App or Website if you: <br />
                      (i) are prohibited from accessing or using it or any of
                      its contents, goods, digital products or information by
                      applicable law or <br />
                      (ii) you are outside the geographic region where the
                      goods, digital products or information are available for
                      purchase;
                    </li>

                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      You agree that your order is an offer to buy, under these
                      Terms of Service, all goods, digital products, or
                      information listed in your order. All orders must be
                      accepted by us or we will not be obligated to sell such
                      goods, digital products or information to you. We may
                      choose not to accept orders at our sole discretion, even
                      after we send you a confirmation email with your order
                      number and details of the items you have ordered; and
                    </li>

                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      All prices, discounts, and promotions posted on this App
                      or Website are subject to change without notice. The price
                      and currency charged for a goods, digital products or
                      information will be the price and currency advertised on
                      this App or Website at the time the order is placed,
                      subject to the terms of any promotions or discounts that
                      may be applicable. The price and currency charged will be
                      clearly stated in the shopping cart before you confirm
                      your purchase. Price increases will only apply to orders
                      placed after the time of the increase. Posted prices do
                      not include taxes or charges for shipping and handling.
                      All such taxes and charges will be added to your total
                      pricing and will be itemized in your shopping cart and in
                      your order confirmation email. We strive to display
                      accurate price information; however, we may, on occasion,
                      make inadvertent typographical errors, inaccuracies, or
                      omissions related to pricing and availability. We reserve
                      the right to correct any errors, inaccuracies, or
                      omissions at any time and to cancel any orders arising
                      from such occurrences.
                    </li>
                  </ul>
                  {/* inside ends */}

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>{" "}
                    Where an order indicates a license is being purchased:
                  </li>

                  {/* inside start */}
                  <ul>
                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>{" "}
                      All uses on this App or Website of the terms "sell",
                      "sale", "resell", "resale", "purchase", "price", and the
                      like mean the purchase or sale of a license;
                    </li>

                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      Each good, digital product or information marketed as such
                      on this App or Website is made available solely for
                      license, not sale, to you and other prospective customers
                      under the terms, conditions, and restrictions of the
                      license Terms of Service posted with or made available to
                      you at /license;
                    </li>

                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      You will comply with all terms and conditions of the
                      applicable license Terms of Service for any goods, digital
                      products or information you obtain through this Website,
                      and you will not cause, induce, or permit others'
                      non-compliance with the terms and conditions of any of
                      license Terms of Services for the goods, digital products
                      or information; and
                    </li>

                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      Except for the limited license granted under the relevant
                      license Terms of Service, nothing in these Terms of
                      Service grants any right, title, or interest in or to
                      (including any license under) any intellectual property
                      rights in or relating to, the good, digital product or
                      information, whether expressly, by implication, estoppel,
                      or otherwise. All right, title, and interest in and to the
                      good, digital product or information are and will remain
                      with Company or its licensors, as applicable.
                    </li>
                  </ul>
                  {/* inside ends */}

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Shipments and Delivery
                  </li>

                  {/* inside start */}
                  <ul>
                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      We will arrange for shipment of the goods to you should
                      you pick the option or where the option is available.
                      Please check the individual product page for specific
                      delivery options. You will pay all shipping and handling
                      charges unless otherwise specified in the order
                      confirmation.
                    </li>

                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      Title and risk of loss pass to you upon our transfer of
                      the products to the carrier/delivery. Shipping and
                      delivery dates are estimates only and cannot be
                      guaranteed. We are not liable for any delays in shipments.
                    </li>
                  </ul>
                  {/* inside ends */}
                </ul>
              </div>
            </section>

            {/* Payment and Fees */}
            <section>
              <h4>10. Payment and Fees</h4>
              <div className="txt">
                <p>
                  You may be required to purchase or pay a fee to access our
                  services. We accept all bank cards e.g Mastercard, Visa,
                  Verve, Afrigo, etc, for all purchases. However, Company does
                  not guarantee the availability of any payment method at any
                  moment and Company may add, remove or suspend any payment
                  method temporarily or permanently at Company's sole
                  discretion. You agree to provide current, complete, and
                  accurate purchase and account information for all purchases
                  made via the Olivia App/ Website and to promptly update
                  account and payment information, including email address,
                  payment method, and payment card expiration date, in order to
                  complete your purchases and contact you as needed. Sales tax
                  will be added to the price of purchases as deemed required by
                  us. We may change prices at any time. All payments shall be in
                  NAIRA.
                </p>

                <p>
                  You agree to pay all charges or fees at the prices then in
                  effect for your purchases, and you authorize us to charge your
                  chosen payment provider for any such amounts upon making your
                  purchase.
                </p>

                <p>
                  We reserve the right to correct any errors or mistakes in
                  pricing, even if we have already requested or received
                  payment. We also reserve the right to refuse any order placed
                  through the Website.
                </p>
              </div>
            </section>

            {/*Return and Refund  */}
            <section>
              <h4>11. Return and Refund</h4>

              <div className="txt">
                <p>
                  If you are not completely satisfied with your purchase, we
                  reserve the right for a full refund, store credit or an
                  exchange, as this will be treated on a case-by-case situation.
                  All returned items must be in and unused condition, with all
                  original tags and labels attached. All returns must be
                  postmarked within 5 day(s) of confirmation of delivery. A
                  restocking fee will be charged for all returns.
                </p>

                <p>
                  To process your return, send an email to the email address
                  below with your proof of purchase and the return form stating
                  the reason for the return and wait for further instruction:{" "}
                  <a href="/">Customer.support@gbikna.com</a>
                </p>

                <p>
                  After receiving your return request and reviewing the return
                  reason, we will process your return where necessary and
                  request for the item to be sent to us. Please allow at least
                  30 day(s) from the receipt of your item to process your
                  return. Upon completion of processing, we will deduct our
                  shipping costs from the refund amount. Refunds may take 1-2
                  billing cycles to appear on your credit card statement.
                </p>

                <p>
                  If you have any questions concerning our return policy, please
                  contact us at: <a href="/">Customer.support@gbikna.com</a>
                </p>
              </div>
            </section>

            {/* Disclaimers, Liability and Indemnification */}
            <section>
              <h4>12. Disclaimers, Liability and Indemnification</h4>

              <div className="txt">
                <p>
                  EXCEPT FOR THE LIMITED WARRANTIES, YOU UNDERSTAND AND AGREE
                  THAT YOUR USE OF THE OLIVIA APP/ WEBSITE, ITS CONTENT, AND ANY
                  GOODS, DIGITAL PRODUCTS, SERVICES, INFORMATION OR ITEMS FOUND
                  OR ATTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE
                  OLIVIA APP/ WEBSITE, ITS CONTENT, AND ANY GOODS, SERVICES,
                  DIGITAL PRODUCTS, INFORMATION OR ITEMS FOUND OR ATTAINED
                  THROUGH THE APP/ WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS
                  AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY
                  KIND, EITHER EXPRESS OR IMPLIED INCLUDING, BUT NOT LIMITED TO,
                  THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THE FOREGOING DOES
                  NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED
                  UNDER APPLICABLE LAW.
                </p>

                <p>
                  YOU ACKNOWLEDGE AND AGREE THAT THE COMPANY OR ITS RESPECTIVE
                  DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS,
                  CONTRACTORS, LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS
                  MAKE NO WARRANTY, REPRESENTATION, OR ENDORSEMENT WITH RESPECT
                  TO THE COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY,
                  ACCURACY, CURRENCY, OR AVAILABILITY OF THE WEBSITE OR ITS
                  CONTENTS OR THAT ANY GOODS, SERVICES, DIGITAL PRODUCTS,
                  INFORMATION OR ITEMS FOUND OR ATTAINED THROUGH THE WEBSITE
                  WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT
                  DEFECTS WILL BE CORRECTED, THAT OUR WEBSITE OR THE SERVER THAT
                  MAKES IT AVAILABLE OR CONTENT ARE FREE OF VIRUSES OR OTHER
                  HARMFUL COMPONENTS OR DESTRUCTIVE CODE.
                </p>

                <h5>How We Limit Our Liability to You</h5>

                <p>
                  EXCEPT WHERE SUCH EXCLUSIONS ARE PROHIBITED BY LAW, IN NO
                  EVENT SHALL THE COMPANY NOR ITS RESPECTIVE DIRECTORS,
                  OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS,
                  LICENSORS, LICENSEES, SUPPLIERS, OR SUCCESSORS BE LIABLE UNDER
                  THESE TERMS OF SERVICE TO YOU OR ANY THIRD-PARTY FOR ANY
                  CONSEQUENTIAL, INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL, OR
                  PUNITIVE DAMAGES WHATSOEVER, INCLUDING ANY DAMAGES FOR
                  BUSINESS INTERRUPTION, LOSS OF USE, DATA, REVENUE OR PROFIT,
                  COST OF CAPITAL, LOSS OF BUSINESS OPPORTUNITY, LOSS OF
                  GOODWILL, WHETHER ARISING OUT OF BREACH OF CONTRACT, TORT
                  (INCLUDING NEGLIGENCE), ANY OTHER THEORY OF LIABILITY, OR
                  OTHERWISE, REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE
                  AND WHETHER OR NOT THE COMPANY WAS ADVISED OF THE POSSIBILITY
                  OF SUCH DAMAGES.
                </p>

                <h5>Indemnification</h5>

                <p>
                  To the maximum extent permitted by applicable law, you agree
                  to defend, indemnify, and hold harmless Company, its parent,
                  subsidiaries, affiliates, and their respective directors,
                  officers, employees, agents, service providers, contractors,
                  licensors, suppliers, successors, and assigns from and against
                  any claims, liabilities, damages, judgments, awards, losses,
                  costs, expenses, or fees (including reasonable attorneys'
                  fees) arising out of or relating to your breach of these Terms
                  of Service or your use of the Olivia App/ Website including,
                  but not limited to, third-party sites and content, any use of
                  the App/Website's content and services other than as expressly
                  authorized in these Terms of Service or any use of any goods,
                  digital products and information purchased from this Website.
                </p>
              </div>
            </section>

            {/* Copyright Infringement */}
            <section>
              <h4>13. Copyright Infringement</h4>
              <div className="txt">
                <p>
                  We respect the intellectual property rights of others and
                  expect our users to do the same. In accordance with the
                  Nigerian Copyright Act 2023, we will respond expeditiously to
                  claims of copyright infringement committed using the Olivia
                  App/ Website if such claims are reported to Company’s
                  Designated Copyright Agent identified below.
                </p>

                <p>
                  If you are a copyright owner or authorized to act on behalf of
                  one, please report alleged copyright infringements taking
                  place on or through the App/Website. Upon receipt of Notice as
                  described below, we will take whatever action in our sole
                  discretion as we deem appropriate, including removal of the
                  challenged content from the App/Website. Please note that if
                  you fail to comply with all of the requirements as stipulated
                  in the necessary regulation your notice may not be valid.
                </p>

                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Identify the copyrighted work that you claim has been
                    infringed, or if multiple copyrighted works are covered by
                    your Notice, you may provide a representative list of the
                    copyrighted works that you claim have been infringed.
                  </li>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Identify the material or link you claim is infringing (or
                    the subject of infringing activity) and to which access is
                    to be disabled, including at a minimum, if applicable, the
                    URL of the link shown on the App/Website or the exact
                    location where such material may be found.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Provide your company affiliation (if applicable), mailing
                    address, telephone number, and, if available, email address.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Include both of the following statements in the body of the
                    Notice:
                  </li>

                  <ul>
                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      "I hereby state that I have a good faith belief that the
                      disputed use of the copyrighted material is not authorized
                      by the copyright owner, its agent, or the law (e.g., as a
                      fair use)."
                    </li>

                    <li>
                      <span>
                        <VscDebugBreakpointLogUnverified />
                      </span>
                      "I hereby state that the information in this Notice is
                      accurate and, under penalty of perjury, that I am the
                      owner, or authorized to act on behalf of, the owner, of
                      the copyright or of an exclusive right under the copyright
                      that is allegedly infringed."
                    </li>
                  </ul>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Provide your full legal name and your electronic or physical
                    signature.
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Deliver this Notice, with all items completed, to Company’s
                    Designated email address: <a href="/">info@gbikna.com</a>
                  </li>
                </ul>

                <p>
                  If you believe that your content that was removed (or to which
                  access was disabled) is not infringing, or that you have
                  authorization from the copyright holder, the holder's agent,
                  or pursuant to law, to post and use the material in your
                  content, you may send a counter-notice containing the
                  following information:
                </p>

                <ul>
                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>{" "}
                    Your physical or electronic signature;
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>{" "}
                    Identification of the content that was removed or to which
                    access has been disabled as a result of mistake or a
                    misidentification of the content; and
                  </li>

                  <li>
                    <span>
                      <VscDebugBreakpointLog />
                    </span>
                    Your name, address, telephone number, and email address, a
                    statement that you consent to the jurisdiction of the
                    federal court of Nigeria, and a statement that you will
                    accept service of process from the person who provided
                    notification of the alleged infringement.
                  </li>
                </ul>

                <p>
                  If a counter-notice is received by the Copyright Agent, we may
                  send a copy of the counter-notice to the original complaining
                  party informing that person that it may replace the removed
                  content or cease disabling it in ten business days. Unless the
                  copyright owner files an action seeking a court order against
                  Olivia Data Solutions Limited or the person who has posted
                  allegedly infringing content, the removed content may be
                  replaced, or access to it restored, in ten business days or
                  more after receipt of the Counter-Notice.
                </p>

                <p>
                  Olivia Data Solutions Limited, does not condone or tolerate
                  copyright infringement or any violation of the intellectual
                  property rights. The Company reserves the right to terminate
                  the access and/or use privileges of any person who has been
                  determined to be a 'repeat infringer' of the copyrights of the
                  company or others. We reserve the right to define the criteria
                  by which a person is reserved as a 'repeat infringer.' In the
                  event that 'repeat infringer' is defined by statute, law, or
                  regulation, we will adopt that definition as a minimum
                  standard. Without limiting the Company’s right to define
                  'repeat infringer,' as a general rule, we will define a
                  'repeat infringer' as any person or entity about whom the
                  Company has received two or more notices of Alleged
                  Infringement. The Company will take into account all relevant
                  facts and circumstances when determining whether or not
                  termination of access and/or use privileges of a 'repeat
                  infringer' is appropriate
                </p>

                <p>
                  REGARDLESS OF WHETHER THE COMPANY TERMINATES ACCESS AND/OR USE
                  PRIVILEGES OF ANY PERSON OR ENTITY, 'REPEAT INFRINGER' OR
                  OTHERWISE, THE COMPANY IN NO WAY WAIVES ANY RIGHT TO PURSUE
                  ANY AVAILABLE REMEDY AT LAW OR IN EQUITY AGAINST COPYRIGHT
                  INFRINGERS OR ANY OTHER INTELLECTUAL PROPERTY RIGHTS
                  VIOLATORS, NOR WILL WE INDEMNIFY OR PROVIDE LEGAL
                  REPRESENTATION TO ANY ALLEGED INFRINGER IN ANY ACTION ARISING
                  FROM THE ALLEGED INFRINGER’S USE OF ANY THE COMPANY’S WEBSITE
                  OR SERVICE, EXCEPT AS EXPRESSLY DESCRIBED IN THIS NOTICE.
                </p>
              </div>
            </section>

            {/*Privacy Policy */}
            <section>
              <h4>14. Privacy Policy</h4>

              <div className="txt">
                <p>
                  Your provision of personal information through the Website is
                  governed by our privacy policy located at /privacy-policy (the
                  "Privacy Policy").
                </p>
              </div>
            </section>

            {/* Governing Law*/}
            <section>
              <h4>15. Governing Law</h4>

              <div className="txt">
                <p>
                  The Olivia App/ Website and these Terms of Service will be
                  governed by and construed in accordance with the laws of the
                  Federal Republic of Nigeria and any applicable other laws
                  applicable therein, without giving effect to any choice or
                  conflict of law provision, principle, or rule and
                  notwithstanding your domicile, residence, or physical
                  location. Any action or proceeding arising out of or relating
                  to this App or Website and/or under these Terms of Service
                  will be instituted in the courts of Nigeria, and each party
                  irrevocably submits to the exclusive jurisdiction of such
                  courts in any such action or proceeding. You waive any and all
                  objections to the exercise of jurisdiction over you by such
                  courts and to the venue of such courts.
                </p>
              </div>
            </section>

            {/*Severability  */}
            <section>
              <h4>16. Severability</h4>

              <div className="txt">
                <p>
                  If any provision of these Terms of Service is illegal or
                  unenforceable under applicable law, the remainder of the
                  provision will be amended to achieve as closely as possible
                  the effect of the original term and all other provisions of
                  these Terms of Service will continue in full force and effect.
                </p>
              </div>
            </section>

            {/* Entire Terms of Service */}
            <section>
              <h4>17. Entire Terms of Service</h4>

              <div className="txt">
                <p>
                  These Terms of Service constitute the entire and only Terms of
                  Service between the parties in relation to its subject matter
                  and replaces and extinguishes all prior or simultaneous Terms
                  of Services, undertakings, arrangements, understandings or
                  statements of any nature made by the parties or any of them
                  whether oral or written (and, if written, whether or not in
                  draft form) with respect to such subject matter. Each of the
                  parties acknowledges that they are not relying on any
                  statements, warranties or representations given or made by any
                  of them in relation to the subject matter of these Terms of
                  Service, save those expressly set out in these Terms of
                  Service, and that they shall have no rights or remedies with
                  respect to such subject matter otherwise than under these
                  Terms of Service save to the extent that they arise out of the
                  fraud or fraudulent misrepresentation of another party. No
                  variation of these Terms of Service shall be effective unless
                  it is in writing and signed by or on behalf of Company.
                </p>
              </div>
            </section>

            {/* Waiver  */}
            <section>
              <h4>18. Waiver</h4>
              <div className="txt">
                <p>
                  No failure to exercise, and no delay in exercising, on the
                  part of either party, any right or any power hereunder shall
                  operate as a waiver thereof, nor shall any single or partial
                  exercise of any right or power hereunder preclude further
                  exercise of that or any other right hereunder.
                </p>
              </div>
            </section>

            {/*  Notice*/}
            <section>
              <h4>19. Notice</h4>

              <div className="txt">
                <p>
                  We may provide any notice to you under these Terms of Service
                  by:
                  <br />
                  (i) sending a message to the email address you provide to us
                  and consent to us using; or <br />
                  (ii) by posting to the Olivia App/ Website. Notices sent by
                  email will be effective when we send the email and notices we
                  provide by posting will be effective upon posting. It is your
                  responsibility to keep your email address current.
                </p>

                <p>
                  To give us notice under these Terms of Service, you must
                  contact us as follows: <br />
                  (i) by personal delivery, overnight courier or registered or
                  certified mail to Olivia Data Solutions Limited at 85-85
                  Terrace Wing, Tafawa Balewa Square, Onikan, Lagos Island,
                  Lagos. We may update the address for notices to us by posting
                  a notice on this Website. Notices provided by personal
                  delivery will be effective immediately once personally
                  received by an authorized representative of Company.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="overlay" onClick={() => setShowTerms(false)}></div>
    </>
  );
};
