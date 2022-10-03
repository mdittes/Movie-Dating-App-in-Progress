class CreateGenreLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :genre_likes do |t|
      t.integer :user_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
