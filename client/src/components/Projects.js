import { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios
      .get('http://localhost:5000/api/projects')

      .then((res) => {
        setProjects(res.data);
      })

      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <section className="section" id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project) => (

          <div className="project-card" key={project._id}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;