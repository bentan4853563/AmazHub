// src/app/_components/Footer.tsx

import Link from "next/link";
import version from "../../../version.js";
import Container from "./Container";
import { FOOTER_MENU } from "@/lib/constants";
import CSE from "./CSE";
import {
  BsCardText,
  BsEnvelopeAtFill,
  BsGeoAlt,
  BsGeoAltFill,
  BsInstagram,
  BsTelegram,
  BsTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <CSE />
      <footer className="pt-14 bg-black mt-20 lg:pt-[100px] text-light text-base">
        <Container className="grid gap-y-10 gap-x-12 sm:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto pb-24">
          <div className="h-card">
            <div className="py-4">
              <strong className="p-name">AmazHub (CY) Ltd</strong>: Expertise in
              AI-enhanced web/mobile apps, DApps, and Smart Contracts. Your
              partner for advanced blockchain and AI solutions.
            </div>
            <ul className="flex flex-col gap-3 font-bold">
              {FOOTER_MENU.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="inline-block transition hover:text-shadow"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* New Singapore Location */}
          <div className="h-card">
            <ul className="flex flex-col gap-3 font-bold">
              <li className="mb-3 text-lg font-extrabold text-white">
                Singapore
              </li>
            </ul>
            <ul>
              <li className="p-org">AmazHub (CY) Ltd. 87654321</li>
              <li className="transition hover:text-shadow ">
                <BsTelephoneFill className="inline-block" />
                &nbsp;
                <a className="text-sm p-tel" href="tel:+6587654321">
                  +6587654321
                </a>
              </li>
              <li className="transition hover:text-shadow ">
                <BsEnvelopeAtFill className="inline-block" />
                &nbsp;
                <a
                  className="text-sm u-email"
                  href="mailto:contact@amazhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="contact@amazhub.com (opens in a new tab)"
                >
                  contact@amazhub.com
                </a>
              </li>
              <li className="transition hover:text-shadow ">
                <BsGeoAltFill className="inline-block" />
                &nbsp;
                <a
                  className="text-sm p-adr"
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Example Address, Singapore on Google Maps (opens in a new tab)"
                >
                  <span className="p-street-address">
                    Singapore Changi Airport. 2nd flr
                  </span>{" "}
                  <span className="p-postal-code">039393</span>
                </a>
              </li>
            </ul>
          </div>

          {/* New Malaysia Location */}
          <div className="h-card">
            <ul className="flex flex-col gap-3 font-bold">
              <li className="mb-3 text-lg font-extrabold text-white">
                Malaysia
              </li>
            </ul>
            <ul>
              <li className="p-org">AmazHub (CY) Ltd Reg. 12345678</li>
              <li className="transition hover:text-shadow ">
                <BsTelephoneFill className="inline-block" />
                &nbsp;
                <a className="text-sm p-tel" href="tel:+60123456789">
                  +60123456789
                </a>
              </li>
              <li className="transition hover:text-shadow ">
                <BsEnvelopeAtFill className="inline-block" />
                &nbsp;
                <a
                  className="text-sm u-email"
                  href="mailto:info@vasilkoff.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="info@vasilkoff.com (opens in a new tab)"
                >
                  info@vasilkoff.com
                </a>
              </li>
              <li className="transition hover:text-shadow ">
                <BsGeoAltFill className="inline-block" />
                &nbsp;
                <a
                  className="text-sm p-adr"
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Example Address, Kuala Lumpur on Google Maps (opens in a new tab)"
                >
                  <span className="p-street-address">Example Address</span>,{" "}
                  <span className="p-locality">Kuala Lumpur</span>{" "}
                  <span className="p-postal-code">50000</span>
                </a>
              </li>
            </ul>
          </div>
        </Container>
        <hr className="border-neutral-700" />
        <Container className="items-center max-w-6xl mx-auto justify-between text-center text-shadow md:flex py-8">
          <div className="flex items-center gap-8">
            <Link
              href="/terms-conditions"
              className="transition hover:text-light"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-light"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="my-8">
            <ul className="flex items-center gap-4 text-shadow">
              <li className="transition hover:text-light ">
                <Link
                  href="https://www.facebook.com/vasilkoff.software"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page (opens in a new tab)"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li className="transition hover:text-light ">
                <Link
                  href="https://www.instagram.com/vasilkoff/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram page (opens in a new tab)"
                >
                  <BsInstagram />
                </Link>
              </li>
              <li className="text-xs">v.{version}</li>
              <li className="text-xs">
                &copy; 2012-{new Date().getFullYear()} AmazHub
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
