import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="bg-base-200 py-10">
      <div className="mx-auto max-w-6xl px-5 lg:p-0 ">
        <div className="text-center">
          <h1 className="mx-auto text-3xl font-bold my-3">
            Building A Better Working World is The Foundation of Our Company
          </h1>
          <p className="text-gray-400">
            We empower our people with the right mindsets and skills to navigate
            what’s next, become the transformative leaders the world needs,
            pursue careers as unique as they are, and build their own
            exceptional dark tech experiences The ability to invite, leverage
            and learn from different perspectives is key to delivering for our
            clients. We believe diversity and inclusiveness means growth.
          </p>
        </div>

        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:p-0">
          {teams.map((team) => (
            <div
              key={team._id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={team.img}
                  className="w-full h-72"
                  alt="Md Mayin Uddin"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-xl font-bold">{team.name}</h2>
                <p className="text-gray-400">{team.stack}</p>
                <p className="text-justify">{team.desc}</p>
                <div className="flex justify-around mt-3 py-3 rounded bg-base-200">
                  <a href={team.gl} target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaGlobe />
                    </span>
                  </a>
                  <a href={team.git} target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaGithub />
                    </span>
                  </a>
                  <a href={team.li} target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a href={team.fb} target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaFacebook />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
