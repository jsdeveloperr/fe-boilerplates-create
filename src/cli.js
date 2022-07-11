import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main";

async function promptForMissingOptions(options) {
  const defaultTemplate = "React";
  const defaultPackage = "yarn";

  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Create a project frontend boilerplate",
      choices: ["React", "React-ts", "Vue", "Vue-ts", "Svelte", "Svelte-ts", "Preact", "Next", "Next-ts"],
      default: defaultTemplate
    });
  }

  if (!options.git) {
    questions.push({
      type: "confirm",
      name: "git",
      message: "Do you want a git to be initialised?",
      default: false
    });
  }

  questions.push({
    type: "list",
    name: "packageManager",
    message: "Select a package manager",
    choices: ["yarn", "npm"],
    default: defaultPackage
  });

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
    packageManager: options.packageManager || answers.packageManager
  };
}

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--git",
      "-y": "--yes"
    },
    {
      argv: rawArgs.slice(2)
    }
  );

  return {
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false,
    packageManager: ""
  };
}

export const cli = async args => {
  const options = parseArgumentsIntoOptions(args);
  const questions = await promptForMissingOptions(options);

  await createProject(questions);
};
