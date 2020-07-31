class CreateAttempts < ActiveRecord::Migration[6.0]
  def change
    create_table :attempts do |t|
      t.string :name
      t.string :deadline
      t.string :notes
      t.boolean :complete
      t.belongs_to :challenge
      t.timestamps
    end
  end
end
