module.exports = {
  name: 'tour-of-heroes',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tour-of-heroes',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
