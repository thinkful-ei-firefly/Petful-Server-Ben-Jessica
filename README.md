# Petful API

Created by:
Jessica Doyle
Ben Rosen

## Endpoints

The data in this API is implemented with a Queue. In addition to `enqueue()` and `dequeue()`, the Queue class has methods that can return the entire queue (`displayAll()`) or the next four items in the queue (`nextFour()`).

- /api/cats

`GET` requests will return the next four cats in the queue of cats for adoption.
`DELETE` requests will enqueue the next cat in the queue of cats for adoption.

- /api/dogs

`GET` requests will return the next four dogs in the queue of dogs for adoption.
`DELETE` requests will enqueue the next dog in the queue of dog for adoption.

- /api/users/cats
- /api/users/dogs
