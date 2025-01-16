// src/app/_components/sections/TeamMember.jsx
import Image from "next/image";
import Link from "next/link";
import { BsEnvelopeAt } from "react-icons/bs";
import India_Flag from '../../../../public/assets/team/India_Flag.png'
//import { EnvelopeAt } from "react-bootstrap-icons";

const TeamMember = ({
  name,
  position,
  picture,
  email,
  keywords = "web developer",
}) => {
  return (
    <div
      className="group text-center p-4"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* <Link href={link}> */}
      <div
        className="rounded-3xl transition-all duration-500 group-hover:shadow-lg h-64 mb-4"
        itemProp="image"
      >
        <Image
          loading="lazy"
          width={200}
          height={200}
          src={picture}
          alt={`Photo of ${name}, ${keywords}`}
          className="w-full h-full rounded-3xl object-cover object-top transition duration-200"
        />
      </div>
      <span
        className="flex items-center justify-center gap-2 mt-5 lg:mt-0 pt-2 pb-2 text-2xl font-bold text-black lg:text-md transition duration-500 group-hover:text-secondary"
        itemProp="name"
      >
        {name}{position == "Marketing Manager" && <Image src={India_Flag} className="w-8" />}
      </span>
      <p className="text-sm font-bold" itemProp="jobTitle">
        {position}
      </p>
      {/* </Link> */}
      {/* <p className="text-sm font-bold">
        <Link
          href={`mailto:${email}`}
          itemProp="email"
          itemScope
          itemType="https://schema.org/ContactPoint"
          aria-label={`Email ${name} at ${email}`}
        >
          <BsEnvelopeAt className="inline-block w-4 h-4" />
          <br />
          {email}
        </Link>
      </p> */}
    </div>
  );
};

export default TeamMember;
