class AddCompleteToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :complete, :integer
  end
end
