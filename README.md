# CashorTrade Front End Evaluation

Let's build a simple Alert list application

## Getting Started

To start, fork this repo and pull down to your local development environment. Install all dependencies:
```
$ npm i
```

Once everything is installed, make sure everything is working by running: 
```

$ npm run start
```
This will start the development server. You can view the application in the browser at [http://localhost:3000](http://localhost:3000). You should see a white page that says "Hello Welcome to CoT Alerts!" at the top.

## Expectations

This evaluation is to get a general idea of your coding abilities and styles using React + Typescript and ability to interpret business logic.

This is a simple concert ticket alert app. When a user creates an alert they are able to specify quantity and sections, so that they will receive a notification when a matching ticket becomes available.

In this example project, the alerts are already created in the mock api and can be fetched with a `GET` request to `/api/alerts`. We are using the `msw` library to mock the api and `@faker-js` to provide all the data you'll need for endless examples. The data being returned is typed as `IAlert[]` and the `IAlert` interface can be imported and used from the `src/types.ts` file.

## Requirements

* Please create at least one component. You may componentize more granularly as you see fit.
* Please use typescript
* Please store the alerts somewhere they can be accessed from another component (eg. React Context api. You are welcome to install another state-management library if you're more comfortable)
* Please format the event date correctly. `dayjs` is installed in this project.
* Please make sure the details bubble at the bottom accurately represents both the *quantity* and *sections* that a user would like to receive alerts for.
* Please include a "Load More" button at the bottom to fetch 20 more alerts, and append them to the existing alert list. You don't have to worry about passing offset or limit in this example.
* Please account for error handling.

## Keep in Mind

Focus on handling the different states that an alert might get returned in:
* Some events will have an `end` date while others won't. All events will have a `start` date.
* If `quantity` is `null`, the user would like to receive alerts for any quantity of tickets. Otherwise, it is a number.
* If `all_ga` is `true`, `ga_sections` will always be `null`.
* If `all_ga` is `false`, `ga_sections` will be an array of General Admission section names, like "floor," "pit," "fields," etc.
* `reserved` and `all_ga` can both be `true` - this means the user wants "Any Section."
* `reserved` can also be `true` with a list of `ga_sections`


## Alert Images
<img width="600" alt="Alert Example 1" src="https://www.dropbox.com/scl/fi/y45lbaj6uqyu85vkitpws/alert-1.png?rlkey=9ghv63s7w9ujunihaba56ad24&raw=1">
<img width="600" alt="Alert Example 2" src="https://www.dropbox.com/scl/fi/jwcpbl12fwqwd7bk5dw7n/alert-2.png?rlkey=rnbg7enke5x9s89nw00i7h5u2&raw=1">

## Styling The App

If you'd like you can just add all the css in the `App.css` file. If you want to orginize it differently or use the css modules pattern that's fine too. Please make the alert look like the example images above. No need to get the padding/spacing perfect but it should look close.

## Code Of Conduct

This is an open book evaluation. We don't expect you to have everything memorized, use the internet! Please, be honest with your submissions. If you feel like your're doing someting questionable you probably are, so don't :)

