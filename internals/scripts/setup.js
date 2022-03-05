function setupUI() {
  const opts = { stdio: "inherit", cwd: "ui", shell: true };
  require("child_process").spawn("yarn", opts);
}

(() => {
  setupUI();
})();
