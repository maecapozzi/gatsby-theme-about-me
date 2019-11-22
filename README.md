# gatsby-theme-about-me

A gatsby theme to quickly build about pages for your blog. While this theme is currently live at https://maecapozzi.com/about-me, it's still in beta, and as such has some kinks to work out!

If you'd like to use this package: 

Install it:

```bash
yarn add `gatsby-theme-about-me`
```
Add it to your `gatsby-config.js`

```js
plugins: [
 {
  resolve: `gatsby-theme-about-me`,
    options: {
      contentPath: `data`,
      imagePath: `images`
    }
 }
]
```

The `contentPath` should point to a directory named `data` in your filesystem. Under `/data`, add a json file called `about.json`. For the theme to work, it needs to follow this structure: 

```json
{
  "id": "1",
  "name": "About Me",
  "bio": "Hi, I'm Mae Capozzi. Welcome to my corner of the internet. I'm a Brooklyn-based software engineer interested in design systems, component libraries, and the JAMStack.",
  "sections": [
    {
      "id": "1",
      "header": "Find me on the internet",
      "links": [
        {
          "name": "Github",
          "link": "https://github.com/maecapozzi/"
        },
        { "name": "Twitter", "link": "https://twitter.com/MCapoz" },
        { "name": "Email", "link": "mailto:maecapozzi@gmail.com" }
      ]
    },
    {
      "id": "2",
      "header": "Open Source Projects",
      "links": [
        {
          "name": "gatsby-theme-about-me",
          "link": "https://github.com/maecapozzi/gatsby-theme-about-me"
        },
        {
          "name": "react-scroll-activator",
          "link": "https://github.com/maecapozzi/react-scroll-activator"
        }
      ]
    },
    {
      "id": "3",
      "header": "Work",
      "links": [
        {
          "name": "501 Auctions"
        },
        {
          "name": "Thrive Global"
        },
        {
          "name": "InRhythm"
        },
        { "name": "Harry's" }
      ]
    }
  ]
}
```

The `imagePath` should point to a directory called `images`. Add an image under `/images` called `profile-pic.jpg`. That should allow you to render an image.



If you find any issues or have any suggestions, feel free to open an issue, and I'll do my best to get back to you!
