# Project 3 Expenses API with Rails and Backbone MV*
* Heroku Main View: https://mysterious-depths-4703.herokuapp.com/
* Heroku RESTful API: https://mysterious-depths-4703.herokuapp.com/api/expense


## Overview
Simple Budget is an application that consists of a RESTful API using Ruby on Rails and Backbone MV* CRUD application.

Too many budget apps are too busy.  They make it to where you do not want to deal with entering transactions.  Too much navigation, busy screens that hide the content.  Simple Budget allows users to keep track of a budget and transactions in a simplified form.  The first item displayed shows how your goals are based on the day, week, and month.  Filtering is done, by using common keywords.  No need to create categories or follow built in categories.  Goals are broken down by three groups, needs, niceties, and wants.  Needs are expenses that have to be paid, rent/mortgage, utilities, food, etc...  Niceties are items that make life easier.  Wants are items that you choose to pay for that you don't have too.

## Getting Started

In order to use the application a user needs to register an account and create a username and password.  Upon logging in, the user will see the goals, green showing below a goal and red reflecting a goal has been exceeded.

## Wireframe
![wireframe] (http://i.imgur.com/7nTdj9t.png)

## Technology

### RESTful API
* Ruby on Rails  
  *Provides the framework for the RESTful API and Views*
* Heroku  
  *Online Application Hosting*
* Postgres  
  *SQL Database*
* CORS::RACK  
  *Ruby gem to enable Cross-Origin Resource Sharing*

### Backbone MV* Application
* Backbone  
  *MV Library*
* Underscore  
  *Backbone Dependency and Templating Framework*
* jQuery  
  *Javascript Library for DOM manipulation*
* jQueryUI  
  *Javascript Library for adding User Interface functionality*
* jQuerydateFormat  
  *Javascript plugin for formating dates*
* Bootstrap  
  *CSS Framework*


## Installation Instructions

The following will need to be installed prior to running the application.

Install Postgres

## Outstanding Issues

* User Authentication and Session Management not functional
* Add API key to secure RESTful API
* Add landing page for title and login

## Version 2.0

The next version will include features that have not been completed for version 1.  Also, the following features are slated for addition:

  Comparing budgets to other users, anonymously
  Detailed reports showing how and what money is being spent on
