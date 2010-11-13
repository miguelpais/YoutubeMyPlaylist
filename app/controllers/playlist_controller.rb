class PlaylistController < ApplicationController
  require 'json'
  
  verify :method => :post, :only => :create, :redirect_to => {:action => :index}
  
  def index
    
  end
  
  def create
    # tinyurl = ""
    #    first = true
    #    tracks_obj = params[:tracks_obj]
    #    tracks = JSON.parse(tracks_obj)
    #    tracks.each_index do |i| {
    #      if first
    #        a = Track.new(:url => tracks[i], :tracknum => i)
    #        tinyurl = a.id.to_s(26)
    #        a.tinyurl => tinyurl
    #        first = false
    #      else
    #        a = Track.new(:url => tracks[i], :tinyurl => tinyurl, :tracknum => i)
    #      end
    #      a.save
    #    }
    #    track.save
    #  end
  end
end
