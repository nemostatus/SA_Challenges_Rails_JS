class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.string :name
      t.string :description
      t.integer :difficulty

      t.timestamps
    end
  end
end
