module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/main.css': 'sass/main.sass'
            }
        }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images_orig/',
                src: ['**/*.{png, jpg,jpeg, gif}'],
                dest: 'new-images/'
            }]
        }
    },



    watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        }
    },

    browserSync: {
        files: {
          src : [
              'assets/css/*.css',
              'assets/img/*',
              'assets/js/*.js',
              '**/*.html'
           ],
        },
        options: {
            watchTask: true
        }
    },


  });

  //Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');


  //Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);

};
