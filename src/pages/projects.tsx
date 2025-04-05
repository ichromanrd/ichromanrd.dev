import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import styled from "@emotion/styled"

const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ProjectCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #0066cc;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0052a3;
  }

  &.secondary {
    background-color: #f8f9fa;
    color: #333;
    border: 1px solid #ddd;

    &:hover {
      background-color: #e9ecef;
    }
  }
`

const projects = [
  {
    title: "Project 1",
    description:
      "A description of project 1 and its key features. This project demonstrates the use of modern web technologies and best practices.",
    image: "/project1.jpg",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    demoUrl: "https://project1.demo.com",
    githubUrl: "https://github.com/ichromanrd/project1",
  },
  {
    title: "Project 2",
    description:
      "A description of project 2 and its key features. This project showcases advanced backend architecture and scalability.",
    image: "/project2.jpg",
    tags: ["Java", "Spring Boot", "MongoDB", "Docker"],
    demoUrl: "https://project2.demo.com",
    githubUrl: "https://github.com/ichromanrd/project2",
  },
  {
    title: "Project 3",
    description:
      "A description of project 3 and its key features. This project focuses on creating an intuitive user experience with modern design.",
    image: "/project3.jpg",
    tags: ["Next.js", "GraphQL", "AWS", "Tailwind CSS"],
    demoUrl: "https://project3.demo.com",
    githubUrl: "https://github.com/ichromanrd/project3",
  },
  // Add more projects as needed
]

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ProjectsSection>
        <Title>My Projects</Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TagList>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagList>
                <ProjectLinks>
                  <ProjectLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </ProjectLink>
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                  >
                    View Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsSection>
    </Layout>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Projects - Ichroman Raditya</title> 