import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'admin': '../../silverstripe/admin/client/src', // Vite can't hanlde JSX in .js files which is convention in admin
      'boot': 'client/src/boot',
      'components': 'client/src/components',
      'lib': 'client/src/lib',
    }
  },
  esbuild: {
  },
  build: {
    outDir: 'client/dist/js',
    minify: true,
    lib: {
      name: 'shortcodeable-textfields',
      entry: ['client/src/boot/index.js', 'client/src/styles/editableShortcodes.scss'],
      formats: ['cjs'],
      fileName: (format) => format === 'cjs' ? 'js/[name].js' : 'css/[name].css',
    },
    rollupOptions: {
      external: ['reactstrap'],
      output: {
        globals: {
          'reactstrap': 'Reactstrap'
        }
      }
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        file: 'client/src/styles/editableShortcodes.scss', // LegacyFileOptions - doesn't trigger Vite, so is useless
        includePaths: [ // deprecated. interface: LegacySharedOptions
          'styles',
          'vendor/silverstripe/admin/client/src/styles',
          '../admin/client/src/styles',
          '../../silverstripe/admin/client/src/styles',
        ],
        loadPaths: [ // should work but doesn't. interface: Options
          'client/src/styles',
          'vendor/silverstripe/admin/client/src/styles',
          '../admin/client/src/styles',
          '../../silverstripe/admin/client/src/styles',
        ]
      }
    }
  }
});
