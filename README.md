This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

API Details

https://nodejs-feedback-app.herokuapp.com/getFeedbackData
Request Method: GET
// This API will respond will all question data grouped by reaction.

https://nodejs-feedback-app.herokuapp.com/checkFeedback/saurabh 
Request Method: GET
//This API is used to check that user is already submitted the feedback or not.

https://nodejs-feedback-app.herokuapp.com/submitFeedback
Request Method: POST
//This API is used to store the user feedback.

Dataset-------------
{
	"username": "saurabh",
	"stopSurvey": true,
	"questions": [
		{
			"id": "5f664438e7179a6ea51f9bbf",
			"answer": "Hello this is answer"
		},
		
		{
			"id": "5f66449be7179a6ea51f9bc5",
			"answer": "No You can't help me"
		}
	]
}
