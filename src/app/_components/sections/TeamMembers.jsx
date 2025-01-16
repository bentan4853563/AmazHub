import Container from "../Container";
import TeamMember from "./TeamMember";

const memberList = [
  // {
  //   name: "Aziz Amirul",
  //   position: "Project Manger",
  //   email: "",
  //   picture: "/assets/team/pm.jpeg",
  // },
  {
    name: "Leon Sandes",
    position: "Lead Developer",
    email: "leonsandes816@gmail.com",
    picture: "/assets/team/leon-sandes.jpg",
  },
  {
    name: "Tony Wise",
    position: "React Native Developer",
    email: "hometown981220@gmail.com",
    picture: "/assets/team/tony-wise.png",
  },
  {
    name: "Haoqiang Lai",
    position: "Web Developer",
    email: "laihaoqiang34@gmail.com",
    picture: "/assets/team/haoqiang-lai.jpg",
  },
  {
    name: "Benjamin Tan",
    position: "Backend Developer",
    email: "bentan010918@gmail.com",
    picture: "/assets/team/benjamin-tan.jpg",
  },
  {
    name: "Sagar", // Added India flag emoji here
    position: "Marketing Manager",
    email: "",
    picture: "/assets/team/Sagar_partner_india.jpeg",
  },
  // {
  //   name: "Aiyuki K.",
  //   position: "Humnan Resoureces",
  //   email: "aiyukikawano@gmail.com",
  //   picture: "/assets/team/aiyuki-kawano.png",
  // },
];

export default function TeamMembers() {
  return (
    <section id="team" className="bg-white py-14 lg:py-[100px]">
      <Container>
        <div className="heading text-center">
          <h2>Meet Our Team</h2>
          <p>Ingenious Problem-Solvers</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
