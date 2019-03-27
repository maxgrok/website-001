module.exports = {
  siteMetadata: {
    title: "Peter Turtle Wolf",
    author: "Peter Turtle Wolf",
    description: "Yoga For The Body, Mind, and Soul"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Peter Turtle Wolf',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.jpeg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
