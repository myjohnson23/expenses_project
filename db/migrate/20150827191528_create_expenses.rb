class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.string :description
      t.integer :amount
      t.timestamp :date
      t.string :category
      t.integer :category_monthly_amount

      t.timestamps null: false
    end
  end
end
