class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)

    if @question.save
      render :index # render index page and append question to it (?)
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  private
  def question_params
    params.require(:question).permit(:body)
  end
end
