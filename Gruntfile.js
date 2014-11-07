'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['models/**/*.js', 'server.js', 'routes/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['routes/*.js', 'server.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/*.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);

  grunt.registerTask('default', ['test']);
};
