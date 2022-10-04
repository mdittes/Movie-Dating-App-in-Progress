class GenreSerializer < ActiveModel::Serializer
  attributes :genre
  has_many :users
end
