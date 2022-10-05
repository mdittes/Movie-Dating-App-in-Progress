class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index 
        render json: User.all
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update 
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user
    end 

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :image_url, :bio, :password)
    end

end
