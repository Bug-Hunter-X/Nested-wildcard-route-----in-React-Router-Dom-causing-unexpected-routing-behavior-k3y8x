# Nested Wildcard Route Bug in React Router Dom

This repository demonstrates a bug encountered when using nested routes with wildcard parameters (*) in React Router Dom v6.  The issue arises when combining a route with a wildcard parameter with other routes that might share a common prefix.  Navigating between such routes leads to unexpected behavior.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Navigate to `/users/123/profile`.
5. Navigate to `/users/456`

You will observe that navigating to `/users/456` doesn't fully update the URL and component, instead of the correct `User` component displaying the data for user 456, the previous data for user 123 persists.

## Solution

The solution involves restructuring the routes to avoid the conflict between the wildcard parameter and other routes with a similar path prefix.  Refer to `bugSolution.js` for a demonstration of the corrected route configuration.
