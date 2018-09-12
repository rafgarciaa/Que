class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    # for testing purposes only!!
    # topic_id will come from the frontend drop down menu selected by the user
    @question.topic_id = 1

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

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
  end

  private
  def question_params
    params.require(:question).permit(:body)
  end
end
