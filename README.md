# Test and Live servers

For every app we have 'live' and 'test' server. Whenever we add new content, it will be throughly tested in 'test' server. If everything is fine, we will move the content to 'live' server.

Find below the urls of 'live' and 'test' servers.

pschool (kg-5th)

```
live: www.pschool.in
test: dev.pschool.in
```

hindi

```
live: hi.pschool.in
test: phindi.netlify.app
```

tamil

```
live: www.palagutamil.in
test: tamil2.netlify.app
```

bengali

```
live: bn.pschool.in
test: bengali.netlify.app
```

# App Version and cache issue

Every release will be identified with a version number. It can be found at the bottom of the FAQ page.

While testing new release, please ensure that you are testing on the latest version.

Our app is Progressive Web App (PWA). For fast loading of the app, the files will be saved and retrieved locally. Due to this the latest files will not be available immediately.

To get the lastest version, first open the url and check the version. If the version is 'old', then please wait for 1 min. In this time the new version will be downloaded in the background. Then close all browser windows. Now open the app in the new url and check the version. You will get the latest content.

# VS Code

We request content developers to work in VS Code rather than directly editing in github.

It offers the below benefit.

1. Good look and feel. Color coding. Easy to shuffle between files.
2. Easy to navigate within a file. We can expand and collapse blocks. Missing brackets can be easily fixed.
3. Global search. If we find a common spelling mistake, we can run a global search and correct everywhere. Eg: We misspelt 'arithmetic' as 'arithmatic' in many places. We can quick search a similar type of activity.
4. It show js issues, if any.
5. Auto format md and js.
   a. multiline text
   b. numbered list format
6. Split Window View

# Working with git/github locally.

1. First we need to config on the destop using our email and password.
2. Before starting the work we need to take a 'Pull'.
3. After completing the work we need to 'Commit' the changes. Before committing we need to check we are not accidently committing any extra files. Do a self review before committing.
4. After committing, take a 'Pull' and do a 'Push'.
5. After pushing, visit the github website and ensure your changes are updated. Sometimes the push will fail and we assume everything is fine.

# templates

- [Passage](config/templates/passages.md)
