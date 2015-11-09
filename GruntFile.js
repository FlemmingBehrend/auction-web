'use strict';

module.exports = function (grunt) {

    var path = require('path');

    require('load-grunt-tasks')(grunt, {scope: ['dependencies', 'devDependencies']});
    grunt.registerTask('default', ['jshint', 'jscs', 'karma']);
    grunt.registerTask('livereload', ['default', 'connect:webserver', 'watch:webserver']);

    grunt.initConfig({
        conf: {
            appRoot: 'src/'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                ignores: [
                    '<%= conf.appRoot %>bower_components/**/*.js'
                ]
            },
            all: ['Gruntfile.js', '<%= conf.appRoot %>**/*.js']
        },
        jscs: {
            src: '<%= conf.appRoot %>**/*.js',
            options: {
                config: '.jscsrc',
                verbose: true,
                excludeFiles: ['node_modules/**', '<%= conf.appRoot %>bower_components/**/*.js']
            }
        },
        karma: {
            unit: {
                configFile: 'karma-conf.js'
            }
        },
        watch: {
            webserver: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= conf.appRoot %>app/index.html',
                    '<%= conf.appRoot %>app/auction.html',
                    '<%= conf.appRoot %>app/welcome/*.html',
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729,
                debug: false
            },
            webserver: {
                options: {
                    open: true,
                    base: ['<%= conf.appRoot %>']
                }
            }
        }
    });
};