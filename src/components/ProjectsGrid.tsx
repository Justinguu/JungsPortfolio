"use client"

import React, { useState, useEffect } from 'react';
import { githubService } from '@/lib/github';
import ProjectCard from './ProjectCard';
import { Loader, GitBranch, User } from 'lucide-react';
import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

type GitHubRepo = RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][0];
type GitHubCommit = RestEndpointMethodTypes["repos"]["listCommits"]["response"]["data"][0];

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  latestCommitDate: string;
  isOwn: boolean;
}

const ProjectsGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
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
        <Loader className="animate-spin text-indigo-500" size={48} />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Pinned Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

const renderProjects = (projects: Project[], loading: boolean, error: string | null) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin text-indigo-500" size={48} />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;