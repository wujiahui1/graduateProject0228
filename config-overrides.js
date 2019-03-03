const { override, fixBabelImports, addLessLoader } = require('customize-cra');
console.log("运行这里了吗");
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'true',
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#000000' },
    }),
);