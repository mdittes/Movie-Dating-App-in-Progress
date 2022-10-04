class GenreLikesController < ApplicationController

    def create
        genrelike = GenreLike.create!(genre_likes_params)
        render json: genrelike
    end

    private 

    def genre_likes_params
        params.permit(:user_id, :genre_id)
    end

end
