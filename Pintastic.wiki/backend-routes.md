# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`

* `GET /api/users/:user_id` get info for profile page 
*  `POST /api/users` sign up 

### `session` 

* `POST /api/session` sign in 
* `DELETE /api/session` sign out

### `boards` 

* `GET /api/boards` show all the users boards
* `POST api/boards` create a board
* `GET api/boards/:board_id` show a single board 
* `PATCH api/boards/:board_id` edit a single board 
* `DELETE api/boards/:board_id` delete a single board 

### `pins`

* `GET /api/pin/` show an individual pin
* `GET /api/pin/:pin_id` show an individual pin
* `POST /api/pin/:pin_id` create an individual pin
* `PATCH /api/pin/:pin_id` edit an individual pin
* `DELETE /api/pin/:pin_id` delete an individual pin