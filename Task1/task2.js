
const fs = require("fs");
const prompt = require('prompt');


async function main() {
  const filePath = "output.txt";

  try {
    if (!fs.existsSync(filePath)) {
      console.log('The file "output.txt" does not exist.');
    }

    // File exists, so you can proceed with reading it
    prompt.start();
    const userChoice = await prompt.get(["do you want to overwrite the file"]);
    if (userChoice["do you want to overwrite the file"] === "yes") {
      const content = await prompt.get(["write output"]);
      await fs.promises.writeFile("output.txt", content["write output"]);
    }

    const data = await fs.promises.readFile(filePath, "utf8");

    // Your code for processing the file contents goes here
    console.log(data);
    console.log("the file exists");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(0);
  }
}

main();
