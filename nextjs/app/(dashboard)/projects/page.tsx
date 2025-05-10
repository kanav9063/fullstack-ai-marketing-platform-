import React from "react";

type Project = {
  name: string;
};

export default async function ProjectsPage() {
  const projectPromise = new Promise<Project[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Project 1" },
        { name: "Project 2" },
        { name: "Project 3" },
      ]);
    }, 2000);
  });

  const projects = await projectPromise;

  return (
    <div>
      <h1>Projects Page</h1>
      {projects.map((project, idx) => (
        <div key={idx}>{project.name}</div>
      ))}
    </div>
  );
}
