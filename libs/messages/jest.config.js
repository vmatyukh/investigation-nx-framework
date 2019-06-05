module.exports = {
  name: 'messages',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/messages',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
