module.exports = {
  name: 'forms2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/forms2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
