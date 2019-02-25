import React from 'react';
import withWeb3 from './utils/withWeb3';
import { Container, Header, Segment } from 'semantic-ui-react';
import Layout from './Layout';

import './Privacy.css';

export default withWeb3(false)(props => {
  const { web3 } = props;

  return (
    <Layout web3={web3}>
      <div className="Privacy">
        <Container text>
          <Segment>
            <p>Last updated February 25th, 2019</p>
            <Header as="h2">INTRODUCTION</Header>
            <p>Endless (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://endlessico.com including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
            <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>
            <p>You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.</p>
            <Header as="h2">COLLECTION OF YOUR INFORMATION</Header>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <Header as="h3">Personal Data</Header>
            <p>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you choose to participate in various activities related to the Site, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.</p>
            <Header as="h3">Derivative Data</Header>
            <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
            <Header as="h3">Financial Data</Header>
            <p>Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</p>
            <Header as="h3">Mobile Device Data</Header>
            <p>Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.</p>
            <Header as="h3">Third-Party Data</Header>
            <p>Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Site permission to access this information.</p>
            <Header as="h2">USE OF YOUR INFORMATION</Header>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <p>Administer sweepstakes, promotions, and contests.</p>
            <p>Assist law enforcement and respond to subpoena.</p>
            <p>Compile anonymous statistical data and analysis for use internally or with third parties.</p>
            <p>Create and manage your account.</p>
            <p>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</p>
            <p>Email you regarding your account or order.</p>
            <p>Enable user-to-user communications.</p>
            <p>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</p>
            <p>Generate a personal profile about you to make future visits to the Site more personalized.</p>
            <p>Increase the efficiency and operation of the Site.</p>
            <p>Monitor and analyze usage and trends to improve your experience with the Site.</p>
            <p>Notify you of updates to the Site.</p>
            <p>Offer new products, services, and/or recommendations to you.</p>
            <p>Perform other business activities as needed.</p>
            <p>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</p>
            <p>Process payments and refunds.</p>
            <p>Request feedback and contact you about your use of the Site.</p>
            <p>Resolve disputes and troubleshoot problems.</p>
            <p>Respond to product and customer service requests.</p>
            <p>Send you a newsletter.</p>
            <p>Solicit support for the Site.</p>
            <Header as="h2">DISCLOSURE OF YOUR INFORMATION</Header>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <Header as="h3">By Law or to Protect Rights</Header>
            <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.</p>
            <Header as="h3">Third-Party Service Providers</Header>
            <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
            <Header as="h3">Marketing Communications</Header>
            <p>With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</p>
            <Header as="h3">Interactions with Other Users</Header>
            <p>If you interact with other users of the Site, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.</p>
            <Header as="h3">Online Postings</Header>
            <p>When you post comments, contributions or other content to the Site, your posts may be viewed by all users and may be publicly distributed outside the Site in perpetuity.</p>
            <Header as="h3">Affiliates</Header>
            <p>We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</p>
            <Header as="h3">Business Partners</Header>
            <p>We may share your information with our business partners to offer you certain products, services or promotions.</p>
            <Header as="h3">Other Third Parties</Header>
            <p>We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.</p>
            <Header as="h3">Sale or Bankruptcy</Header>
            <p>If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity. If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy Policy.</p>
            <p>We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations. If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly.</p>
            <Header as="h2">TRACKING TECHNOLOGIES</Header>
            <Header as="h3">Cookies and Web Beacons</Header>
            <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site  to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.</p>
            <Header as="h3">Internet-Based Advertising</Header>
            <p>Additionally, we may use third-party software to serve ads on the Site, implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us. For more information about opting-out of interest-based ads, visit the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.</p>
            <Header as="h3">Website Analytics</Header>
            <p>We may also partner with selected third-party vendors, such as Google Analytics, to allow tracking technologies and remarketing services on the Site through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Site, determine the popularity of certain content and better understand online activity. By accessing the Site, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.</p>
            <p>You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser’s cookies files may also clear certain opt-out cookies, plug-ins, or settings.</p>
            <Header as="h2">THIRD-PARTY WEBSITES</Header>
            <p>The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Site.</p>
            <Header as="h2">SECURITY OF YOUR INFORMATION</Header>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.</p>
            <Header as="h2">POLICY FOR CHILDREN</Header>
            <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>
            <Header as="h2">CONTROLS FOR DO-NOT-TRACK FEATURES</Header>
            <p>Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy. Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. If you set the DNT signal on your browser, we will respond to such DNT browser signals.</p>
            <Header as="h2">OPTIONS REGARDING YOUR INFORMATION</Header>
            <Header as="h3">Emails and Communications</Header>
            <p>If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:</p>
            <p>Noting your preferences at the time you register your account with the Site.</p>
            <p>Logging into your account settings and updating your preferences.</p>
            <p>Contacting us using the contact information provided below.</p>
            <p>If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly.</p>
            <Header as="h2">CALIFORNIA PRIVACY RIGHTS</Header>
            <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
            <p>If you are under 18 years of age, reside in California, and have a registered account with the Site, you have the right to request removal of unwanted data that you publicly post on the Site. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Site, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
            <Header as="h2">CONTACT US</Header>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>
              Will Shahda<br />
              223 Bedford Ave #71<br />
              Brooklyn, NY 11211<br />
              (347) 395-4679<br />
              will.shahda@gmail.com
            </p>
          </Segment>
        </Container>
      </div>
    </Layout>
  );
});
