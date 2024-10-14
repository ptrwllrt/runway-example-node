

# Runway Example node App

This is an example app demonstrating how to deploy a node app
to [runway](https://www.runway.horse/).

* clone this repo, and navigate into that directory
* `runway app create`
* `runway app deploy`
* `runway open`

You can then deploy changes by `git commit`ing them, and running `runway app
deploy` again.

The important parts to make this work are all in `package.json`:

* any `dependencies` are installed during the build
* the `engines.node` version is used to run the app
* `scripts.start` is what is run

