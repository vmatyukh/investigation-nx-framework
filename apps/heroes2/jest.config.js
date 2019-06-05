module.exports = {
  name: 'heroes2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/heroes2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
