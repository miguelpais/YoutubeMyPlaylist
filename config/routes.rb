YoutubeMyPlaylist::Application.routes.draw do

  match '/:controller(/:action(/:id))'
  

  root :to => "playlist#index"
end
