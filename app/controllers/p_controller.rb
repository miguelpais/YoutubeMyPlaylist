class PController < ApplicationController
  def index
    tinyurl = params[:GET]
    
    @tracks = Track.find_by_tinyurl(tinyurl)
    
  end
end
