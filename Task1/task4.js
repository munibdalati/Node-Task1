const fs = require("fs");
const prompt = require("prompt");
const filePath = "output.txt";
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


async function main() {
  try {
    if (!fs.existsSync(filePath)) {
      console.log('The file "output.txt" does not exist.');
    }

    // File exists, so you can proceed with reading it
    rl.question(
      "Do you want to overwrite the file? (yes/no): ",
      async (answer) => {
        if (answer.toLowerCase() === "yes") {
          rl.question("Write output: ", async (content) => {
            await fs.promises.writeFile("output.txt", content);
            console.log("File overwritten successfully");
            fs.unlink("input.txt", (err) => {
              if (err) throw err;
              console.log('input.txt was deleted');
            });
            rl.close();
          });
        } else {
          console.log("The operation was cancelled");
          rl.close();
        }
      }
    );

    const data = await fs.promises.readFile(filePath, "utf8");

    // Your code for processing the file contents goes here
    // console.log(data);
    // console.log("the file exists");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(0);
  }
}

main();
