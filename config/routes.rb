YoutubeMyPlaylist::Application.routes.draw do

  match '/:controller(/:action(/:tinyurl))'

  root :to => "playlist#index"
end
