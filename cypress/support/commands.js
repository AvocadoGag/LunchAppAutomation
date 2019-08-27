

Cypress.Commands.add('loginAs', (role) => {
    window.localStorage.setItem(`loggedUser`, '{"email":"admin@red.vln","admin":true,"displayName":"admin","id":1016,"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJlZC52bG4iLCJhZG1pbiI6dHJ1ZSwiaWQiOjEwMTYsImlhdCI6MTU2NjkwMTQxNSwiZXhwIjoxNTY3NTA2MjE1fQ.c8coKcIEBL5h-5eSlmBZ0T931mxJ3fwkWPAxouPOQJ8","__typename":"LoggedUser"}')
})

