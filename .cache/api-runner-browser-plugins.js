module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"jonkri-blog","short_name":"starter","start_url":"/","background_color":"#333","theme_color":"#343434","display":"minimal-ui","icon":"src/images/icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"e7a872e454e049d3882cea03d19c811b"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
