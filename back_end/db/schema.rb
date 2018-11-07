# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_19_194850) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "politicians", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "party"
    t.string "photo_url"
    t.string "position"
    t.string "website"
    t.string "address_url"
    t.string "phone_number"
    t.integer "number_of_likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_politicians", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "politician_id"
    t.boolean "upvote_toggled", default: false
    t.boolean "downvote_toggled", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["politician_id"], name: "index_user_politicians_on_politician_id"
    t.index ["user_id"], name: "index_user_politicians_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
