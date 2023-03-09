<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import IconTickOnly from '$components/icons/IconTickOnly.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import LL from '$i18n/i18n-svelte';
	import { canonicalUrl } from '$ts/constants/main';
	import type Stripe from 'stripe';
	import { onMount } from 'svelte';
	import PageWrapper from '$components/PageWrapper.svelte';

	let checkoutCreationStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
	let isSignInModalOpen = false;

	interface ICheckoutSessionRes {
		data: {
			checkoutSession: Stripe.Response<Stripe.Checkout.Session>;
		};
		error: string;
	}

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<MetaTag
	title="Pro | VividGen"
	description="Privacy Policy of VividGen."
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.png"
	canonical="{canonicalUrl}{$page.url.pathname}"
/>

<PageWrapper>
	<div class="w-full flex flex-col items-center justify-start my-auto">
		<div
			class="mt-8 max-w-[42rem] w-[80%] xl:w-[50%] lg:w-[60%] md:w-[80%] bg-c-bg shadow-xl shadow-c-shadow/[var(--o-shadow-strong)] 
				p-4 md:p-6 rounded-2xl md:rounded-3xl ring-2 ring-c-primary"
		>
			<h2
				class="font-bold text-3xl text-c-primary md:-mt-2 flex justify-center items-center gap-2 text-center"
			>
				Privacy Policy
			</h2>

			<ul class="mt-6 flex flex-col gap-3 px-4 md:px-6">
				<p><strong>Privacy Policy</strong></p>
				<p>Last Updated: August 08, 2022</p>
				<p><strong>Developed by <strong><a href="https://abhinavbhattarai.vercel.app" class="cursor-pointer underline">Abhinav Bhattarai</a></strong></strong></p>
				<p>
					This privacy notice for VividGen ("Company," "we," "us," or "our") describes how and why
					we might collect, store, use, and/or share ("process") your information when you use our
					services ("Services"), such as when you:
				</p>
				<p>
					Visit our website at vividgen.com or any website of ours that links to this privacy notice
				</p>
				<p>Engage with us in other related ways ― including any sales, marketing, or events</p>
				<p>
					Questions or concerns? Reading this privacy notice will help you understand your privacy
					rights and choices. If you disagree with our policies and practices, please do not use our
					Services. If you still have questions or concerns, please contact us at <a
						href="mailto:info@vividgen.com"
						target="_blank"
						rel="noopener">info@vividgen.com</a
					>.
				</p>
				<p><strong>SUMMARY OF KEY POINTS</strong></p>
				<p>
					This summary provides key points from our privacy notice, but you can find out more
					details about any of these topics by clicking the link following each key point or by
					using our table of contents below to find the section you are looking for.
				</p>
				<p>What personal information do we process?</p>
				<p>
					When you visit, use, or navigate our Services, we may process personal information
					depending on how you interact with VividGen and the Services, your choices, and the
					products and features you use.
				</p>
				<p>Do we process any sensitive personal information?</p>
				<p>We do not process sensitive personal information.</p>
				<p>Do you receive any information from third parties?</p>
				<p>We do not receive any information from third parties.</p>
				<p>How do you process my information?</p>
				<p>
					We process your information to provide, improve, and administer our Services, communicate
					with you for security and fraud prevention, and comply with the law. We may also process
					your information for other purposes with your consent. We process your information only
					when we have a valid legal reason.
				</p>
				<p>In what situations and with which parties do we share personal information?</p>
				<p>We may share information in specific situations and with specific third parties.</p>
				<p>How do we keep your information safe?</p>
				<p>
					We have organizational and technical processes and procedures to protect your personal
					information. However, no electronic transmission over the internet or information storage
					technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that
					hackers, cybercriminals, or other unauthorized third parties will not be able to defeat
					our security and improperly collect, access, steal, or modify your information.
				</p>
				<p>What are your rights?</p>
				<p>
					Depending on where you are located geographically, the applicable privacy law may mean you
					have certain rights regarding your personal information.
				</p>
				<p>How do I exercise my rights?</p>
				<p>
					The easiest way to exercise your rights is to contact us. We will consider and act upon
					any request in accordance with applicable data protection laws.
				</p>
				<p><strong>TABLE OF CONTENTS</strong></p>
				<ol>
					<li><strong>WHAT INFORMATION DO WE COLLECT?</strong></li>
					<li><strong>HOW DO WE PROCESS YOUR INFORMATION?</strong></li>
					<li>
						<strong>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</strong>
					</li>
					<li><strong>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</strong></li>
					<li><strong>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong></li>
					<li><strong>HOW LONG DO WE KEEP YOUR INFORMATION?</strong></li>
					<li><strong>HOW DO WE KEEP YOUR INFORMATION SAFE?</strong></li>
					<li><strong>WHAT ARE YOUR PRIVACY RIGHTS?</strong></li>
					<li><strong>CONTROLS FOR DO-NOT-TRACK FEATURES</strong></li>
					<li><strong>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</strong></li>
					<li><strong>DO WE MAKE UPDATES TO THIS NOTICE?</strong></li>
					<li><strong>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong></li>
					<li>
						<strong>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong>
					</li>
					<li><strong>WHAT INFORMATION DO WE COLLECT?</strong></li>
				</ol>
				<p><strong>1. WHAT INFORMATION DO WE COLLECT?</strong></p>
				<p>
					In Short: We collect personal and usage information that you voluntarily provide or that
					is automatically collected when using VividGen, our AI art generator.
				</p>
				<p>
					We collect personal information that you voluntarily provide to us when you express an
					interest in obtaining information about us or our product, VividGen, when you participate
					in activities on our website or when you contact us. The personal information we collect
					may include application information, communication information, and usage information.
				</p>
				<p>
					Additionally, we automatically collect certain usage information when you use VividGen,
					such as your Internet Protocol (IP) address and browser and device characteristics. This
					information does not reveal your specific identity and is primarily needed to maintain the
					security and operation of our product and for internal analytics and reporting purposes.
					We collect this information through cookies and similar technologies.
				</p>
				<p>
					The information we collect includes log and usage data, device data, and location data.
					This data is used to provide and improve VividGen's performance and features. We do not
					process sensitive information and require that all personal information provided is true,
					complete, and accurate.
				</p>
				<p><strong>2. HOW DOES VIVIDGEN PROCESS YOUR INFORMATION?</strong></p>
				<p>
					In Short: VividGen processes your information to create stunning AI-generated art, improve
					its functionality, and communicate with you regarding your preferences. VividGen may also
					process your information with your consent for other purposes.
				</p>
				<p>
					VividGen processes your personal information for a variety of reasons, depending on how
					you interact with our platform, including:
				</p>
				<p>To create personalized AI-generated art.</p>
				<p>
					We may process your personal information to develop and generate unique pieces of art
					tailored to your preferences.
				</p>
				<p>To improve our AI art generation capabilities.</p>
				<p>
					We may process your information to better understand how our Services are being used so we
					can improve them.
				</p>
				<p>To communicate with you regarding your preferences.</p>
				<p>
					We may process your information to deliver a better user experience and provide you with
					more personalized content.
				</p>
				<p>To protect the integrity of our platform.</p>
				<p>
					We may process your information as part of our efforts to keep our platform safe and
					secure.
				</p>
				<p>To determine the effectiveness of our Services.</p>
				<p>
					We may process your information to better understand how to provide services that are most
					relevant to you.
				</p>
				<p>To save or protect an individual's vital interest.</p>
				<p>
					We may process your information when necessary to save or protect an individual&rsquo;s
					vital interest and prevent harm.
				</p>
				<p>
					<strong>3. WHAT LEGAL BASES DOES VIVIDGEN RELY ON TO PROCESS YOUR INFORMATION?</strong>
				</p>
				<p>
					In Short: VividGen only processes your personal information when we believe it is
					necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable
					law, like with your consent, to provide you with services to enter into or fulfill our
					contractual obligations, to protect your rights, or to fulfill our legitimate business
					interests.
				</p>
				<p>This section applies to you if you are in the EU or UK.</p>
				<p>
					The General Data Protection Regulation (GDPR) and UK GDPR require VividGen to explain the
					valid legal bases we rely on to process your personal information. As such, we may rely on
					the following legal bases to process your personal information:
				</p>
				<p>Consent.</p>
				<p>
					VividGen may process your information if you have permitted us (i.e., consent) to use your
					personal information for a specific purpose. You can withdraw your consent at any time.
				</p>
				<p>Legitimate Interests.</p>
				<p>
					VividGen may process your information when we believe it is reasonably necessary to
					achieve our legitimate business interests. Those interests do not outweigh your interests
					and fundamental rights and freedoms. For example, we may process your personal information
					for some of the purposes described to:
				</p>
				<p>
					&sect; Send users information about special offers and discounts on our products and
					services
				</p>
				<p>
					&sect; Develop and display personalized and relevant advertising content for our users
				</p>
				<p>
					&sect; Analyze how our services are used so we can improve them to engage and retain users
				</p>
				<p>&sect; Support our marketing activities</p>
				<p>&sect; Diagnose problems and/or prevent fraudulent activities</p>
				<p>Legal Obligations.</p>
				<p>
					VividGen may process your information where we believe it is necessary for compliance with
					our legal obligations, such as to cooperate with a law enforcement body or regulatory
					agency, exercise or defend our legal rights, or disclose your information as evidence in
					litigation in which we are involved.
				</p>
				<p>Vital Interests.</p>
				<p>
					VividGen may process your information where we believe it is necessary to protect your
					vital interests or the vital interests of a third party, such as in situations involving
					potential threats to the safety of any person.
				</p>
				<p>
					In legal terms, VividGen is generally the &ldquo;data controller&rdquo; under European
					data protection laws of the personal information described in this privacy notice since we
					determine the means and/or purposes of the data processing we perform. This privacy notice
					does not apply to the personal information we process as a &ldquo;data processor&rdquo; on
					behalf of our customers. In those situations, the customer with that we provide services
					and with whom we have entered into a data processing agreement is the &ldquo;data
					controller&rdquo; responsible for your personal information, and we merely process your
					information on their behalf in accordance with your instructions. To know more about our
					customers' privacy practices, you should read their privacy policies and direct any
					questions you have to them.
				</p>
				<p>If you are located in Canada, this section applies to you.</p>
				<p>
					VividGen may process your information if you have given us specific permission (i.e.,
					express consent) to use your personal information for a specific purpose or in situations
					where your permission can be inferred (i.e., implied consent). You can withdraw your
					consent at any time.
				</p>
				<p>
					In some exceptional cases, VividGen may be legally permitted under applicable law to
					process your information without your consent, including, for example:
				</p>
				<p>
					If collection is clearly in the interests of an individual and consent cannot be obtained
					promptly.
				</p>
				<p>For investigations and fraud detection, and prevention.</p>
				<p>For business transactions, provided certain conditions are met.</p>
				<p>
					If it is contained in a witness statement, the collection is necessary to assess, process,
					or settle an insurance claim.
				</p>
				<p>Identifying injured, ill, or deceased persons and communicating with next of kin.</p>
				<p>
					If we have reasonable grounds to believe an individual has been, is, or maybe a victim of
					financial abuse.
				</p>
				<p>
					If it is reasonable to expect collection and use with consent would compromise the
					availability or the accuracy of the information.
				</p>
				<p><strong>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</strong></p>
				<p>
					In Short: We may share information in specific situations described in this section and/or
					with the following third parties.
				</p>
				<p>We may need to share your personal information in the following situations:</p>
				<p>Business Transfers.</p>
				<p>
					We may share or transfer your information in connection with, or during negotiations of,
					any merger, sale of company assets, financing, or acquisition of all or a portion of
					VividGen's business to another company.
				</p>
				<p><strong>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</strong></p>
				<p>
					In Short: We may use cookies and other tracking technologies to collect and store your
					information.
				</p>
				<p>
					We may use cookies and similar tracking technologies (like web beacons and pixels) to
					access or store information. Our Cookie Notice sets out specific information about how we
					use such technologies and how you can refuse certain cookies.
				</p>
				<p><strong>6. HOW LONG DO WE KEEP YOUR INFORMATION?</strong></p>
				<p>
					In Short: We keep your information for as long as necessary to fulfill the purposes
					outlined in this privacy notice unless otherwise required by law.
				</p>
				<p>
					We will only keep your personal information for as long as it is necessary for the
					purposes set out in this privacy notice unless a longer retention period is required or
					permitted by law (such as tax, accounting, or other legal requirements). No purpose in
					this notice will require us to keep your personal information for longer than one (1)
					year.
				</p>
				<p>
					When we have no ongoing legitimate business need to process your personal information, we
					will either delete or anonymize such information, or, if this is not possible (for
					example, because your personal information has been stored in backup archives), then we
					will securely store your personal information and isolate it from any further processing
					until deletion is possible.
				</p>
				<p><strong>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong></p>
				<p>
					In Short: At VividGen, we prioritize the protection of your personal information through
					the use of both technical and organizational security measures.
				</p>
				<p>
					We have implemented reasonable and appropriate security measures to ensure the safety of
					any personal information processed through our AI art generator. While we strive to
					maintain the security of your information, it's important to note that no electronic
					transmission or storage technology can guarantee complete security. This means that
					unauthorized parties, such as cybercriminals or hackers, may be able to access, steal,
					modify, or collect your personal information. Therefore, it's important to use our
					Services within a secure environment and understand that any transmission of personal
					information is done at your own risk.
				</p>
				<p><strong>8. WHAT ARE YOUR PRIVACY RIGHTS?</strong></p>
				<p>
					In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK),
					and Canada, you have certain rights regarding your personal information. You may access,
					modify, or terminate your account at any time.
				</p>
				<p>
					Depending on your location and the applicable data protection laws, you have the right to
					request access to and receive a copy of your personal information, request correction or
					deletion of your personal information, request restrictions on the processing of your
					personal information, and, in certain circumstances, request the portability of your
					personal information. You also have the right to object to the processing of your personal
					information. If you believe that VividGen is unlawfully processing your personal
					information, you have the right to file a complaint with your local data protection
					supervisory authority.
				</p>
				<p>
					If we rely on your consent to process your personal information, you have the right to
					withdraw your consent at any time. This will not affect the lawfulness of the processing
					done prior to the withdrawal, nor will it affect the processing of your personal
					information that was conducted through lawful processing grounds other than consent.
				</p>
				<p>
					You may opt-out of receiving marketing and promotional communications by unsubscribing
					through the link in our emails or contacting us. Note that you may still receive
					non-marketing messages necessary for the administration and use of your account or in
					response to service requests.
				</p>
				<p>
					We use cookies and similar technologies on our Services, but you can usually set your web
					browser to remove and reject cookies. However, this may affect certain features or
					services of our Services.
				</p>
				<p><strong>9. CONTROLS FOR DO-NOT-TRACK FEATURES</strong></p>
				<p>
					Most web browsers, mobile operating systems, and mobile applications include a
					Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference
					and not to have data about your online browsing activities monitored and collected. No
					uniform technology standard for recognising and implementing DNT signals has been
					finalised at this stage. As such, VividGen, our AI art generator, does not currently
					respond to DNT browser signals or any other mechanism that automatically communicates your
					choice not to be tracked online. If a standard for online tracking is adopted that we must
					follow in the future, we will inform you about that practice in a revised version of this
					privacy notice.
				</p>
				<p><strong>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</strong></p>
				<p>
					In Short: Yes, if you are a resident of California, you are granted specific rights
					regarding access to your personal information.
				</p>
				<p>
					California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits
					our users who are California residents to request and obtain from VividGen, our AI art
					generator, once a year and free of charge, information about categories of personal
					information (if any) we disclosed to third parties for direct marketing purposes and the
					names and addresses of all third parties with which we shared personal information in the
					immediately preceding calendar year. If you are a California resident and would like to
					make such a request, please submit your request in writing using the contact information
					provided below.
				</p>
				<p>
					If you are under 18 years of age, reside in California, and have a registered account with
					VividGen, our AI art generator, you have the right to request the removal of unwanted data
					that you publicly post on the Services. To request the removal of such data, please get in
					touch with us using the contact information provided below. Include the email address
					associated with your account and a statement that you reside in California. We will ensure
					the data is not publicly displayed on the Services, but please be aware that the data may
					not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
				</p>
				<p><strong>CCPA Privacy Notice</strong></p>
				<p>The California Code of Regulations defines a "resident" as:</p>
				<p>
					(1) every individual who is in the State of California for other than a temporary or
					transitory purpose and
				</p>
				<p>
					(2) every individual who is domiciled in the State of California who is outside the State
					of California for a temporary or transitory purpose
				</p>
				<p>All other individuals are defined as "non-residents.&rdquo;</p>
				<p>
					If this definition of "resident" applies to you, VividGen, our AI art generator, must
					adhere to certain rights and obligations regarding your personal information.
				</p>
				<p>
					We may also collect other personal information outside of these categories in instances
					where you interact with us in person, online, or by phone or mail in the context of:
				</p>
				<p>Receiving help through our customer support channels;</p>
				<p>Participation in customer surveys or contests; and</p>
				<p>Facilitate the delivery of our Services and respond to your inquiries.</p>
				<p><strong>How do we use and share your personal information?</strong></p>
				<p>
					This privacy notice can find more information about our data collection and sharing
					practices.
				</p>
				<p>
					You may contact us by email at <a
						href="mailto:info@vividgen.com"
						target="_blank"
						rel="noopener">info@vividgen.com</a
					>.
				</p>
				<p>
					If you are using an authorised agent to exercise your right to opt-out, we may deny a
					request if the authorised agent does not submit proof that they have been validly
					authorised to act on your behalf.
				</p>
				<p><strong>Will your information be shared with anyone else?</strong></p>
				<p>
					VividGen may disclose your personal information with our service providers according to a
					written contract between each service provider and us. Each service provider is a
					for-profit entity that processes the information on our behalf.
				</p>
				<p>
					VividGen may use your personal information for our own business purposes, such as for
					undertaking internal research for technological development and demonstration. This is not
					considered the "selling" of your personal information.
				</p>
				<p>
					VividGen has not disclosed or sold any personal information to third parties for a
					business or commercial purpose in the preceding twelve (12) months. VividGen will not sell
					personal information to website visitors, users, and other consumers in the future.
				</p>
				<p><strong>Your rights concerning your personal data</strong></p>
				<p>Right to request deletion of the data &mdash; Request to delete</p>
				<p>
					You can ask for the deletion of your personal information. If you ask us to delete your
					personal information, we will respect your request and delete your personal information,
					subject to certain exceptions provided by law, such as (but not limited to) the exercise
					by another consumer of his or her right to free speech, our compliance requirements
					resulting from a legal obligation, or any processing that may be required to protect
					against illegal activities.
				</p>
				<p><strong>Right to be informed &mdash; Request to know:</strong></p>
				<p>Depending on the circumstances, you have a right to know:</p>
				<p>whether VividGen collects and uses your personal information;</p>
				<p>the categories of personal information that VividGen collects;</p>
				<p>the purposes for which the collected personal information is used;</p>
				<p>whether VividGen sells your personal information to third parties;</p>
				<p>
					the categories of personal information that VividGen sold or disclosed for a business
					purpose;
				</p>
				<p>
					the categories of third parties to whom the personal information was sold or disclosed for
					a business purpose; and
				</p>
				<p>the business or commercial purpose for collecting or selling personal information.</p>
				<p>
					In accordance with applicable law, VividGen is not obligated to provide or delete consumer
					information de-identified in response to a consumer request or re-identify individual data
					to verify a consumer request.
				</p>
				<p>Right to Non-Discrimination for the Exercise of a Consumer&rsquo;s Privacy Rights</p>
				<p>VividGen will not discriminate against you if you exercise your privacy rights.</p>
				<p><strong>Verification Process</strong></p>
				<p>
					Upon receiving your request, we will need to verify your identity to determine whether you
					are the same person with whom we have the information in our system. These verification
					efforts require us to ask you to provide information so that we can match it with the
					information you have previously provided us. For instance, depending on the type of
					request you submit, we may ask you to provide certain information so that we can match the
					information you provide with the information we already have on file, or we may contact
					you through a communication method (e.g., phone or email) that you have previously
					provided to us. We may also use other verification methods as the circumstances dictate.
				</p>
				<p>
					We will only use the personal information provided in your request to verify your identity
					or authority to make the request. To the extent possible, we will avoid requesting
					additional information from you for the purposes of verification. However, if we cannot
					verify your identity from the information already maintained by us, we may request that
					you provide additional information for the purposes of verifying your identity and for
					security or fraud-prevention purposes. We will delete such additional information as soon
					as we finish verifying you.
				</p>
				<p><strong>Other Privacy Rights</strong></p>
				<p>You may object to the processing of your personal information.</p>
				<p>
					You may request correction of your personal data if it is incorrect or no longer relevant
					or ask to restrict the processing of the information.
				</p>
				<p>
					You can designate an authorized agent to request the CCPA on your behalf. We may deny a
					request from an authorized agent that does not submit proof that they have been validly
					authorized to act on your behalf in accordance with the CCPA.
				</p>
				<p>
					You may request to opt out from future selling of your personal information to third
					parties. Upon receiving an opt-out request, we will act upon the request as soon as
					feasibly possible, but no later than fifteen (15) days from the date of the request
					submission.
				</p>
				<p>
					To exercise these rights, you can contact us by email at info@vividgen.ai or by referring
					to the contact details at the bottom of this document. If you have a complaint about how
					we handle your data, we would like to hear from you.
				</p>
				<p><strong>11. DO WE MAKE UPDATES TO THIS NOTICE?</strong></p>
				<p>
					In Short: Yes, we will update this notice as necessary to stay compliant with relevant
					laws.
				</p>
				<p>
					We may update this privacy notice from time to time. The updated version will be indicated
					by an updated "Revised" date and the updated version will be effective as soon as it is
					accessible. If we make material changes to this privacy notice, we may notify you either
					by prominently posting a notice of such changes or by directly sending you a notification.
					We encourage you to review this privacy notice frequently to be informed of how we are
					protecting your information.
				</p>
				<p><strong>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong></p>
				<p>If you have questions or comments about this notice, email us at info@vividgen.ai.</p>
				<p>
					If you are a resident of the United Kingdom, the "data controller" of your personal
					information is VividGen. You can contact us directly regarding processing your information
					by VividGen by emailing us at <a
						href="mailto:info@vividgen.ai"
						target="_blank"
						rel="noopener">info@vividgen.ai</a
					>.
				</p>
				<p>
					<strong>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong>
				</p>
				<p>
					Based on the applicable laws of your country, you may have the right to request access to
					the personal information we collect from you, change that information, or delete it in
					some circumstances. To request to review, update, or delete your personal information,
					please get in touch with us at info@vividgen.ai.
				</p>
			</ul>
		</div>
	</div>
</PageWrapper>
