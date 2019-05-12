# Missing deps failing with pnpm

This shows how to handle modules with missing dependencies with pnpm. More specifically, the module `enzyme-adapter-react-16` has a dependency of `has` that is not specified in it’s package.json. It has a peer dependency on enzyme, which has `has` in its dependencies, so that’s why this works when the node_modules are flattened as it is with npm and yarn, but not with pnpm. A temporary solution is to add a pnpmfile which adds this dependency to `enzyme-adapter-react-16`, a better solution is to fix it in the package.json of `enzyme-adapter-react-16`.

