# component-bits
A collection of components that can be used for future projects, basic templates.
Make sure before you run it that you complete the following steps:
- npm install --dev @semantic-ui-react/css-patch
- Add it as a postinstall script to your package.json
{
 "scripts": {
   "postinstall": "semantic-ui-css-patch"
 }
}
- Run npm install again (so that it runs the patch)