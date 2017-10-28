### taskFlower
A small to-do list I created for a job interview

## Purpose

React / Redux Coding Challenge - Task Managment App

## UI Interactions

User Interface requirements by feature

# Task List

Render ordered list of tasks. Load the list when the app starts.
Task title should be editable and set in focus when a new task is added
“New task” button will create a new task and place it on top of the list

# Save Button

Is disabled by default
Is set enabled when current state of the list doesn’t match it’s initial state (task has been added, deleted, or updated)
On click will send a POST request to the server with current state of the list.

# Task Entry

“trash” button deletes the task from the list

# Notifications

Show success alert after successful request
Alert message “x” button will remove the alert


## Installation

`npm install`
`npm compile`
`npm start`

Then go to http://localhost:3000/
