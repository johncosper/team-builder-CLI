const path = require("path");
const fs = require("fs");

const templatesDirectory = path.resolve(__dirname, "./templates");

const generate = employees => {
  const empArray = [];

  empArray.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  empArray.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
  );
  empArray.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
  );

  return generateMain(empArray.join(""));

};

const generateManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDirectory, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const generateEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDirectory, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const generateIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDirectory, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const generateMain = empArray => {
  const template = fs.readFileSync(path.resolve(templatesDirectory, "main.html"), "utf8");
  return replacePlaceholders(template, "team", empArray);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = generate;
