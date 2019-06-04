# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 
    User.destroy_all
    guest = User.create!(username: 'guest', email: 'guest@gmail.com', firstname: 'Guest', lastname: 'User', password: 'password')
    sioux = User.create!(username: 'siouxsie', email: 'siouxsie@gmail.com', firstname: 'Siouxsie', lastname: 'Sioux', password: 'password')
    robsm = User.create!(username: 'robertsmith', email: 'rsmith@gmail.com', firstname: 'Robert', lastname: 'Smith', password: 'password')
    janmo = User.create!(username: 'janellemonae', email: 'jmonae@gmail.com', firstname: 'Janelle', lastname: 'Monáe', password: 'password')
    geocl = User.create!(username: 'georgeclinton', email: 'gclinton@gmail.com', firstname: 'George', lastname: 'Clinton', password: 'password')
    Board.destroy_all
    board_guest = Board.create!(maker_id: guest.id, name: 'Add Pins to me!')
    board_sioux = Board.create!(maker_id: sioux.id, name: 'Goth Queen')
    Pin.destroy_all
    pin01_sioux = Pin.create!(maker_id: sioux.id, board_id: board_sioux.id)
end