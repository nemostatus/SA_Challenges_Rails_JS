class RemoveCompleteFromAttempts < ActiveRecord::Migration[6.0]
  def change
    remove_column :attempts, :complete, :boolean
  end
end
