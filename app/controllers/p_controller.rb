class PController < ApplicationController
  def index
    tinyurl = params[:GET]
    
    @tracks = Track.find(:all)
    
  end
end