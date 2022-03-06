const args = ["dev"];
const opts = { stdio: "inherit", cwd: "api", shell: true };
require("child_process").spawn("yarn", args, opts);
