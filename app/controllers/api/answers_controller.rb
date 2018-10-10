class Api::AnswersController < ApplicationController
  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.includes(:user).find(params[:id])
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
  end

  def index
    @answers = Answer.all
  end

  private
  def answer_params
    params.require(:answer).permit(:body, :user_id, :question_id)
  end
end
