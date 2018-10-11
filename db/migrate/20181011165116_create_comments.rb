class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :answer_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_foreign_key :comments, :users
    add_foreign_key :comments, :answers
  end
end
