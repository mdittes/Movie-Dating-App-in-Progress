class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
  before_action :authorize

  private 

  def record_not_found_response(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def record_invalid_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

  def authorize
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

end
