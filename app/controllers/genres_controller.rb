class GenresController < ApplicationController

    def index
        render json: Genre.all 
    end

    #Shows all the users who like the specified genre
    def show
        genre = Genre.find_by(id: params[:id])
        render json: genre.by_user
    end

end
