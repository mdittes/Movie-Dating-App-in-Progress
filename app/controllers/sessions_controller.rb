class SessionsController < ApplicationController
    # skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by!(name: params[:name])
        if user.try(:authenticate, params[:password]) #&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created 
        else
            render json: {error: "Invalid Password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def authenticate(name, password)
        if (user.password == password)
            return true    
        else
            return false
        end
    end

    # def user_params
    #     params.permit(:name, :password)
    # end

end