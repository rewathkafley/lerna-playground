module.exports = {
  name: 'forms',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/forms',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
