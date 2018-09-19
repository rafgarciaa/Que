class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :question_id, null: false

      t.timestamps
    end
    
    add_foreign_key :answers, :users
    add_foreign_key :answers, :questions
  end
end
