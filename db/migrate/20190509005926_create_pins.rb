class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :maker_id, null: false
      t.integer :board_id, null: false
      t.string :description
      t.timestamps
    end

    add_index :pins, :maker_id
    add_index :pins, [:maker_id, :board_id] # or just :board_id
  end
end
