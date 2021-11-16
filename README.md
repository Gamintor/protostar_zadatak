# Posts and comments project

This project displays posts and comments along with their matching users. It fetches data from [JSON Placeholder API](https://jsonplaceholder.typicode.com/). It also has a filtering by user's name and searching by post title functionality.  

## Build process:

### `Day One`

I started with learning many new properties of React Router. Most noteably I had to learn how to use latest v6 version of it.
I initialized my create-react-app and set up my working enviroment.
I organized the structure of my app.

### `Day Two`

I managed to create redirect so that my default url path is "/posts" and not just "/".
I started off with HomePage component where the majority of my app is rendered.
I basically built my UI and managed to send my first fetch request to JSON Placeholder URL and then saved that response to a component state which I then displayed using SinglePost component.
I only fetched posts today, comments were not fetched

### `Day Three`

I fetched comments and displayed them alongside their appropriate post.
I improved the UI, by making it more visually appealing.
I have put a link tag inside of my SinglePost component so that when you click on a specific post it gets opened in a new tab.
However I did not manage to pass props from one URL to another.

### `Day Four`

I realized that I cannot pass props or state from Link tag to another component if Link is opening a new window, instead I had to use useParams hook inside of a SinglePagePost component. useParams returns an id of a newly opened post and using that we can fetch all the neccessary data to display a single post.
I have created filter by userId functionality inside Toolbar component.

### `Day Five`

I fetched users as well and then displayed them alongside their posts.
I made a change to my filter so that now it displays names and not userIds.
I created search functionality inside of Toolbar component so that it searches for posts based on their title.
I have researched and implemented useRef hook so that it skips inital useEffect from executing inside of Toolbar component. The reason is, we don't
want to fetch the same posts all over again because we fetched them inside of HomePage component.

### `Day Six`

I have researched and implemented Typechecking with PropTypes. Now every component that receives props has a dedicated PropTypes section which checks
the type of props.
I have pushed my code to the Github repo.
