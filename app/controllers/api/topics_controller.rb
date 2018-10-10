class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.includes(:questions).all
  end

  def show
    @topic = Topic.includes(:questions).find(params[:id])
  end
end
