# SDDA ReactJS Project - Ethan

## Setup

1. Clone the repository\
   `git clone https://github.com/EthanWalton-snlm/ethan-react-training-project.git`
2. Navigate to the project directory\
   `cd ethan-react-training-project`
3. Install dependencies\
   `npm i`
4. Run the application\
   `npm run dev`
5. The application will be available on `http://localhost:5173`

## API

This app uses a single mockapi.io endpoint `https://68871b80071f195ca97f4670.mockapi.io/vehicles`

## Pages and Features

`/dashboard` - The default directory to view, search, and filter all insurance plans

`/vehicles/new` - Create a new insurance plan

`/vehicles/:id/edit` - Edit an existing insurance plan, where `:id` is the registration number of the vehicle.

`/quotes` - View and apply quotes for a vehicle

`/confirm/:registrationNumber` - View a confirmation page for an insurance plan

`/analytics` - View data regarding the colours and makes of vehicles

`/notfound` - Page not found
