# Simple-Modal-in-React
Created with CodeSandbox

Firstly,in the app component,I have used useState hook of a boolean value defaulted to false for these purposes
1.To conditionally render the modal based on its value
2.To pass it as props to the Modal component and to toggle it there when the user clicks on the close modal button

In order to open the modal,I have used a button.When its clicked, the state will be changed to true and the modal will be rendered in the app component.

In the Modal component,I have wrapped the entire content in a div in order to apply the overlay styles of making the background not visible to the user when the modal was opened.And in the modal, I have used a button to close the modal and the data to the modal will be passed as props, so that it can be reusable.

Also,when the user clicks on the overlay layout outside of the modal, the modal will be closed.Added the onclick handler for that overlay div which only closes when the user clicks on the overlay div but not on the modal body.
