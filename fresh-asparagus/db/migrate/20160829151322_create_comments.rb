class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :commentable_type, null: false
      t.integer :commentable_id, null: false
      t.text :body, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
