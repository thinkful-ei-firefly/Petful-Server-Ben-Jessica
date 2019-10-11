# Petful API

Created by:  
Jessica Doyle  
Ben Rosen

This is the API for the Petful App:  
Live Link: https://petful-client-ben-jessica.jessicaedoyle.now.sh/  
Repo: https://github.com/thinkful-ei-firefly/Petful-Client-Ben-Jessica

## Endpoints

The data in this API is implemented with a Queue. In addition to `enqueue()` and `dequeue()`, the Queue class has methods that can return the entire queue `displayAll()` or the next four items in the queue `nextFour()`.

- /api/cats

`GET` requests will return the next four cats in the queue of cats for adoption.

`DELETE` requests will dequeue the next cat in the queue of cats for adoption as well as the next user in the queue of cat users.

- /api/dogs

`GET` requests will return the next four dogs in the queue of dogs for adoption.

`DELETE` requests will dequeue the next dog in the queue of dogs for adoption as well as the next user in the queue of dog users.

- /api/users/cats

`GET` requests will display all of the users who want to adopt cats currently in the queue.

`POST` requests will enqueue a new user who wants to adopt cats.

- /api/users/dogs

`GET` requests will display all of the users who want to adopt dogs currently in the queue.

`POST` requests will enqueue a new user who wants to adopt dogs.
