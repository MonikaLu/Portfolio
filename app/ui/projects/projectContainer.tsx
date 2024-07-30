import { fetchAllProjects } from '@/app/lib/data';
import Image from 'next/image';

export async function ProjectContainer() {
  const projects = await fetchAllProjects();
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full border border-solid border-teal-300 p-3"
        >
          <div className="flex w-full flex-row justify-between">
            <h1 className="text-xl">{project.projectName}</h1>
            <h3 className="text-lg">
              {project.fromDate.toLocaleDateString()} -{' '}
              {project.toDate.toLocaleDateString()}
            </h3>
          </div>
          <h4 className="text-md">Organization</h4>
          <div className="flex flex-row">
            <Image
              src={project.image_url}
              width={200}
              height={200}
              alt={'Picture of the project'}
            />
            <p className="text-xs">{project.description}</p>
          </div>
          <h4>Technologies:</h4>
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
