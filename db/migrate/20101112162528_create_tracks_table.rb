class CreateTracksTable < ActiveRecord::Migration
  def self.up
    create_table :tracks do |t|
      t.string :tinyurl
      t.integer :tracknum
      t.string :url
    end
  end

  def self.down
    drop_table :tracks
  end
end
