# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- The dispatch function then calls the action
- The action returns the action object to the reducer
- Then, based on the action that is returned to the reducer, the appropriate calculation / action is performed.
  ...

- TotalDisplay shows the total plus 1.
