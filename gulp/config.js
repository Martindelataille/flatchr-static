var dest = "./dist";
var src = './src';

module.exports = {
  browserSync: {
    proxy: "http://localhost:8080",
    host: "192.168.33.10",
    port: 3000,
    open: "external"
  },
  sass: {
    src: src + "/sass/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  fonts: {
    src: src + "/fonts/**",
    dest: dest + "/fonts"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  iconFonts: {
    name: 'Gulp Starter Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    sassDest: src + '/sass',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/main.js',
      dest: dest,
      outputName: 'main.js',
      // Additional file extentions to make optional
      extensions: ['.js']
    },
    {
      entries: src + '/js/plugins.js',
      dest: dest,
      outputName: 'plugins.js',
      // Additional file extentions to make optional
      extensions: ['.js']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
