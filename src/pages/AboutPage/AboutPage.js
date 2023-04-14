import "./AboutPageStyles.scss";
import Ashley from "../../assets/team/Ashley-Davis.png";
import Samantha from "../../assets/team/Samantha-Williams.png";
import Michael from "../../assets/team/Michael-Thompson.png";
import Rachel from "../../assets/team/Rachel-Johnson.png";
import David from "../../assets/team/David-Lee.png";
import Alejandra from "../../assets/team/Alejandra-Castro.png";
import { FaLinkedinIn } from "react-icons/fa";

export default function AboutPage() {

    const team = [
            {
                name: "Ashley Davis",
                title: "Chief executive officer",
                image: Ashley
            },
            {
                name: "Samantha Williams",
                title: "Chief operating officer",
                image: Samantha
            },
            {
                name: "Michael Thompson",
                title: "Chief marketing officer",
                image: Michael
            },
            {
                name: "Rachel Johnson",
                title: "Chief technology officer",
                image: Rachel
            },
            {
                name: "David Lee",
                title: "Chied information officer",
                image: David
            },
            {
                name: "Alejandra Castro",
                title: "Chief digital officer",
                image: Alejandra
            }
        ]

    return (
        <>
            <header className='AboutBanner centerText'>
                <div className='AboutTitles '>
                    <h1>We make the dream of living on Mars a reality</h1>
                    <h2>Meet our team</h2>
                </div>
            </header>
            <section className='AboutSection'>
                <h2>We are passionate about space exploration and architecture, which is why we believe that the future of humanity lies in the colonisation of other planets. We work hard so that our clients can enjoy the unique experience of living on the Red Planet.</h2>
                    {team.map(info =>{
                        return (
                        <article className='TeamCard' key={info.name}>
                            <img src={info.image} alt={info.name}/>
                            <div className="InfoCardTeam">
                                <div>
                                    <h4>{info.name}</h4>
                                    <p>{info.title}</p>
                                </div>
                                <div>
                                    <FaLinkedinIn/>
                                </div>
                            </div>
                        </article>)
                    })}
            </section>
        </>
    )
}