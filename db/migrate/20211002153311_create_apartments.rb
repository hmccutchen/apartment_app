class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :manager
      t.string :email
      t.string :price
      t.integer :bedrooms
      t.integer :bathrooms
      t.string :pets
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
