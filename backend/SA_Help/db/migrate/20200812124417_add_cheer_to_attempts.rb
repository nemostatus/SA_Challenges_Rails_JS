class AddCheerToAttempts < ActiveRecord::Migration[6.0]
  def change
    add_column :attempts, :cheer, :integer
  end
end
