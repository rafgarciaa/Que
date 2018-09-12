class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :topic_id, null: false

      t.timestamps
    end
    add_index :questions, :author_id
  end
end
