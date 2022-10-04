class MatchesController < ApplicationController
    before_action :authorize

    def index
        render json: Match.all
    end

    def show
        match = Match.find_by(id: params[:id])
        render json: match
    end

    def create
        match = Match.create!(match_params)
        render json: match, status: :created
    end

    def destroy
        match = Match.find_by(id: params[:id])
        match.destroy
        head :no_content
    end

    private

    def match_params
        params.permit(:user_id, :liked_user_id)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
