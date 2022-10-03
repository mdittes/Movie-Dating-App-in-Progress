class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer :user_id
      t.integer :liked_user_id

      t.timestamps
    end
  end
end
