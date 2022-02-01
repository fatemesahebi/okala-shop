module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
};


const withFonts = require('next-fonts');

module.exports = withFonts({reactStrictMode: true});
