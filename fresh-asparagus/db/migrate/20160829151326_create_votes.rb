class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.string :votable_type, null: false
      t.integer :votable_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
