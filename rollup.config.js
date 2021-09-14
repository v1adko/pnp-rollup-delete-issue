import del from "rollup-plugin-delete";

export default {
  input: "./index.ts",
  plugins: [del({ targets: "dist2/*" })],
};
