module.exports = {
  name: 'shared-web-components',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/web-components',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
