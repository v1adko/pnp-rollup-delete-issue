# Rollup plugin delete issue

Reproduction repository showcasing issue with [rollup-plugin-delete](https://github.com/vladshcherbin/rollup-plugin-delete) with nested target in yarn2 PnP

---
When `target` to be removed contains _nested folder_ AND if the repository is utilizing [Yarn2 and Plug'n'Play](https://yarnpkg.com/features/pnp) the build fails

Steps to reproduce:
1) Clone repo via `gh repo clone v1adko/pnp-rollup-delete-issue && cd pnp-rollup-delete-issue`
2) Install depenencies via `yarn`
3) `cd packages/rollup`
4) `yarn build`

The build will fail with the following error:
```
[!] (plugin delete) TypeError: Cannot destructure property 'withFileTypes' of '(intermediate value)(intermediate value)(intermediate value)' as it is null.
TypeError: Cannot destructure property 'withFileTypes' of '(intermediate value)(intermediate value)(intermediate value)' as it is null.
    at PosixFS.readdirPromise
    ...
```

5) Go to [rollup.config.js](https://github.com/v1adko/pnp-rollup-delete-issue/blob/rollup-delete-issue/packages/rollup/rollup.config.js) and edit the `targets` to `dist1/*` (does not contain nested folder)
6) Rerun `yarn build` - script successfully executes and the contents of the folder are deleted

---
### Solution
In the `targets` config option specify an array as follows: `["dist2/**/*", "dist2/*"]` (order matters)

---
#### Alternative solution -> downgrade to v1.2.0

`yarn add -D rollup-plugin-delete@1.2.0`

---
To verify that script works as-is in regular node_modules linker:
1) `git co node-modules-working`
2) `yarn`
3) `yarn build`
