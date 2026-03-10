import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  const prod = options.env?.NODE_ENV !== 'development';

  return {
    entry: ['./src/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    // noExternal: [/(.*)/],
    target: ['node22'],
    minify: prod,
    // minifyIdentifiers: false,
    // minifyWhitespace: prod,
    // minifySyntax: prod,
    treeshake: prod
  };
});
