## Ravenous Project

Part 1 Ravenous Part 1: Creating Project & Components

#Project Requirements

Build the restaurant recommendation application using React
Utilize HTML, CSS, and Javascript as part of the tech stack
Version control your application with Git and host the repository on GitHub
Write a README (using Markdown) that documents your project, including:
The purpose of your project
Technologies used
Features
Future work
Features

The website allows users to scroll up and down to navigate through its content.
Users can simulate a search by typing in the search bar
A list of mock restaurant data is presented to the user.

Set up your local environment

1. Create a React app named ravenous with your preferred terminal.
   Run your application locally to see what it looks like in the browser.

Set up version control

2. Set up the folder you created previously to be a Git repository (if you used create-react-app above, you may skip this step because create-react-app automatically configures the local Git repository).

Now, you need to set up a remote origin and push the initial files to a repository on GitHub. You should be consistently committing your changes throughout the project. Make sure to have meaningful commit messages.

Build the Business Component

3. Create a Business component. The component will represent how a business (a restaurant) in Ravenous will be formatted and styled.

Each Business component should display an image, name, address, city, state, zipcode, category, rating, and review count.

For now, the component can be static — you’ll add additional functionality later.

Add a Sample Business

4. For the Business component, create a hardcoded business that can be used to generate a list of fake businesses and simulate the website’s functionality.

Eventually, the hardcoded business will be replaced with dynamic data retrieved from the Yelp API.

Build the Business List Component

5. Create a BusinessList component that displays a collection of businesses. The BusinessList component should utilize the Business component multiple times to generate the list.

Build the Search Bar Component

6. Create a SearchBar component that users can use to search for businesses on the Yelp platform.

The search bar should contain two inputs, one for the user’s search terms and the selected location. Don’t forget a search button as well.

The search bar should also offer sorting options such as Best Match, Highest Rated, and Most Reviewed. This functionality will be fully incorporated in a later part of the project, but for now, concentrate on building the buttons and the structure needed to communicate with the Yelp API.

Review the details on what the API expects to receive, and follow the formatting and naming convention set by the API documentation.

Style Your Components

7. Make your components visually appealing and consistent by styling them. Create styles for the Business, BusinessList, and SearchBar components using CSS modules.

You can either write your own CSS modules or use a pre-existing CSS framework that supports CSS modules.

Review Your Project

8. Briefly review what you built:

A Business component that simulates a single business
A BusinessList component that simulates a list of single businesses
A SearchBar component that will be used in the future to search for business
Ensure that the final product is a simulation of how the Ravenous project will look and work. Some functionality (like querying the Yelp API) is currently missing, but you’ll build it in the upcoming projects.

After you’re done with your project, visit our forums to compare your project to our sample solution code. Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.
