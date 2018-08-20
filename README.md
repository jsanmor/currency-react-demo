# CurrencyFair App

Demo app done with React

Public demo  https://jsanmor.github.io/currency-react-demo/

## Launch

`npm i`

`npm start`

### Tests 
`npm test `

## Considerations
In this demo I have been more focus in desing than funcionality. Unfortutunately I didn't have time enought for made the app as I desired.

### Responsive

I didn't have any indications about what to do in mobile view with sidebar, so I have shown it on the top.

Maybe would be better move under tabs, but in this case, I would have to replicate the react code, and show one element or other using CSS media query.

Inside the modal buttons are biggers than in mobile view to help users press it correctly.

I have used BEM approach for CSS using SCSS preprocesor.

### React
I wanted to use redux, but finally I didn't have time.  I will add in a future for my personal portfolio. 

All data is static inside HTML code,  instead of take it from JavaScript variables, but it was the last step that I couldn't complete.

I tried to make reusable components that maybe could be used in others scenarios, like CurrencyLabel or tabs components.

### Future work
* Get data from variables. 
* Add redux for state management like "show modal"