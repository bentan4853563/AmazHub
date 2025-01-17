// src/app/_components/Footer.tsx

import Link from "next/link";
import version from "../../../version.js";
import Container from "./Container";
import { FOOTER_MENU } from "@/lib/constants";
import CSE from "./CSE";
import {
  BsDiscord,
  BsEnvelopeAtFill,
  BsGeoAltFill,
  BsTelephoneFill,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <CSE />
      <footer className="pt-14 bg-black mt-20 lg:pt-[100px] text-light text-base">
        <Container className="grid gap-y-10 gap-x-12 sm:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto pb-24">
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
                Malaysia
              </li>
            </ul>
            <ul>
              <li className="p-org">AmazHub (CY) Ltd. 87654321</li>
              <li className="transition hover:text-shadow ">
                <BsTelephoneFill className="inline-block" />
                &nbsp;
                <a className="text-sm p-tel" href="tel:+16469388727">
                  +16469388727
                </a>
              </li>
              <li className="transition hover:text-shadow ">
                <BsEnvelopeAtFill className="inline-block" />
                &nbsp;
                <a
                  className="text-sm u-email"
                  href="mailto:root@amazhub.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="root@amazhub.net (opens in a new tab)"
                >
                  root@amazhub.net
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
                  href="https://x.com/amazhubroot "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page (opens in a new tab)"
                >
                  <BsTwitter />
                </Link>
              </li>
              <li className="transition hover:text-light ">
                <Link
                  href="https://discord.gg/xZqF5r2s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram page (opens in a new tab)"
                >
                  <BsDiscord />
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
