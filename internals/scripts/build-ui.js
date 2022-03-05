function reactBuildUI() {
  return new Promise((resolve, reject) => {
    try {
      const args = ["build"];
      const opts = {
        stdio: "inherit",
        cwd: "ui",
        shell: true,
      };
      require("child_process")
        .spawn("yarn", args, opts)
        .on("close", (code) => {
          resolve(`[REACT_BUILD] exited with code ${code}`);
        });
    } catch (err) {
      reject(err);
    }
  });
}

(async () => {
  await reactBuildUI();
})();
