/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQl",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://mangoitsol.com/furniture/graphql",
      },
    },
    {       
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        // Base URL of Wordpress site
        api: 'mangoitsol.com/furniture/',
  
        // set to false to not see verbose output during build 
        // default: true
        verbose: true,
  
        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: 'ck_c162f1ae665cae3a9610feb1a1ada8ed54f33b88',
          consumer_secret: 'cs_063102c096a18bf7562b523052e9cdcf679609f5',
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories', 'products/attributes'],
        }
      }
  ],
}
