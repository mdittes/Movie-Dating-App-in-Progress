class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :bio
  has_many :genres
end
