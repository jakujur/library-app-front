module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        backgroundImage: theme => ({
            'background-image': "url('https://fv2-3.failiem.lv/thumb_show.php?i=emksqk7rg&view')",
        })
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
