json.boards do
  @boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :name, :maker_id, :description, :created_at, :updated_at
    end
  end
end