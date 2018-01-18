# Sample - React Project Ideas

## Table of Contents

* [ToDo App - component state](#todo-app---component-state)
* [ToDo App - redux or flux state](#todo-app---redux-or-flux-state)
* [Weather App - Ajax calls](#weather-app---ajax-calls)

## Todo App - component state

All Data should be stored in Component State and have following features

* Add Todo task
* Complete task
* Remove task task
* Search Todo's

## ToDo App - redux or flux state

All Data should be stored in Redux or Flux and have following features

* Add/Delete/Update Todo Categories
* when a category is selected it should display all tasks under it and following operation can be done over the list.
  * Add Todo task
  * Complete task
  * Remove task
  * complete all tasks
  * Search Tasks
  * App Should have minimum these components
    * App Component
    * Category List Component
    * Todo List Component
    * Todo View Component

## Weather App - Ajax calls

This task will cover your understanding about AsyncActions(Redux) and Api Calls. you can use [`openweathermap API`](https://openweathermap.org/current) . Your App should have following functionality.

* On Home Page Provive an input to enter the city name and getWeatherInfo Button
* When getWeatherInfo is clicked validate the City Name and make api call
  > Note: Use Async Actions, do not make api call inside component
* Fetch weather information from openweathermap or any other public weather api.
* Store weather data in Redux
* Display all weather information.
