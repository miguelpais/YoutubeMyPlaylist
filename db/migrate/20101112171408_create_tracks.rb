class CreateTracks < ActiveRecord::Migration
  def self.up
    create_table :tracks do |t|
      t.string :tinyurl, :null => false
      t.integer :tracknum, :null => false
      t.string :url, :null => false
      t.timestamps
    end
    add_index :tracks, [:tinyurl, :tracknum], :unique => true
  end

  def self.down
    drop_table :tracks
  end
end