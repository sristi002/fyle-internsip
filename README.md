# Fyle Frontend Challenge
<p align="center">
  <img align=center src="https://github.com/othegagan/fyle-internship-challenge-23/assets/77300329/9db57de8-c8e8-4ebc-896d-f985f7a4b7df" alt="Logo" height="300">
</p>

<h3 align="center">
Web application built as a part of Fyle Frontend Internship Challenge 2024.
</h3>
<p align="center">
 It allows users to search for other  GitHub users by username and view their profile, including their repositories, followers, following, location.
</h4>
</br></br>
<img src="https://i.imgur.com/y4oV9VV.png" alt="colored line"  witdth="100px" align="left">
</br>




## Key Features 🔥
- 💫 `Sleek and Responsive Design:` Enjoy a seamless experience with a modern web application crafted using the power of Angular and the elegance of Tailwind CSS.
- 🌟 `GitHub API Integration:` Harness the capabilities of the GitHub API to effortlessly access user data and repositories.
- 🌓 `Adaptive Light and Dark Modes:` Seamlessly switch between light and dark modes for a personalized viewing experience.
- 🚀 `Efficient Search Cache:` Streamline your search experience with built-in cache, reducing API requests for faster data retrieval.
- 🌐 `User-Friendly Interface:` Navigate effortlessly with an intuitive user interface designed with you in mind.


# Steps for setup and usage

## Installation 💻

- Go to Angular offical page and follow the instructions to install latest `Angular CLI`
- Download all the file from the repo and keep it in a folder
- Run command `npm install` or `yarn install` (yarn is prefered)
- Running the above command will install all the required dependicies to run the application
- Go to https://github.com/settings/developers and create a new OAuth App
- After successfull creation of app, copy the CLIENT_ID and CLIENT_SECERT 

## Modification 📝

- Go to `environment.ts` in  `./src/environment`
- Replace the keys & save it. This would give access to more API requests.
```text
    CLIENT_ID = 'your client ID'
    CLIENT_SECRET = 'your client secret'
```
- Start the development server by running `ng serve` or `yarn start`

  
##

🔥💥💥💥💥 😎 Start exploring awasome `github users` and their `repos`💫



At this point application is ready visit `http://localhost:4200/` </br>
To use application, simply enter the username of any GitHub user into the search bar and hit enter. </br>
Use `CTRL + K` hotkey shortcut, quickly jump to search bar.

The application will then display the user's profile, including their repositories, followers, following, location, current working status, etc.

<img src="https://i.imgur.com/y4oV9VV.png" alt="colored line" align="center">

## Components 🤖
![image](https://github.com/othegagan/fyle-internship-challenge-23/assets/77300329/024cd418-07e4-42d2-9dfc-54208d5883ca)


## Testing

Before running the tests, please ensure you have installed the project dependencies using `npm install` or `yarn install`.

### Running Component Tests

To run component tests using the Angular CLI, follow these steps:

```text
ng test
```

This command will initiate the Karma test runner, which runs the component tests in your default web browser.

## Code Coverage Report

Measuring code coverage helps us understand how thoroughly your code is being tested. Below is a summary of the code coverage report for a component.

### Testing a Single Component

You can test a specific component and generate a code coverage report by running the following command:

```bash
ng test --include=path/to/your.spec.ts --code-coverage
```

For example, here is the command to test `user-search` component:

```bash
ng test --include=src/app/user-search/user-search.component.spec.ts --code-coverage
```

### Code Coverage Report

coverage report for the `user-search` component:

![Code Coverage Report](https://github.com/othegagan/fyle-internship-challenge-23/assets/77300329/e06c257b-835b-4a3d-a91b-7af80653854f)

coverage report for `API Service`:
![image](https://github.com/othegagan/fyle-internship-challenge-23/assets/77300329/3e973887-5dbf-43c4-bb9d-aa85410426ec)


<center>
<h3 align="center">💫 Designed and Developed with ❤️ by <a href="https://github.com/sristi002/">Sristi Agarwal</a> （づ￣3￣）づ╭❤️～ </h3>

</center>
