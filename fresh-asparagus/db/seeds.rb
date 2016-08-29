# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


elizabeth = User.create({name: "Rotten Tooth '94", email: "elizabeth@gmail.com", password: "password", trusted: true})
marco = User.create({name: "Marcoa", email: "marcoa@gmail.com", password: "password", trusted: true})
walter = User.create({name: "Walter", email: "walter@gmail.com", password: "password", trusted: false})

drama = Category.create({name: "Drama"})
action = Category.create({name: "Action"})
comedy = Category.create({name: "Comedy"})
thriller = Category.create({name: "Thriller"})
horror = Category.create({name: "Horror"})
adventure = Category.create({name: "Adventure"})
romance = Category.create({name: "Romance"})
documentary = Category.create({name: "Documentary"})

drama.films << Film.new({title: "Star Wars Ep. I", director: "George Lucas", summary: "Drama in space", year: "1960"})
drama.films << Film.new({title: "Star Wars Ep. II", director: "George Lucas", summary: "Another drama in space", year: "1961"})
action.films << Film.new({title: "Star Wars Ep. III", director: "George Lucas", summary: "Action in space", year: "1962"})
comedy.films << Film.new({title: "Star Wars Ep. V", director: "George L", summary: "Comedy in space", year: "1965"})
comedy.films << Film.new({title: "Star Wars Ep. IV", director: "George L", summary: "Comedy in space the revange", year: "1966"})
thriller.films << Film.new({title: "The revange", director: "Marco Martinez", summary: "Comming back to get you", year: "1967"})
horror.films << Film.new({title: "Rotten Thooth", director: "Niko", summary: "Inside the mouth", year: "1968"})
adventure.films << Film.new({title: "Star Wars Ep. 10", director: "George Lopez", summary: "George lopez goes to space.", year: "1967"})
romance.films << Film.new({title: "Scarlett Johansson meets Marco", director: "Micheal Jackson and kids", summary: "Based on a true love events", year: "2016"})
documentary.films << Film.new({title: "DBC", director: "Pan", summary: "...", year: "1969"})

drama.films.first.reviews << Review.new({user_id: 1, content: "It was meh", star_rating: 3})
comedy.films.first.reviews << Review.new({user_id: 2, content: "It was pretty funny. I laughed.", star_rating: 4})

drama.films.last.votes << Vote.new({user_id: 1})
drama.films.last.votes << Vote.new({user_id: 2})
drama.films.last.votes << Vote.new({user_id: 3})

drama.films.first.reviews.first.votes << Vote.new({user_id: 2})
drama.films.first.reviews.first.votes << Vote.new({user_id: 3})

comedy.films.first.reviews.first.comments << Comment.new({body: "This was a wack review. I agree.", user_id: 3})
comedy.films.first.reviews.first.comments.first.votes << Vote.new({user_id: 1})
