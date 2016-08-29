class CreateFilms < ActiveRecord::Migration[5.0]
  def change
    create_table :films do |t|
      t.string :title, null: false
      t.string :director, null: false
      t.text :summary, null: false
      t.integer :year, null: false
      t.integer :category_id, null: false

      t.timestamps null: false
    end
  end
end
