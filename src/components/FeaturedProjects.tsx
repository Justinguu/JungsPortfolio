'use client'

import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { githubService } from '@/lib/github';

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  stars: number;
  forks: number;
  lastUpdated: string;
}

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}
const ProjectsDisplay: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPinnedProjects = async () => {
      try {
        const query = `{
          user(login: "Justinguu") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  homepageUrl
                  stargazerCount
                  forkCount
                  updatedAt
                  repositoryTopics(first: 10) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }`;

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        const pinnedRepos = data.data.user.pinnedItems.nodes;

        const formattedProjects = pinnedRepos.map((repo: any) => ({
          title: repo.name,
          description: repo.description || 'No description available',
          technologies: repo.repositoryTopics.nodes.map((topic: any) => topic.topic.name),
          githubLink: repo.url,
          liveLink: repo.homepageUrl || '',
          stars: repo.stargazerCount,
          forks: repo.forkCount,
          lastUpdated: repo.updatedAt
        }));

        setProjects(formattedProjects);
      } catch (err) {
        setError('Failed to load pinned projects');
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin text-indigo-500 w-12 h-12 border-4 border-current border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsDisplay;