class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :maker_id, null: false
      t.string :name, null: false
      t.string :description
      t.timestamps
    end

    add_index :boards, :maker_id
  end
end
