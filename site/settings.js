const experience = require('./data/experience');
const projects = require('./data/projects');

const baseTitle = 'Will Smith - Personal Website';
module.exports.titles = {
  '/experience': `Experience | ${baseTitle}`,
  '/projects': `Projects | ${baseTitle}`,
  '/': baseTitle,
};

module.exports.googleAnalytics = 'UA-58068154-1';

module.exports.experience = experience;
module.exports.projects = projects;

module.exports.default = {};
