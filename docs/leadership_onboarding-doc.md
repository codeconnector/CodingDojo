# Coding Dojo Onboarding Guide

Table of Contents
=================

* [Introduction](#introduction)
* [Initial Steps](#initial-steps)
* [Weekly Agenda](#weekly-agenda)
* [Issues](#issues)
* [Dojo Prep](#dojo-prep)


Introduction
============

### First off... Welcome to the Coding Dojo

We are stoked to have you join the maintainers! We will do anything we can to help you get up to speed so feel free to reach out to any one of us at any point.
This document is our onboarding guide for new maintainers of the Coding Dojo. This is a living document which is subject to be updated periodically.


Initial Steps
=================

- Clone the Coding Dojo repository
  - As a maintainer, you do not need to keep a fork, but you should use PRs for all but the most minor changes (such as updating the NEXT UP listing)
- Review the project [README](https://github.com/codeconnector/CodingDojo/blob/main/README.md)
- Add yourself to the [list of reviewers](https://github.com/codeconnector/CodingDojo/blob/main/REVIEWERS.md)
- Review [past challenges](https://github.com/codeconnector/CodingDojo/tree/main/challenges)
- Review the [issues](https://github.com/codeconnector/CodingDojo/issues) to get a sense of upcoming challenges
- Take some time to look over past commits/PRs/and merges to get a feel for the typical flow of things


Weekly Agenda
=============

Live meetups are held at 12pm CST every Tuesday for the Coding Dojo. As a maintainer, you will participate in identifying new Drivers, serving as a Host or Navigator, submitting and selected weekly challenges, assisting Drivers with setups or PRs, and reviewing/merging PRs. Ideally, Drivers, Hosts, and Navigators are scheduled a few weeks out on the [NEXT UP](https://github.com/codeconnector/CodingDojo/blob/main/NEXT_UP.md) listing. Things may not always be planned out exactly or well in advance, so be prepared to go with the flow. Typically you can expect one of the following scenarios:

- The happy path: Driver, Navigator, Host, and Challenge are all scheduled: If this is the case, and you're not serving in one of these roles, you may participate as a member of the Mob.

- No Driver, Navigator, or Challenge scheduled: If nobody has been scheduled, or no one volunteers to drive, we the maintainers will internally pick a Driver and Navigator among ourselves for the upcoming meetup.

- Driver and Navigator scheduled: At this point all that needs to be decided is which challenge will be used. These may come from the [issues](https://github.com/codeconnector/CodingDojo/issues), or a new challenge may be selected if there is no issue that matches the current level of the Driver.

Strive to have a Driver, Navigator, Host and challenge selected on the Friday prior to the meetup.


Issues
======

The issues is where we store proposed challenges. As a maintainer, it is your responsibility to help maintain a healthy number and diversity of issues for upcoming challenges. New proposed challenges should be suitable for a beginner to novice programmer to tackle, with assistance, within the hour scheduled for the meetup. When adding a new proposed challenge, it is best practice to provide a reference implementation/solution (in the CodeConnector Slack) for that challenge. This allows the Navigator for that challenge to easily see at least one approach for tackling that challenge.


Dojo Prep
=========

If you are asked (or volunteer) to create the new challenge setup for a meetup, you should:

- Create a local branch for creating the challenge setup
- Check for previous challenges using the Driver's chosen language and mirror the setup you find there
- If there is no previous challenge in the chosen language, you will need to create a new challenge setup, including:
  - A .gitignore
  - A `solutions` directory
  - A `challenge.md` describing the challenge
  - A code file containing a minimal amount of setup for the challenge (such as an empty function)
  - Unit tests for the challenge
  - Some relatively user-friendly mechanism for running the tests, described in the `challenge.md`
- Submit this challenge to the repo as a PR

PRs for challenge setups should ideally be submitted the Friday before the meetup.

If you are the Navigator for a meetup. you should contact the Driver the day before or day of the meetup to ensure that the Driver (a) will be available and participating during the meetup and (b) is able to pull the challenge and run the (failing) unit tests ahead of time.
