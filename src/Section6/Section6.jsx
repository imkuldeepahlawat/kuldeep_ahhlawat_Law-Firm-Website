import Card from "../Section6/Card/Card";
import teamMate1Image from "../assets/team/teamMate1.png";
import teamMate2Image from "../assets/team/teamMate2.png";
import teamMate3Image from "../assets/team/teamMate3.png";
import teamMate4Image from "../assets/team/teamMate4.png";
import teamMate5Image from "../assets/team/teamMate5.png";
import teamMate6Image from "../assets/team/teamMate6.png";
const teamDetails = [
  {
    imageUrl: teamMate1Image,
    fullName: "Danial Def",
    caseNum: 301,
  },
  {
    imageUrl: teamMate2Image,
    fullName: "Sanfole",
    caseNum: 850,
  },
  {
    imageUrl: teamMate3Image,
    fullName: "Cesforila",
    caseNum: 470,
  },
  {
    imageUrl: teamMate4Image,
    fullName: "Colleen",
    caseNum: 180,
  },
  {
    imageUrl: teamMate5Image,
    fullName: "Haldone",
    caseNum: 212,
  },
  {
    imageUrl: teamMate6Image,
    fullName: "Nik Jeo",
    caseNum: 350,
  },
];
const Section6 = () => {
  return (
    <div className="p-24">
      <div className="flex justify-center items-center">
        <h3 className="text-white font-semibold text-[54px]">Our Team</h3>
      </div>
      <div className="flex justify-center flex-wrap gap-10  ">
        {teamDetails.map((userObj) => {
          return (
            <Card
              key={userObj.fullName}
              imageUrl={userObj.imageUrl}
              fullName={userObj.fullName}
              caseNum={userObj.caseNum}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section6;
