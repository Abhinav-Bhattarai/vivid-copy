<script lang="ts">
	import { page } from '$app/stores';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/main';
	import PageWrapper from '$components/PageWrapper.svelte';
</script>

<MetaTag
	title="Pro | VividGen"
	description="Become a pro member on VividGen to unlock all of its features."
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
				Terms of Services
			</h2>

			<ul class="mt-6 flex flex-col gap-3 px-4 md:px-6">
				<p><strong>Website Terms of Service</strong></p>
				<p>Last Updated: December 20, 2022</p>
				<p><strong>Introduction, Overview, and Your Agreement</strong></p>
				<p>
					These terms of service (and any other terms or information incorporated into them by
					reference) (collectively the &ldquo;Terms&rdquo;) govern your access and use of VividGen's
					(&ldquo;VividGen,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) website, located at
					https://www.vividgen.com/ (the &ldquo;Site&rdquo;). These Terms do not alter in any way
					the terms or conditions of any other agreement you may have with VividGen for products,
					services, or otherwise.
				</p>
				<p>
					PLEASE READ THESE TERMS CAREFULLY AND IN THEIR ENTIRETY BEFORE USING THE SITE, AS THEY
					CONTAIN IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS,
					INCLUDING AN AGREEMENT TO SUBMIT (WITH LIMITED EXCEPTION) ALL CLAIMS THAT YOU MAY HAVE
					AGAINST US TO BINDING AND FINAL ARBITRATION, YOUR USE OF THE SITE AND OUR COPYRIGHT AND
					OTHER INTELLECTUAL PROPERTY RIGHTS.
				</p>
				<p>
					By accessing or using the Site, you signify that you: (1) have the legal capacity to
					comply with and agree to comply with these Terms; and (2) are not a minor in the
					jurisdiction in which you reside. If you do not meet (1) or (2), you are not authorized to
					access or use the Site.
				</p>
				<p><strong>Your Information</strong></p>
				<p>
					For information concerning how and why we might collect, store, use, and/or share your
					personal information when you visit the Site, please read and review our Privacy Policy.
				</p>
				<p>
					<strong>Your Rights to Use the Site; Our Content and Intellectual Property Rights</strong>
				</p>
				<p>
					Subject to these Terms, VividGen grants you a limited, non-exclusive, revocable, and
					personal license to access and use the Site solely for noncommercial and informational
					purposes.
				</p>
				<p>
					Unless otherwise expressly indicated by VividGen, all content displayed or made available
					on the Site, including without limitation, text, images, illustrations, designs, logos,
					domain names, service marks, software, scripts, and the selection, compilation and
					arrangement of any of the foregoing is owned by VividGen, its affiliates, licensors and/or
					other third parties (&ldquo;Site Content&rdquo;). The Site and all Site Content are
					protected by copyright, trade dress, trademark, moral rights, and other intellectual
					property laws in the United States, the United Kingdom, and other international
					jurisdictions. All such rights are reserved.
				</p>
				<p>
					All registered and unregistered trademarks, logos, and service marks are the property of
					VividGen and/or their respective owners. Nothing displayed or accessed in connection with
					the Site shall be construed as granting by implication, estoppel, or otherwise, any
					license or right to use any trademark, logo, or service mark displayed in connection with
					the Site without the owner&rsquo;s prior written permission, except as otherwise described
					herein.
				</p>
				<p><strong>Prohibited Uses for VividGen</strong></p>
				<p>
					You are fully responsible for your activities while using VividGen, including any content,
					information, or other materials you generate using the service, and you bear all risks
					associated with its use. By agreeing to these terms, you agree to comply with all
					applicable federal, state, and local laws and regulations in connection with your use of
					VividGen. You also agree not to use VividGen to engage in any prohibited conduct or to
					assist any other person or entity in engaging in any prohibited conduct.
				</p>
				<p>
					We reserve the right (but not the obligation) in our sole discretion to (1) monitor
					VividGen for violations of these Terms; (2) take appropriate legal action against anyone
					who uses or accesses VividGen in a manner that we believe violates the law or these Terms,
					including without limitation, reporting such user to law enforcement authorities; (3) deny
					access to VividGen or any features of VividGen to anyone who violates these Terms or who
					we believe interferes with the ability of others to enjoy our service or infringes the
					rights of others; and (4) otherwise manage VividGen in a manner designed to protect our
					rights and property and to facilitate the proper functioning of VividGen.
				</p>
				<p>
					You are prohibited from using VividGen for the commission of harmful or illegal
					activities. Accordingly, you may not, or assist any other person to:
				</p>
				<ul>
					<li>
						Violate these Terms or other policies and terms posted on, or otherwise applicable to,
						VividGen;
					</li>
					<li>
						Use VividGen to create or share any content that violates intellectual property rights
						or infringes upon the privacy or publicity rights of others;
					</li>
					<li>
						Copy or adapt VividGen's software, including but not limited to Flash, PHP, HTML,
						JavaScript, or other code;
					</li>
					<li>
						Upload any material, program, or software that contains any virus, worm, spyware, Trojan
						horse, or other program or code designed to interrupt, destroy, or limit the
						functionality of VividGen, launch a denial of service attack, or in any other way
						attempt to interfere with the functioning and availability of VividGen;
					</li>
					<li>
						Except as may be the result of standard search engine or Internet browser usage, use,
						launch, develop, or distribute any automated system, including, without limitation, any
						spider, robot, cheat utility, scraper, offline reader, or any data mining or similar
						data gathering extraction tools to access VividGen, or use or launch any unauthorized
						script or other software;
					</li>
					<li>
						Interfere with, disable, vandalize, or disrupt VividGen or servers or networks connected
						to VividGen;
					</li>
					<li>
						Hack into, penetrate, disable, or otherwise circumvent the security measures of VividGen
						or servers or networks connected to VividGen;
					</li>
					<li>
						Impersonate another person or falsely represent an affiliation with any organization or
						institution;
					</li>
					<li>
						Use VividGen in any way that violates any applicable national, federal, state, local, or
						international law or regulation; or
					</li>
					<li>Attempt to do any of the above.</li>
				</ul>
				<p><strong>DMCA Copyright Infringement Notice</strong></p>
				<p>
					We have implemented the procedures described in the Digital Millennium Copyright Act of
					1998 (&ldquo;DMCA&rdquo;), 17 U.S.C. &sect; 512, regarding the reporting of alleged
					copyright infringement and the removal of or disabling access to the infringing material.
					If you have a good faith belief that copyrighted material on the Site is being used in a
					way that infringes the copyright over which you are authorized to act, you may make a
					Notice of Infringing Material.
				</p>
				<p>
					Before serving a Notice of Infringing Material, you may wish to contact a lawyer to better
					understand your rights and obligations under the DMCA and other applicable laws. For
					example, if your Notice fails to comply with all requirements of sections 512(c)(3), your
					Notice may not be effective.
				</p>
				<p><strong>Termination of Repeat Infringers</strong></p>
				<p>
					We will terminate or disable your use of the Site in appropriate circumstances if you are
					deemed by us to be a repeat copyright infringer.
				</p>
				<p><strong>Disclaimer</strong></p>
				<p>
					THE SITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS.
					EXCEPT TO THE EXTENT PROHIBITED BY LAW, WE MAKE NO WARRANTIES (EXPRESS, IMPLIED,
					STATUTORY, OR OTHERWISE) WITH RESPECT TO THE SITE OR THE CONTENT OF ANY WEBSITES LINKED TO
					THE SITE AND DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF
					MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. VIVIDGEN
					MAKES NO WARRANTY THAT (A) THE SITE WILL MEET YOUR REQUIREMENTS, (B) ACCESS TO AND USE OF
					THE SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, AND (C) THE RESULTS THAT
					MAY BE OBTAINED FROM THE USE OF THE SITE WILL BE ACCURATE OR RELIABLE.
				</p>
				<p>
					VividGen reserves the right in our sole discretion to modify or discontinue, temporarily
					or permanently, the Site (or any part thereof) with or without notice. You agree that
					VividGen will not be liable to you or to any third party for any modification or
					discontinuance of the Site, except as set forth in the &ldquo;Limitation of
					Liability&rdquo; section below.
				</p>
				<p>
					You understand that we are not responsible for any activities or legal consequences of
					your use of the Site. Users are responsible for using the Site in compliance with all
					applicable laws and regulations of the jurisdictions in which such users are domiciled,
					reside, or are located at the time of such access or use, as well as these Terms. Any
					violation of these Terms may result in the suspension or termination by us, in our sole
					discretion, of your access to and use of the Site.
				</p>
				<p><strong>Limitation of Liability</strong></p>
				<p>
					YOU EXPRESSLY UNDERSTAND AND AGREE THAT NEITHER VIVIDGEN NOR ITS OFFICERS, EMPLOYEES,
					DIRECTORS, SHAREHOLDERS, LICENSORS, SERVICE PROVIDERS, AND AGENTS WILL BE LIABLE FOR ANY
					INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY DAMAGES, OR DAMAGES FOR
					LOSS OF PROFITS INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR
					OTHER INTANGIBLE LOSSES (EVEN IF VIVIDGEN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
					DAMAGES), WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE,
					RESULTING
				</p>
				<p>
					FROM: (A) THE USE OR THE INABILITY TO USE THE AI ART GENERATOR OR ANY RELATED INFORMATION;
					(B) CONDUCT OF ANY THIRD PARTY (INCLUDING OTHER USERS) OF THE AI ART GENERATOR; OR (C) ANY
					OTHER MATTER RELATING TO THE AI ART GENERATOR. IN NO EVENT WILL VIVIDGEN&rsquo;S TOTAL
					LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OF ACTION EXCEED ONE HUNDRED DOLLARS
					($100). IF YOU ARE MERELY DISSATISFIED WITH ANY PORTION OF THE AI ART GENERATOR OR WITH
					THESE TERMS, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE THE USE OF THE AI ART
					GENERATOR.
				</p>
				<p>
					YOU AGREE THAT REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY, ANY CLAIM OR CAUSE OF
					ACTION THAT YOU MAY HAVE ARISING OUT OF OR RELATED TO THE USE OF THE AI ART GENERATOR OR
					THESE TERMS MUST BE FILED BY YOU WITHIN ONE (1) YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION
					AROSE OR BE FOREVER BARRED.
				</p>
				<p>
					BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE
					LIMITATION OR EXCLUSION OF CERTAIN CATEGORIES OF DAMAGES, SOME OF THE ABOVE LIMITATIONS
					MAY NOT APPLY TO YOU.
				</p>
				<p><strong>Links to and From Other Websites</strong></p>
				<p>
					You may gain access to other websites via links on the AI Art Generator. These Terms apply
					to the AI Art Generator only and do not apply to other parties&rsquo; websites. Similarly,
					you may have come to the AI Art Generator via a link from another website. The terms of
					use of other websites do not apply to the AI Art Generator. VividGen assumes no
					responsibility for any terms of use or material outside of the AI Art Generator accessed
					via any link. You are free to establish a hypertext link to the AI Art Generator so long
					as the link does not state or imply any sponsorship of your website or service by VividGen
					or the AI Art Generator. Unless expressly agreed to by us in writing, reference to any of
					our products, services, processes or other information by trade name, trademark, logo, or
					otherwise by you or any third party does not constitute or imply endorsement, sponsorship
					or recommendation thereof by us. You may not, without our prior written permission, frame
					or inline link any of the content of the AI Art Generator, scrape the AI Art Generator or
					incorporate into another website or other service any of our material, content or
					intellectual property unless you are otherwise permitted by us to do so in accordance with
					a license or subject to separate terms.
				</p>
				<p>
					<strong
						>Developed by <strong
							><a href="https://abhinavbhattarai.vercel.app" class="cursor-pointer underline">Abhinav Bhattarai</a></strong
						></strong
					>
				</p>
			</ul>
		</div>
	</div>
</PageWrapper>
