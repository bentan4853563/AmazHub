// src/app/privacy-policy/page.tsx
import Link from 'next/link';
import Container from '../_components/Container';
import { BASE_URL } from '@/lib/constants';

export const metadata = {
    title: 'Privacy Policy - Vasilkoff',
    description: 'Learn how AmazHub prioritizes your privacy, detailing our practices regarding data collection and use.',
    alternates: { canonical: `${BASE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = 'September 15, 2023';

    return (
        <Container>
            <article className="py-20">
                <h1 className="mb-5 text-3xl font-bold text-secondary">Privacy Policy</h1>
                <p className="mb-5">Last updated: {lastUpdated}</p>

                <div className="space-y-4">
                    <p>
                        AmazHub CY Ltd and AmazHub (referred to as "us", "we", or "our") operate the Vasilkoff.com website (hereinafter, the "Service"). We are deeply committed to safeguarding the privacy of our users. This document delineates the nature of the information we collect, our methods of handling it, and your rights concerning your data.
                    </p>

                    <p>
                        By engaging with the Service, you consent to the collection and utilization of data in line with this Privacy Policy.
                    </p>

                    <h2>Information We Collect</h2>
                    <ul>
                        <li>Your IP address</li>
                        <li>Browser specifications</li>
                        <li>Pages on our Service you access</li>
                        <li>Visit timestamps</li>
                        <li>Duration on visited pages</li>
                        <li>Other diagnostic parameters</li>
                    </ul>

                    <h2>Purpose of Using Your Data</h2>
                    <ul>
                        <li>Service usage analysis</li>
                        <li>Service enhancement</li>
                        <li>Maintaining Service security</li>
                    </ul>

                    <h2>Google Analytics</h2>
                    <p>
                        Our Service integrates Google Analytics to scrutinize its usage. Google Analytics, a service provided by Google, Inc., processes data generated by cookies concerning your use of the Service, including your IP address. This data is transferred and stored by Google on their US servers. Google leverages this information to evaluate the Service usage, compile website activity summaries, and furnish other related services.
                    </p>

                    <h2>Mobile Applications</h2>
                    <p>
                        Our applications can be obtained from Google Play and the Apple App Store. These platforms might capture certain user-related data, including device specifics, application utilization patterns, and diagnostic data. Their data collection practices are not governed by this policy.
                    </p>

                    <h2>Data Security</h2>
                    <p>
                        We employ industry-standard measures to secure your data. It's pivotal to understand that no online data transmission method or electronic storage technique is infallible. While we are committed to your data's security, its absolute safety cannot be assured.
                    </p>

                    <h2>Privacy Policy Updates</h2>
                    <p>
                        We reserve the right to modify this Privacy Policy occasionally. Any changes will be reflected on this page, accompanied by an update to the "Last updated" date. Periodic review of this policy is advised to stay informed about modifications.
                    </p>

                    <h2>Your Entitlements</h2>
                    <p>
                        You reserve the right to access, amend, or erase any personal data we have about you. To exercise these rights, please get in touch with us at <Link href="mailto:sp@vasilkoff.com">sp@vasilkoff.com</Link>.
                    </p>

                    <h2>Reach Out</h2>
                    <p>
                        For any queries or apprehensions about this Privacy Policy, feel free to connect with us via our <Link href="/contact-us">Contact Us</Link> page.
                    </p>
                </div>
            </article>
        </Container>
    );
}
