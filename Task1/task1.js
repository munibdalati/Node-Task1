const fs = require("fs");

async function main() {
  const filePath = "input.txt";

  try {
    if (!fs.existsSync(filePath)) {
      console.log('The file "input.txt" does not exist.');
    }

    // File exists, so you can proceed with reading it
    const data = await fs.promises.readFile(filePath, "utf8");

    // Your code for processing the file contents goes here
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(0);
  }
}

main();
