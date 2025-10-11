export interface Project {
  name: string,
  company?: string,
  description: string,
  imageUrl?: string,
  projectUrl?: string,
  repoUrl?: string,
  technologies: string[],
}