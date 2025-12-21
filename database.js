import mongoose from "mongoose";

const configSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  ticketCategoryId: String,
  logChannelId: String,
  setupChannelId: String,
  staffRoles: [String],
  archiveChannelId: String,
  priceJasaChannelId: String,
  priceLockChannelId: String,
  welcomeChannel: String,
  goodbyeChannel: String,
  welcomeBackground: String,
  goodbyeBackground: String
});

const ticketSchema = new mongoose.Schema({
  channelId: { type: String, required: true, unique: true },
  ticketNumber: Number,
  userId: String,
  subject: String,
  description: String,
  category: String,
  uws: String,
  status: String,
  createdAt: Date,
  claimedBy: String,
  totalPrice: Number,
  tax: Number,
  closeReason: String
});

export const Config = mongoose.model("Config", configSchema);
export const Ticket = mongoose.model("Ticket", ticketSchema);
