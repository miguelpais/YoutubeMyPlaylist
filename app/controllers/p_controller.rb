class PController < ApplicationController
  def index
    tinyurl = params[:id]
    @id = 0
    @tracks = Track.find(:all, :conditions => {:tinyurl=> tinyurl})
  end
end