import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const AppDevDemo = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/apps")
        .then((res) => res.json())
        .then((data) => setApps(data));
    }, []);
    return (
        <div className="hero bg-base-200 my-5">
        <div className="flex-col md:flex-row-reverse lg:flex-row-reverse my-5">
          {apps.map((app) => (
            <div key={app.service_id}>
              <div className="hero-content gap-20 w-full">
                <div className="w-1/2">
                  <img
                    src={app.img}
                    alt="https://sultanaboutiques.com/"
                    className="w-[650px] h-[300px] rounded-lg shadow-2xl"
                  />
                </div>
                <div className="lg:pr-5 w-1/2">
                  <div className="lg:flex gap-3 my-5 text-xs text-center">
                    <p className="rounded-full bg-base-100 p-3  text-gray-400">
                      {app.badge1}
                    </p>
                    <p className="rounded-full bg-base-100 p-3  my-3 lg:my-0 text-gray-400">
                      {app.badge2}
                    </p>
                    <p className="rounded-full bg-base-100 p-3  text-gray-400">
                      {app.badge3}
                    </p>
                  </div>
                  <h1 className="text-2xl font-bold uppercase">{app.title}</h1>
                  <p className="py-6 text-justify text-gray-400 ">
                    {app.description}
                  </p>
                  <a
                    href="https://sultanaboutiques.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <FaExternalLinkAlt />
                    <p className="font-bold uppercase">Visit Site</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AppDevDemo;