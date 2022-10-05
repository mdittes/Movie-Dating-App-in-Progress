class User < ApplicationRecord
    has_many :matches, dependent: :destroy
    has_many :genre_likes, dependent: :destroy
    has_many :liked_users, through: :matches
    has_many :genres, through: :genre_likes

    has_secure_password

    

    def users_liked_genres
        self.genres.map do |genre|
            genre.genre
        end
    end

end
