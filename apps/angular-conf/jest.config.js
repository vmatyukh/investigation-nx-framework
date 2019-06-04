module.exports = {
  name: 'angular-conf',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-conf',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
