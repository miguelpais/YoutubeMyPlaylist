class PlaylistController < ApplicationController
  require 'json'
  
  layout "application", :except => :create
  
  def index
    
  end
  
  def create
    if request.post?
      tinyurl = ""
      first = true
      tracks_obj = params[:tracks_obj]
      tracks = JSON.parse(tracks_obj)
      tracks.each_index do |i| 
        a = Track.new(:url => tracks[i], :tracknum => i)
        a.save
        if first
          tinyurl = a.id.to_s(26)
          a.tinyurl = tinyurl
          first = false
        else
          a.tinyurl = tinyurl
        end
        a.save
      end
      render :text => tinyurl
    else
      redirect_to :action => :index
    end
  end
end
