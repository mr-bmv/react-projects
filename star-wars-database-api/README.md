# Start Wars DataBase

**Contents:**

- [Start Wars DataBase](#start-wars-database)
  - [Structure of Application](#structure-of-application)
  - [NavBar](#navbar)
  - [Random Planet Block](#random-planet-block)
  - [Buttons Block](#buttons-block)
  - [List of Items](#list-of-items)
  - [Details of Item](#details-of-item)

## Structure of Application

Start create in 08/03/2020

This application works with Star Wars API to catch some data about persons,
starships and planets.

Application contain next main blocks:

- NavBar
- Random Planet Block
- List of Items
- Details of Item

There is a Spinner for each block which are using request to Star Wars API to
provide information for user about status of request.

## NavBar

TODO

## Random Planet Block

This block works independently of other block and provide information about
random planet from Star Wars API and contain picture, name of it and some
details.

Block change information every 3 seconds.

Block could be hide by [Toggle button](#buttons-block).

## Buttons Block

- Toggle button - with help this button
  [Random Planet Block](#random-planet-block) could be hide and shown again.
  Name of button depends of hiding status.
- Error button - create for simulate an Error and catch this Error with help
  componentDidCatch.

## List of Items

Information in this block depends from mode of [NavBar](#navbar) and contain
list of names for items.

## Details of Item

Information in this block depends from [List of Items](#list-of-items) Block and
provide information about selected item from Star Wars API and contain picture,
name of it and some details.
