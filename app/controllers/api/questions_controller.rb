class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    # @question.author_id = current_user.id
    # for testing purposes only!!
    # topic_id will come from the frontend drop down menu selected by the user
    # @question.topic_id = Topic.first.id

    if @question.save
      render :show # render index page and append question to it (?)
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def index
    @questions = Question.all
    @users = User.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
      render json: {}
    else
      render json: {}, status: 404
    end
  end

  def update
    @question = Question.find(params[:id])

    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private
  def question_params
    params.require(:question).permit(:body, :author_id, :topic_id)
  end
end
