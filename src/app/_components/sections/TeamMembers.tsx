import Container from "../Container";
import MemberMaxim from "@/app/_components/sections/members/Maxim";
import MemberNikol from "@/app/_components/sections/members/Nikol";
import MemberIryna from "@/app/_components/sections/members/Iryna";
import MemberSimon from "@/app/_components/sections/members/Simon";
import MemberAnastasia from "@/app/_components/sections/members/Anastasia";
import TeamMember from "./TeamMember";

const memberList = [
  {
    name: "Leon Sandes",
    position: "CEO",
    email: "leonsandes816@gmail.com",
    picture: "/assets/team/leon-sandes.png",
  },
  {
    name: "Tony Wise",
    position: "Managing Director",
    email: "hometown981220@gmail.com",
    picture: "/assets/team/tony-wise.png",
  },
  {
    name: "Haoqiang Lai",
    position: "Systems Architect",
    email: "leonsandes816@gmail.com",
    picture: "/assets/team/haoqiang-lai.jpg",
  },
  {
    name: "Benjamin Tan",
    position: "Technical Director",
    email: "bentan010918@gmail.com",
    picture: "/assets/team/benjamin-tan.png",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="bg-white py-14 lg:py-[100px]">
      <Container>
        <div className="heading text-center">
          <h2>Meet Our Team</h2>
          <p>Ingenious Problem-Solvers</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {memberList.map((item, index) => (
            <TeamMember
              name={item.name}
              position={item.position}
              email={item.email}
            //   link={item.link}
              picture={item.picture}
              keywords="android app development, ios app development"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
