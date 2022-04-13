
# web-components-review

This project is a prototype to test the behavior with native "web components" modules introduced in 2011 by Alex Russell at the [Fronteers Conference](https://fronteers.nl/congres/2011/sessions/web-components-and-model-driven-views-alex-russell).

## How does it work?

In the package.json file there are two dependencies:

 - [web-components-review-module-loremipsum](https://github.com/pablotoledom/web-components-review-module-loremipsum)
 - [web-components-review-module-table](https://github.com/pablotoledom/web-components-review-module-table)

These dependencies are native examples of custom elements web components, both will be rendered using Shadow Root.

Once you install the dependencies and start the project, you will be able to test the scopes provided by the use of custom elements and you will be able to draw conclusions if implementing this technology is useful for you.

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.  

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.