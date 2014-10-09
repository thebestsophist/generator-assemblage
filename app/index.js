'use strict';
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    yosay = require('yosay');

var AssemblageGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      "Welcome to the Assemblage generator!"
    ));

    var prompts = [{
      name: 'projectName',
      message: 'What would you like to call this project?',
      default: 'Project Awesome'
  }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('_Gruntfile.coffee', 'Gruntfile.coffee');
      this.directory('assets','app/');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = AssemblageGenerator;
