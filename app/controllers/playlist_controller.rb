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
        if first
          a = Track.new(:url => tracks[i], :tracknum => i)
          tinyurl = Track.count.to_s(26)
          a.tinyurl = tinyurl
          first = false
        else
          a = Track.new(:url => tracks[i], :tinyurl => tinyurl, :tracknum => i)
        end
        a.save
      end
      render :text => tinyurl
    else
      redirect_to :action => :index
    end
  end
end
