json.pins do
  @pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :maker_id, :board_id, :description, :created_at, :updated_at
      json.pic url_for(pin.pic)
    end
  end
end