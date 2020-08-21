class RemoveCompleteFromChallenges < ActiveRecord::Migration[6.0]
  def change
    remove_column :challenges, :complete, :integer
  end
end
