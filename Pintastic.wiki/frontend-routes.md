## Frontend Routes
Our components are organized as follows:
+ `Root`
    + `App`
        + `NavBar`
        + `Main`
        + `Footer`

The following routes, defined in `App`, will render components in `Main`.
+ `/`
    + `DiscoveryFeed`
        + `BoardIndexItem`
+ `/login`
    + `SessionForm`
+ `/signup`
     + `SessionForm`
+ `users/:username`
    + `SecondaryHeader`
    + `BoardIndex`
        + `BoardIndexItem`
+ `/boards/:boardTitle`
    + `SecondaryHeader`
        + `BoardIndex`
            + `BoardIndexItem`
+ `/boards/new`
    + `BoardForm`
+ `/boards/:boardId/edit`
    + `BoardForm`
+ `/pins/:pinId`
    + `FloatingPinHeader`
    + `PinShow`
+ `/pins/new`
    + `PinForm`