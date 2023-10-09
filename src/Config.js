const isProduction = process.env.NODE_ENV === 'production';

const config = {
    basename: isProduction ? '/valarpirai.nagagroups.in' : '/',
};

export default config;