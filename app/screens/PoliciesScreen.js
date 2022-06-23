import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';


import AppBackground from '../components/AppBackground';
import BackButton from '../components/BackButton';

export default function PoliciesScreen({ navigation }) {

    return (
        <>
            <AppBackground>
                <BackButton navigation={navigation}/>
                <ScrollView>
                    <Text style={styles.text}>

PRIVACY NOTICE
{"\n"}


{"\n"}Thank you for choosing to be part of our community at Vamplitude ("Company," "we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at david@vamplitude.com.
{"\n"}
{"\n"}This privacy notice describes how we might use your information if you:
{"\n"}Visit our website at https://vududisctodigital.com
{"\n"}Download and use our mobile application — Vudu Disc To Digital
{"\n"}Engage with us in other related ways ― including any sales, marketing, or events
{"\n"}In this privacy notice, if we refer to:
{"\n"}"Website," we are referring to any website of ours that references or links to this policy
{"\n"}"App," we are referring to any application of ours that references or links to this policy, including any listed above
{"\n"}"Services," we are referring to our Website, App, and other related services, including any sales, marketing, or events
{"\n"}The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
{"\n"}
{"\n"}Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
{"\n"}
{"\n"}TABLE OF CONTENTS
{"\n"}
{"\n"}1. WHAT INFORMATION DO WE COLLECT?
{"\n"}2. HOW DO WE USE YOUR INFORMATION?
{"\n"}3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
{"\n"}4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
{"\n"}5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
{"\n"}6. HOW LONG DO WE KEEP YOUR INFORMATION?
{"\n"}7. HOW DO WE KEEP YOUR INFORMATION SAFE?
{"\n"}8. WHAT ARE YOUR PRIVACY RIGHTS?
{"\n"}9. CONTROLS FOR DO-NOT-TRACK FEATURES
{"\n"}10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
{"\n"}11. DO WE MAKE UPDATES TO THIS NOTICE?
{"\n"}12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
{"\n"}13. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?
{"\n"}
{"\n"}1. WHAT INFORMATION DO WE COLLECT?
{"\n"}
{"\n"}Personal information you disclose to us
{"\n"}
{"\n"}In Short:  We collect personal information that you provide to us.
{"\n"}
{"\n"}We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.
{"\n"}
{"\n"}The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following:
{"\n"}
{"\n"}Personal Information Provided by You. We collect names; usernames; passwords; email addresses; and other similar information.
{"\n"}
{"\n"}Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Google and Apple . You may find their privacy notice link(s) here: https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en-GB and https://www.apple.com/legal/privacy/data/en/apple-pay/.
{"\n"}
{"\n"}Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
{"\n"}
{"\n"}All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
{"\n"}
{"\n"}Information collected through our App
{"\n"}
{"\n"}In Short:  We collect information regarding your push notifications, when you use our App.
{"\n"}
{"\n"}If you use our App, we also collect the following information:
{"\n"}Push Notifications. We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.
{"\n"}This information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.
{"\n"}
{"\n"}2. HOW DO WE USE YOUR INFORMATION?
{"\n"}
{"\n"}In Short:  We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
{"\n"}
{"\n"}We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
{"\n"}
{"\n"}We use the information we collect or receive:
{"\n"}To facilitate account creation and logon process. If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" for further information.
{"\n"}To post testimonials. We post testimonials on our Services that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at admin@vamplitude.com and be sure to include your name, testimonial location, and contact information.
{"\n"}Request feedback. We may use your information to request feedback and to contact you about your use of our Services.
{"\n"}To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user's consent.
{"\n"}To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.
{"\n"}
{"\n"}Fulfill and manage your orders. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
{"\n"}
{"\n"}Administer prize draws and competitions. We may use your information to administer prize draws and competitions when you elect to participate in our competitions.
{"\n"}
{"\n"}To deliver and facilitate delivery of services to the user. We may use your information to provide you with the requested service.
{"\n"}
{"\n"}To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.
{"\n"}For other business purposes. We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information.
{"\n"}
{"\n"}3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
{"\n"}
{"\n"}In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
{"\n"}
{"\n"}We may process or share your data that we hold based on the following legal basis:
{"\n"}Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.
{"\n"}Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.
{"\n"}Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
{"\n"}Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
{"\n"}Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
{"\n"}More specifically, we may need to process your data or share your personal information in the following situations:
{"\n"}Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
{"\n"}
{"\n"}4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
{"\n"}
{"\n"}In Short:  We may use cookies and other tracking technologies to collect and store your information.
{"\n"}
{"\n"}We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
{"\n"}
{"\n"}5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?     
{"\n"}
{"\n"}In Short:  If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
{"\n"}
{"\n"}Our Services offers you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform.
{"\n"}
{"\n"}We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.
{"\n"}
{"\n"}6. HOW LONG DO WE KEEP YOUR INFORMATION?
{"\n"}
{"\n"}In Short:  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
{"\n"}
{"\n"}We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
{"\n"}
{"\n"}When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
{"\n"}
{"\n"}7. HOW DO WE KEEP YOUR INFORMATION SAFE?
{"\n"}
{"\n"}In Short:  We aim to protect your personal information through a system of organizational and technical security measures.
{"\n"}
{"\n"}We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
{"\n"}
{"\n"}8. WHAT ARE YOUR PRIVACY RIGHTS?
{"\n"}
{"\n"}In Short:  You may review, change, or terminate your account at any time.
{"\n"} 
{"\n"}If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
{"\n"}
{"\n"}If you are a resident in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
{"\n"}
{"\n"}If you have questions or comments about your privacy rights, you may email us at admin@vamplitude.com.
{"\n"}
{"\n"}Account Information
{"\n"}
{"\n"}If you would at any time like to review or change the information in your account or terminate your account, you can:
{"\n"}Log in to your account settings and update your user account.
{"\n"}Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
{"\n"}
{"\n"}Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.
{"\n"}
{"\n"}Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
{"\n"}Access your account settings and update your preferences.
{"\n"}
{"\n"}9. CONTROLS FOR DO-NOT-TRACK FEATURES
{"\n"}
{"\n"}Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. 
{"\n"}
{"\n"}10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
{"\n"}
{"\n"}In Short:  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
{"\n"}
{"\n"}California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
{"\n"}
{"\n"}If you are under 18 years of age, reside in California, and have a registered account with a Service, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
{"\n"}
{"\n"}CCPA Privacy Notice
{"\n"}
{"\n"}The California Code of Regulations defines a "resident" as:
{"\n"}
{"\n"}(1) every individual who is in the State of California for other than a temporary or transitory purpose and
{"\n"}(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
{"\n"}
{"\n"}All other individuals are defined as "non-residents."
{"\n"}
{"\n"}If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
{"\n"}
{"\n"}What categories of personal information do we collect?
{"\n"}
{"\n"}We have collected the following categories of personal information in the past twelve (12) months:
{"\n"}
{"\n"}Category	Examples	Collected
{"\n"}A. Identifiers
{"\n"}Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}B. Personal information categories listed in the California Customer Records statute
{"\n"}Name, contact information, education, employment, employment history and financial information
{"\n"}
{"\n"}YES
{"\n"}
{"\n"}C. Protected classification characteristics under California or federal law
{"\n"}Gender and date of birth
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}D. Commercial information
{"\n"}Transaction information, purchase history, financial details and payment information
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}E. Biometric information
{"\n"}Fingerprints and voiceprints
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}F. Internet or other similar network activity
{"\n"}Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}G. Geolocation data
{"\n"}Device location
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}H. Audio, electronic, visual, thermal, olfactory, or similar information
{"\n"}Images and audio, video or call recordings created in connection with our business activities
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}I. Professional or employment-related information
{"\n"}Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}J. Education Information
{"\n"}Student records and directory information
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}K. Inferences drawn from other personal information
{"\n"}Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics
{"\n"}
{"\n"}NO
{"\n"}
{"\n"}
{"\n"}We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
{"\n"}Receiving help through our customer support channels;
{"\n"}Participation in customer surveys or contests; and
{"\n"}Facilitation in the delivery of our Services and to respond to your inquiries.
{"\n"}How do we use and share your personal information?
{"\n"}
{"\n"}More information about our data collection and sharing practices can be found in this privacy notice.
{"\n"}
{"\n"}You may contact us by visiting https://vududisctodigital.com/contact, or by referring to the contact details at the bottom of this document.
{"\n"}
{"\n"}If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
{"\n"}
{"\n"}Will your information be shared with anyone else?
{"\n"}
{"\n"}We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
{"\n"}
{"\n"}We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal data.
{"\n"}
{"\n"}Vamplitude has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. Vamplitude will not sell personal information in the future belonging to website visitors, users and other consumers.
{"\n"}
{"\n"}Your rights with respect to your personal data
{"\n"}
{"\n"}Right to request deletion of the data - Request to delete
{"\n"}
{"\n"}You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.
{"\n"}
{"\n"}Right to be informed - Request to know
{"\n"}
{"\n"}Depending on the circumstances, you have a right to know:
{"\n"}whether we collect and use your personal information;
{"\n"}the categories of personal information that we collect;
{"\n"}the purposes for which the collected personal information is used;
{"\n"}whether we sell your personal information to third parties;
{"\n"}the categories of personal information that we sold or disclosed for a business purpose;
{"\n"}the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
{"\n"}the business or commercial purpose for collecting or selling personal information.
{"\n"}In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
{"\n"}
{"\n"}Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
{"\n"}
{"\n"}We will not discriminate against you if you exercise your privacy rights.
{"\n"}
{"\n"}Verification process
{"\n"}
{"\n"}Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
{"\n"}
{"\n"}We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
{"\n"}
{"\n"}Other privacy rights
{"\n"}you may object to the processing of your personal data.
{"\n"}you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data.
{"\n"}you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
{"\n"}you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.
{"\n"}To exercise these rights, you can contact us by visiting https://vududisctodigital.com/contact, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.  
{"\n"}
{"\n"}11. DO WE MAKE UPDATES TO THIS NOTICE?     
{"\n"}
{"\n"}In Short:  Yes, we will update this notice as necessary to stay compliant with relevant laws.
{"\n"}
{"\n"}We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
{"\n"}
{"\n"}12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?     
{"\n"}
{"\n"}If you have questions or comments about this notice, you may email us at admin@vamplitude.com or by post to:
{"\n"}
{"\n"}Vamplitude
{"\n"}2411 41st Ave E
{"\n"}Seattle, WA 98112
{"\n"}United States
{"\n"}
{"\n"}13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?     
{"\n"}
{"\n"}Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking here.
{"\n"}
{"\n"}Disc To Digital offers a platform for keeping all of your movie barcodes together in a nice, orderly fashion. Disc to Digital is not affiliated with Vudu in any way. The skus to the barcodes provided as well as the vudu database are publicly available.
{"\n"}                </Text>
                </ScrollView>
            </AppBackground>
        </>
    );
}

const styles = StyleSheet.create({
    header:{

    },
    text:{
        color:'#fff'
    },
})