function createCvEntry({ title, organisation, period }) {
  const article = document.createElement("article");
  article.classList.add("job");

  const heading = document.createElement("h3");
  heading.textContent = title;

  const organisationText = document.createElement("p");
  organisationText.textContent = organisation;

  const dateText = document.createElement("p");
  dateText.classList.add("job-date");
  dateText.textContent = period;

  article.append(heading, organisationText, dateText);

  return article;
}

function createLanguageEntry({ title, proficiency }) {
  const paragraph = document.createElement("p");
  paragraph.classList.add("language-entry");
  paragraph.textContent = `${title} - ${proficiency}`;

  return paragraph;
}

export async function loadCv() {
  const workList = document.querySelector("#work-list");
  const educationList = document.querySelector("#education-list");
  const langList = document.querySelector("#languages-list");
  const status = document.querySelector("#cv-status");

  try {
    status.textContent = "Loading CV...";

    const response = await fetch("./data/cv.json");

    if (!response.ok) {
      throw new Error(`Could not load CV data: ${response.status}`);
    }

    const { work, education, languages } = await response.json();

    const workEntries = work.map(createCvEntry);
    const educationEntries = education.map(createCvEntry);
    const languagesEntries = languages.map(createLanguageEntry);

    workList.replaceChildren(...workEntries);
    educationList.replaceChildren(...educationEntries);
    langList.replaceChildren(...languagesEntries);

    if (status) status.textContent = "";
  } catch (error) {
    if (status) {
      status.textContent =
        "Sorry, the CV could not be loaded. Please try refreshing the page.";
    }

    console.error("CV loading failed:", error);
  }
}
