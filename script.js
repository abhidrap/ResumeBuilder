// Sample JSON data
const sampleData = {
  "name": "Abhimanyu Sharma",
  "title": "Software Engineer",
  "contact": {
    "email": "abhimanyulinux@gmail.com",
    "phone": "9773774159",
    "address": "New Delhi, India",
    "linkedin": "https://linkedin.com/in/abhimanyusharma-dev",
    "github": "https://github.com/abhimanyusama",
    "website1": "https://fastboard.ai/",
    "website2": "https://voxing.ai/"
  },
  "experience": [
    {
  "position": "Software Engineer",
  "company": "Taboola",
  "duration": "October 2025 - Present",
  "responsibilities": [
    "Owned end-to-end delivery of ad widget implementations, coordinating with clients, designers, and internal teams to ensure timely and accurate execution.",
    "Translated client mockups and business requirements into functional, high-quality ad widgets with pixel-perfect UI and brand alignment.",
    "Acted as a point of contact between stakeholders, providing regular status updates, clarifying requirements, and managing expectations.",
    "Planned and tracked tasks, timelines, and dependencies for multiple ad campaigns, ensuring on-time delivery across parallel projects.",
    "Performed comprehensive QA and validation of ad widgets, including functional, regression, and cross-browser testing before deployment.",
    "Identified risks and issues early in the development lifecycle and worked with relevant teams to resolve them efficiently.",
    "Reviewed and approved ad creatives against quality standards, reducing rework and improving overall delivery efficiency.",
    "Ensured ads met internal quality, compliance, and performance standards prior to release."
  ]
}
,
    {
      "position": "Software Engineer",
      "company": "LCNC Technologies",
      "duration": "January 2024 - October 2025",
      "responsibilities": [
        "Led client meetings to understand business needs, providing regular updates and ensuring alignment of technical solutions with business objectives.",
        "Worked closely with cross-functional teams to gather detailed requirements, ensuring that the final product meets the desired business outcomes.",
        "Identified areas for process optimization, implementing solutions that increased operational efficiency and improved client satisfaction.",
        "Created and maintained detailed project documentation, including business requirement documents (BRDs), functional specifications, and user stories.",
        "Collaborated with design teams to optimize user interfaces, increasing user engagement by 30% and improving client satisfaction.",
        "Worked with developers to implement mobile-first design strategies, improving mobile traffic by 20%.",
        "Identified inefficiencies in system performance, leading to a 20% improvement in page load times and a reduction in bounce rates.",
        "Contributed to implementing SEO best practices, resulting in a 42% increase in organic search traffic.",
        "Worked with backend teams to optimize API response times, improving overall performance and user experience.",
        "Collaborated with third-party providers to integrate data, enhancing functionality and increasing user interaction by 30%.",
        "Ensured that all data handling processes were secure and compliant, reducing security vulnerabilities by 20%.",
        "Developed SQL-based solutions to extract, manipulate, and analyze business-critical data, enabling data-driven decision-making."
      ]
    }
  ],
  "skills": [
    {
      "category": "Business Analysis",
      "items": [
        "Requirements Gathering",
        "Documentation",
        "Process Analysis",
        "Data Analysis",
        "Data-Driven Decision Making",
        "Stakeholder Management",
        "Requirement Workshops",
        "Presentations"
      ]
    },
    {
      "category": "Frontend",
      "items": [
        "JavaScript",
        "React.js",
        "Vue.js",
        "Nuxt.js",
        "HTML",
        "CSS",
        "JSON",
        "XML"
      ]
    },
    {
      "category": "Backend",
      "items": [
        "Node.js",
        "Express.js",
        "Socket.io",
        "Cylon.js",
        "SQL (MySQL, PostgreSQL)",
        "Python"
      ]
    },
    {
      "category": "Database",
      "items": [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQL Query Optimization",
        "Data Warehousing"
      ]
    },
    {
      "category": "Tools",
      "items": [
        "Git",
        "Linux",
        "MS Office",
        "JIRA"
      ]
    },
    {
      "category": "Client Communication",
      "items": [
        "Stakeholder Management",
        "Requirement Workshops",
        "Presentations"
      ]
    }
  ],
  "projects": [
    {
      "name": "3 Level Smart Helmet",
      "technologies": [
        "Cylon.js",
        "Node.js"
      ],
      "description": "Led requirements gathering for a smart helmet project designed to improve safety standards on roads through integrated sensors and real-time data. Focused on ensuring user requirements were met and the project adhered to timelines and budgets."
    },
    {
      "name": "AI Voice Agent",
      "technologies": [
        "Langchain",
        "Node.js",
        "Twilio",
        "Deepgram"
      ],
      "description": "Developed a voice-based AI agent using Langchain and Node.js to interact with users via voice commands. Integrated Twilio for voice call functionality, enabling seamless communication for customer support and information retrieval. Focused on delivering an intuitive user experience with real-time voice processing."
    },
    {
      "name": "Real-Time Chat Application",
      "technologies": [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io"
      ],
      "description": "Worked closely with the development team to define user requirements and ensure the chat application met both business and technical goals."
    }
  ],
  "education": [
    {
      "degree": "Master of Computer Applications (MCA)",
      "institution": "Bharati Vidyapeeth",
      "graduation_date": "January 2024"
    },
    {
      "degree": "Bachelor of Computer Applications (BCA)",
      "institution": "Jagan Institute of Management Studies",
      "graduation_date": "March 2019"
    }
  ]
};

function showError(message) {
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
  setTimeout(() => {
    errorDiv.style.display = "none";
  }, 5000);
}

function loadSample() {
  document.getElementById("jsonInput").value = JSON.stringify(
    sampleData,
    null,
    2
  );
  updateResume();
}

