class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :film_id, null: false
      t.integer :user_id, null: false
      t.text :content, null: false
      t.integer :star_rating, null: false

      t.timestamps null: false
    end
  end
end
