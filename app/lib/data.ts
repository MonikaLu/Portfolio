import prisma from './prisma';

export async function fetchAllProjects() {
  try {
    const projects = await prisma.project.findMany();
    return projects.map((project) => ({
      ...project,
      technologies: project.technologies.map((tech) => tech),
    }));
  } catch (error) {
    throw new Error('Failed to fetch projects.');
  }
}
