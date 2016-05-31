module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build1: {
        src: 'src/Grunt.js',
        dest: 'build/G.min.js'
      },
      build2: {
        src: 'src/in.js',
        dest: 'build/I.min.js'
      }
    },
    concat: {
      options: {
        separator: '-----',
      },
      dist: {
        src: ['build/G.min.js', 'build/I.min.js'],//['build/*.js']
        dest: 'build/all.min.js'
      }
    },
    watch: {
        files: ['src/*.js'],
        tasks: ['uglify','concat']
    }
  });

  // 加载包含任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');//压缩
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');//合并

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','concat','watch']);

};