module.exports = {
  "*.{js,jsx,ts,tsx,json}": (filenames) => [
    `biome format --write ${filenames.map((f) => `"${f}"`).join(" ")}`,
  ],
};
