const args = ["dev"];
const opts = { stdio: "inherit", cwd: "ui", shell: true };
require("child_process").spawn("yarn", args, opts);
