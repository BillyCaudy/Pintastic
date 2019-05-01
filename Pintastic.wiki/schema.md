# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed, unique |
| `email`           | string    | not null, indexed         |
| `firstname`       | string    | not null                  |
| `lastname`        | string    | not null                  |         
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `username, unique: true`
+ index on `session_token, unique: true`
  
## `boards`
| column name       | data type | details                           |
|:------------------|:---------:|:----------------------------------|
| `id`              | integer   | not null, primary key             |
| `maker_id`        | integer   | not null, indexed, foreign key    |
| `name`            | string    | not null                          |
| `description`     | string    | ***null ok***                     |
| `category_id`     | integer   | not null                          |
| `cover_pin_id`    | string    | not null                          |
| `secret`          | boolean   | ***null ok, BONUS***              | 
| `created_at`      | datetime  | not null                          |
| `updated_at`      | datetime  | not null                          |

+ `maker_id` references `users`
+ index on `maker_id`
  
## `pins`
| column name       | data type | details                           |
|:------------------|:---------:|:----------------------------------|
| `id`              | integer   | not null, primary key             |
| `maker_id`        | integer   | not null, indexed, foreign key    |
| `board_id`        | integer   | not null, indexed, foreign key    | 
| `section`         | string    | ***null ok***                     |
| `description`     | string    | ***null ok***                     |            
| `created_at`      | datetime  | not null                          |
| `updated_at`      | datetime  | not null                          |

+ `maker_id` references `users`  
+ `board_id` references `boards`
+ index on `[:board_id, :maker_id], unique: true`
+ index on `:maker_id, unique: true`

// We don't need a separate index for `board_id` because the first index adds it for us. ***???***

## `board_follows`  
| column name       | data type | details                           |
|:------------------|:---------:|:----------------------------------|
| `id`              | integer   | not null, primary key             |
| `board_id`        | integer   | not null, indexed, foreign key    |
| `follower_id`     | integer   | not null, indexed, foreign key    | 

+ index on `[:board_id, :follower_id], unique: true`

// Automatically 'follow' user if following at least one of their boards (user follows not needed)