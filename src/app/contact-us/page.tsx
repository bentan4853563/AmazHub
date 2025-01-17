import AIContacts from "@/app/_components/contacts/AIContacts";
import Container from '@/app/_components/Container';
import MemberSimon from '@/app/_components/sections/members/Simon';
import MemberMaxim from '@/app/_components/sections/members/Maxim';
import Calendly from "@/app/_components/contacts/Calendly";
import Reviews from '@/app/_components/sections/Reviews';
import Tabs from "@/app/_components/Tabs";
import BugReportForm from "@/app/_components/BugReportForm";
import { BASE_URL } from '@/lib/constants';
import TeamMember from "../_components/sections/TeamMember";

export async function generateMetadata() {
    const pageTitle = "Contact Us - AmazHub";
    const pageDescription = "Contact AmazHub for mobile app and web development inquiries, partnerships, careers, and more. Reach out to our expert team today.";
    const canonicalUrl = `${BASE_URL}/contact-us`;

    return {
      title: pageTitle,
      description: pageDescription,
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        type: "website",
        images: [
          {
            url: `${BASE_URL}/images/letter-logo.png`,
            alt: "Contact Us - AmazHub",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        image: `${BASE_URL}/images/letter-logo.png`,
      },
      additionalMetaTags: [
        {
          name: "description",
          content: pageDescription,
        },
      ],
      alternates: { canonical: canonicalUrl },
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        mainEntity: {
          "@type": "Organization",
          name: "AmazHub CY Ltd",
          url: BASE_URL,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+16469388727",
            contactType: "Customer Service",
            areaServed: "Global",
            availableLanguage: ["English", "Ukrainian"],
          },
        },
      },
    };
}

const ContactUsPage = () => {
    return (
      <main>
        <section className="mt-40 bg-gradient-to-b from-white/40 to-transparent">
          <Container>
            <div className="mx-auto text-center max-w-3xl space-y-8 mb-8">
              <h1>Contact Us Now</h1>
              <p>
                Get in touch with members of AmazHub team. Any inquiries related
                to our mobile apps and web-development services, partnerships,
                career opportunities, and more.
              </p>
              {/* <div className="grid gap-8 grid-cols-2 max-w-xl mx-auto py-12">
                <TeamMember
                  name="Leon Sandes"
                  position="Lead Developer"
                  email="leonsandes816@gmail.com"
                  //   link={item.link}
                  picture="/assets/team/leon-sandes.png"
                  keywords="Web app development, ios app development"
                />
              </div> */}
            </div>
            <Tabs
              tabs={[
                { label: "Contact Us", content: <AIContacts />, id: "contact" },
                {
                  label: "Report a Bug",
                  content: <BugReportForm />,
                  id: "report",
                },
              ]}
            />

          </Container>
          {/* <div className="w-[110%] overflow-hidden">
                    <Calendly />
                </div> */}
          <Reviews />
        </section>
      </main>
    );
};

export default ContactUsPage;