function updateResume() {
  const jsonInput = document.getElementById("jsonInput").value;

  try {
    const data = JSON.parse(jsonInput);
    renderResume(data);
    document.getElementById("errorMessage").style.display = "none";
  } catch (error) {
    showError("Invalid JSON format. Please check your JSON syntax.");
  }
}

function renderResume(data) {
  const preview = document.getElementById("resumePreview");

  let html = `
        <div class="resume-header">
            <h1>${data.name || "Your Name"}</h1>
            <h2>${data.title || "Your Title"}</h2>
            <div class="contact-info">
    `;

  if (data.contact) {
    const contactItems = [];
    if (data.contact.address) contactItems.push(data.contact.address);
    if (data.contact.email) contactItems.push(data.contact.email);
    if (data.contact.website1) contactItems.push(data.contact.website1);
    if (data.contact.website2) contactItems.push(data.contact.website2);

    if (data.contact.phone) contactItems.push(data.contact.phone);

    html += contactItems.join(" | ");
  }

  html += `</div></div>`;

  // Summary
  if (data.summary) {
    html += `
            <div class="section">
                <h3>Summary</h3>
                <div class="summary">
                    <p>${data.summary}</p>
                </div>
            </div>
        `;
  }

  if (data.experience && data.experience.length > 0) {
    html += `<div class="section"><h3>Professional Experience</h3>`;
    data.experience.forEach((exp) => {
      html += `
                <div class="experience-item">
                    <div class="item-header">
                        <div class="position-company">
                            <h4>${exp.position}</h4>
                            <div class="company">${exp.company}</div>
                        </div>
                        <div class="duration">${exp.duration}</div>
                    </div>
            `;

      if (exp.responsibilities && exp.responsibilities.length > 0) {
        html += `<ul class="responsibilities">`;
        exp.responsibilities.forEach((resp) => {
          html += `<li>${resp}</li>`;
        });
        html += `</ul>`;
      }

      html += `</div>`;
    });
    html += `</div>`;
  }
  // Projects
  if (data.projects && data.projects.length > 0) {
    html += `<div class="section"><h3>Key Projects</h3>`;
    data.projects.forEach((project) => {
      html += `
                <div class="project-item">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
            `;

      if (project.technologies && project.technologies.length > 0) {
        html += `<div class="technologies">`;
        project.technologies.forEach((tech, index) => {
          html += `<span class="tech-tag">${tech}</span>`;
        });
        html += `</div>`;
      }

      html += `</div>`;
    });
    html += `</div>`;
  }
  //SKILLS
  if (data.skills && data.skills.length > 0) {
    html += `<div class="section"><h3>Technical Skills</h3><div class="skills-grid">`;
    data.skills.forEach((skillGroup) => {
      html += `
                <div class="skill-category">
                    <h5>${skillGroup.category}</h5>
                    <div class="skill-items">
            `;
      skillGroup.items.forEach((skill, index) => {
        html += `<span>${skill}</span>`;
      });
      html += `</div></div>`;
    });
    html += `</div></div>`;
  }

  // Education
  if (data.education && data.education.length > 0) {
    html += `<div class="section"><h3>Education</h3>`;
    data.education.forEach((edu) => {
      html += `
                <div class="education-item">
                    <div class="education-details">
                        <div class="degree-info">
                            <h4>${edu.degree}</h4>
                            <div class="institution">${edu.institution}</div>
                            <div class="graduation-date">${
                              edu.graduation_date
                            }</div>
                        </div>
                        ${
                          edu.cgpa || edu.gpa
                            ? `<div class="gpa">${edu.cgpa || edu.gpa}</div>`
                            : ""
                        }
                    </div>
                </div>
            `;
    });
    html += `</div>`;
  }

  // Additional Information
  if (data.additional_info) {
    html += `<div class="section"><h3>Additional Information</h3><div class="additional-info">`;

    if (
      data.additional_info.languages &&
      data.additional_info.languages.length > 0
    ) {
      html += `<p><strong>Languages:</strong> ${data.additional_info.languages.join(
        ", "
      )}</p>`;
    }

    if (
      data.additional_info.certifications &&
      data.additional_info.certifications.length > 0
    ) {
      html += `<p><strong>Certifications:</strong> ${data.additional_info.certifications.join(
        ", "
      )}</p>`;
    }

    if (data.additional_info.awards && data.additional_info.awards.length > 0) {
      html += `<p><strong>Awards/Activities:</strong></p><ul>`;
      data.additional_info.awards.forEach((award) => {
        html += `<li>${award}</li>`;
      });
      html += `</ul>`;
    }

    html += `</div></div>`;
  }

  preview.innerHTML = html;
}

function exportResume() {
  const resumeElement = document.getElementById("resumePreview");

  const opt = {
    margin: 0.5,
    filename: `${sampleData.name.replace(/\s+/g, "_")}_Resume.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(resumeElement).save();
}
function openResumePrintPage() {
  const resumeContent = document.getElementById("resumePreview").innerHTML;
  const styles = Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules)
          .map((rule) => rule.cssText)
          .join("");
      } catch (e) {
        return "";
      }
    })
    .join("");

  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
        <html>
        <head>
            <title>Resume - ${sampleData.name}</title>
            <style>${styles}</style>
        </head>
        <body onload="window.print()">
            ${resumeContent}
        </body>
        </html>
    `);
  printWindow.document.close();
}

// Auto-update on input (with debounce)
let updateTimeout;
document.getElementById("jsonInput").addEventListener("input", function () {
  clearTimeout(updateTimeout);
  updateTimeout = setTimeout(updateResume, 1000);
});

// Load sample data on page load
window.addEventListener("load", loadSample);
