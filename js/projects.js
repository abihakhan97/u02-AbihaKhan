function createProjectCard(project) {
  const article = document.createElement("article");
  article.classList.add("project-card");

  const content = document.createElement("div");
  content.classList.add("project-content");

  const heading = document.createElement("h3");
  heading.textContent = project.name;

  const description = document.createElement("p");
  description.classList.add("project-description");
  description.textContent =
    project.description || "No description available.";

  const stack = document.createElement("p");
  stack.classList.add("project-stack");
  stack.textContent =
    `Tech Stack: ${project.language || "Not specified"}`;

  const links = document.createElement("div");
  links.classList.add("project-links");

  const githubLink = document.createElement("a");
  githubLink.href = project.html_url;
  githubLink.textContent = "View Code";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";

  links.append(githubLink);

  if (project.homepage) {
    const liveLink = document.createElement("a");
    liveLink.href = project.homepage;
    liveLink.textContent = "Live Preview";
    liveLink.target = "_blank";
    liveLink.rel = "noopener noreferrer";

    links.append(liveLink);
  }

  content.append(heading, description, stack, links);
  article.append(content);

  return article;
}

export async function loadProjects() {
  const projectList = document.querySelector("#project-list");
  const status = document.querySelector("#projects-status");

  if (!projectList) return;

  try {
    if (status) status.textContent = "Loading projects...";

    const response = await fetch(
      "https://api.github.com/users/abihakhan97/repos?per_page=100"
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const projects = await response.json();

    const projectCards = projects
      .filter((project) => !project.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .map(createProjectCard);

    projectList.replaceChildren(...projectCards);

    if (status) {
      status.textContent =
        projectCards.length === 0 ? "No projects found." : "";
    }

  } catch (error) {
    if (status) {
      status.textContent = "Sorry, the projects could not be loaded.";
    }

    console.error("Project loading failed:", error);
  }
}